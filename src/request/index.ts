import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';
import type { AxiosResponse } from 'axios';
import type { RequestOptions, Result } from '/#/axios';

import { useGlobSetting } from '/@/hooks/useGlobSetting';
import { useBasicStoreWithOut } from '/@/store/modules/basic';

import { WmAxios } from './Axios';
import { setObjToUrlParams, deepMerge } from '/@/utils';
import { clone } from 'lodash-es';
import { RequestEnum, ResultEnum, ContentTypeEnum } from '/@/enums/httpEnum';
import { isString } from '/@/utils/is';
import { joinTimestamp, formatRequestDate } from './helper';
import { checkStatus } from './checkStatus';
import { AxiosRetry } from './axiosRetry';

const { apiUrl } = useGlobSetting();

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 请求之前处理 config
   */
  beforeRequestHook: (config, options) => {
    const { apiUrl, formatDate, joinTime = true, joinParamsToUrl } = options;

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }

    const data = config.data || false;
    const params = config.params || {};

    formatDate && data && !isString(data) && formatRequestDate(data);

    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(config.params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data;
          config.params = params;
        } else {
          // 非 GET 请求如果没有提供 data，则将 params 视为 data
          config.data = params;
          config.params = undefined;
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data),
          );
        }
      } else {
        // 兼容 restful 风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }

    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, _options) => {
    const basicStore = useBasicStoreWithOut();
    const token = basicStore.getToken;

    const withToken = (config as Recordable).requestOptions.withToken;
    const tokenName = (config as Recordable).requestOptions.tokenName;

    if (token && withToken) {
      (config as Recordable).headers[tokenName] = token;
    }

    return config;
  },

  /**
   * @description: 处理请求数据。
   *               如果数据不是预期格式, 可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options;

    // i: 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }

    try {
      // i: 不处理数据, 直接返回 data
      if (isTransformResponse) {
        return res.data;
      }

      const { data } = res;
      const { status, msg, result } = data;
      const hasSuccess = data && Reflect.has(data, 'status') && status === ResultEnum.SUCCESS;

      if (hasSuccess) {
        return result;
      }

      let message = '';
      switch (status) {
        case ResultEnum.TIMEOUT:
          message = '连接超时,请检查您的网络';
        default:
          msg && (message = msg);
      }

      // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
      // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
      if (options.errorMessageMode === 'modal') {
        window.$dialog.error({
          title: '错误提示',
          content: message || '请求错误, 请稍后重新尝试!',
        });
      } else if (options.errorMessageMode === 'message') {
        window.$message.error(message || '请求错误, 请稍后重新尝试!');
      }
    } catch {
      throw new Error('请求错误, 请稍后重新尝试!');
    }
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (axiosInstance: AxiosResponse, error: any) => {
    const { config, response } = error; // TODO: { status, message }
    const errorMessageMode = config.requestOptions.errorMessageMode || 'none';

    const msg: string = response?.data?.error?.message ?? '';
    // const err: string = error?.toString?.() ?? '';

    // let errMessage = '';

    // try {
    //   if (status === ResultEnum.TIMEOUT && message.indexOf('timeout') !== -1) {
    //     errMessage = '连接超时,请检查您的网络!';
    //   }

    //   if (err?.includes('Network Error')) {
    //     errMessage = '网络异常,请检查您的网络!';
    //   }

    //   if (errorMessageMode) {
    //     if (errorMessageMode === 'modal') {
    //       window.$dialog.error({
    //         title: '错误提示',
    //         content: errMessage,
    //       });
    //     } else if (errorMessageMode === 'message') {
    //       window.$message.error(message);
    //     }

    //     return Promise.reject(error);
    //   }
    // } catch (error) {
    //   throw new Error(error as unknown as string);
    // }

    checkStatus(error?.response?.status, msg, errorMessageMode);

    // 添加自动重试机制 保险起见 只针对GET请求
    const retryRequest = new AxiosRetry();
    const { isOpenRetry } = config.requestOptions.retryRequest;
    config.method?.toUpperCase() === RequestEnum.GET &&
      isOpenRetry &&
      // @ts-ignore
      retryRequest.retry(axiosInstance, error);

    return Promise.reject(error);
  },
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new WmAxios(
    deepMerge(
      {
        timeout: 15 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        transform: clone(transform), // 数据处理
        requestOptions: {
          isReturnNativeResponse: false, // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isTransformResponse: true, // 需要对返回数据进行处理
          joinParamsToUrl: false, // post请求的时候添加参数到 url
          formatDate: true, // 格式化提交参数时间
          errorMessageMode: 'message', // 消息提示类型
          apiUrl, // 接口地址
          joinTime: true, // 是否加入时间戳
          ignoreCancelToken: true, // 忽略重复请求
          withToken: true, // 是否携带 token
          tokenName: 't',
          retryRequest: {
            isOpenRetry: true,
            count: 5,
            waitTime: 15 * 1000,
          },
        },
      },
      opt || {},
    ),
  );
}

export const defHttp = createAxios();

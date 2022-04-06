import type { ErrorMessageMode } from '/#/axios';
import type { ExamplesParams, ExamplesResultModel } from './model';

import { defHttp } from '/@/request';

enum Api {
  Examples = '/examples',
}

/**
 * @description api 调用示例
 * @param {ExamplesParams} params 接口参数
 * @param {ErrorMessageMode} mode 错误提示类型
 */
export function examples(params: ExamplesParams, mode: ErrorMessageMode = 'message') {
  return defHttp.get<ExamplesResultModel>(
    {
      url: Api.Examples,
      params,
    },
    { errorMessageMode: mode },
  );
}

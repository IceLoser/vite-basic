export interface RequestOptions {
  joinParamsToUrl?: boolean; // 将请求参数拼接到url
  formatDate?: boolean; // 格式请求参数时间
  isTransformResponse?: boolean; // 是否处理请求结果
  // 是否返回本机响应头
  // 例如:当您需要获取响应头时使用此属性
  isReturnNativeResponse?: boolean;
  apiUrl?: string; // 接口地址，使用默认的 apiUrl，如果你让它空
  urlPrefix?: string; // 请求拼接路径
  errorMessageMode?: ErrorMessageMode; // 错误消息提示类型
  joinTime?: boolean; // 是否添加时间戳
  ignoreCancelToken?: boolean; // 是否可取消请求
  withToken?: boolean; // 是否携带 token
  tokenName?: string; // 是否携带 token
  retryRequest?: RetryRequest; // 请求重试机制
}

export interface Result<T = any> {
  status: number;
  msg: string;
  result: T;
}

export interface UploadFileParams {
  data?: Recordable; // 文件参数接口字段名
  name?: string;
  file: File | Blob;
  filename?: string;
  [key: string]: any;
}

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

import type { AxiosRequestConfig, Canceler } from 'axios';

import axios from 'axios';
import { isFunction } from '/@/utils/is';

/**
 * @description 存储每个请求的标识
 */
let pendingMap = new Map<string, Canceler>();

export class AxiosCanceler {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config); //  移除相同请求

    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * @description 移除请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);

    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * @description: 清除所有等待
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  /**
   * @description: 重置标识存储
   */
  reset() {
    pendingMap = new Map<string, Canceler>();
  }
}

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');

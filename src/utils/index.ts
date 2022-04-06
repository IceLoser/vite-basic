import type { App, Plugin } from 'vue';

import { isObject } from '/@/utils/is';

/**
 * @description 获取 css 变量
 * @param key string
 * @returns string
 */
export function getPropertyValue(key: string) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(key);
}

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

/**
 * @description 获取图片路径
 * @param url string
 * @returns string
 */
export const getSrc = (url: string) => {
  return new URL(url, import.meta.url).href;
};

/**
 * @description 获取微服务路径
 * @param key string
 * @returns string
 */
export const getViteMicroApp = (key: string): { name: string; url: string } => {
  const microApp = import.meta.env.VITE_MICRO_APP as string;
  const formatMicroApp = JSON.parse(microApp.replace(/'/g, '"'));

  for (const [name, url] of formatMicroApp) {
    if (key === name) {
      return { name, url };
    }
  }

  return { name: '', url: '' };
};

/**
 * @description 合并对象
 * @param {Object} src
 * @param {Object} target
 * @returns {Object}
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

/**
 * @description 将对象作为参数添加到URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

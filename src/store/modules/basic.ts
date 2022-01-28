import { store } from '/@/store';
import { defineStore } from 'pinia';
import { getBrowserType } from '/@/utils/browserType';
import { dependencies, version, versionCode } from 'package.json';

interface Headers {
  readonly a: 16; // 平台来源
  readonly d: string; // 时间戳
  readonly h: 'wanxue';
  readonly m: string; // 浏览器标识 OR Android标识 OR IOS标识
  readonly n: string; // 版本号
  readonly p: 13; // 端
  readonly s?: string; // Vue 版本
  t?: string; // token
  readonly v?: number; // 版本数字标识
}

interface BasicState {
  headers: Headers;
}

export type HeadersRequest = Headers;

const { supporter, supporterVs } = getBrowserType();

export const useBasicStore = defineStore({
  id: 'app-basic',
  state: (): BasicState => ({
    headers: {
      a: 16,
      d: Date.parse(new Date().toString()).toString(),
      h: 'wanxue',
      m: `${supporter}/${supporterVs}`,
      n: version,
      p: 13,
      s: dependencies.vue.replace('^', ''),
      t: undefined,
      v: versionCode,
    },
  }),
  getters: {
    getHeaders(): Headers {
      return this.headers;
    },
  },
  actions: {
    setHeaders(data: Headers) {
      this.headers = { ...this.headers, ...data };
    },
  },
});

// !setup
export function useBasicStoreWithOut() {
  return useBasicStore(store);
}

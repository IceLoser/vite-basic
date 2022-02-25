import { store } from '/@/store';
import { defineStore } from 'pinia';
import { getBrowserType } from '/@/utils/browserType';
import { version, versionCode, dependencies } from '../../../package.json';

import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { HEADERS_KEY } from '/@/enums/cacheEnum';

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
    getToken(): string {
      const { t } = getAuthCache<HeadersRequest>(HEADERS_KEY);
      return this.headers.t || t || '';
    },
    getHeaders(): Headers {
      return this.headers || getAuthCache<HeadersRequest>(HEADERS_KEY);
    },
  },
  actions: {
    setToken(t: string) {
      this.headers = { ...this.headers, t };
      setAuthCache(HEADERS_KEY, this.headers);
    },
    setHeaders(data: Headers) {
      this.headers = { ...this.headers, ...data };
      setAuthCache(HEADERS_KEY, this.headers);
    },
  },
});

// !setup
export function useBasicStoreWithOut() {
  return useBasicStore(store);
}

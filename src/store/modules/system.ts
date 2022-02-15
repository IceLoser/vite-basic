import { store } from '/@/store';
import { defineStore } from 'pinia';
import { getBrowserType } from '/@/utils/browserType';

interface SystemState {
  isApp: boolean; // 运行环境
  device: string; // 设备
  pageLoading: boolean; // 页面加载状态
}

export type HeadersRequest = Headers;

const { shell, system } = getBrowserType();

export const useSystemStore = defineStore({
  id: 'app-system',
  state: (): SystemState => ({
    isApp: shell === 'wanxue' ? true : false,
    device: system,
    pageLoading: false,
  }),
  getters: {
    getIsApp(): boolean {
      return this.isApp;
    },
    getDevice(): string {
      return this.device;
    },
    getPageLoading(): boolean {
      return this.pageLoading;
    },
  },
  actions: {
    setPageLoading(status: boolean) {
      this.pageLoading = status;
    },
  },
});

// !setup
export function useSystemStoreWithOut() {
  return useSystemStore(store);
}

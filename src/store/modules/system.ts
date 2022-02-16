import { store } from '/@/store';
import { defineStore } from 'pinia';
import { getBrowserType } from '/@/utils/browserType';

interface SystemState {
  isApp: boolean; // 运行环境
  device: string; // 设备
  network: boolean; // 网络状态
  pageLoading: boolean; // 页面加载状态
}

export type HeadersRequest = Headers;

const { shell, system } = getBrowserType();

export const useSystemStore = defineStore({
  id: 'app-system',
  state: (): SystemState => ({
    isApp: shell === 'wanxue' ? true : false,
    device: system,
    network: navigator.onLine,
    pageLoading: false,
  }),
  getters: {
    getIsApp(): boolean {
      return this.isApp;
    },
    getDevice(): string {
      return this.device;
    },
    getNetwork(): boolean {
      return this.network;
    },
    getPageLoading(): boolean {
      return this.pageLoading;
    },
  },
  actions: {
    setNetWork(status: boolean) {
      this.network = status;
    },
    setPageLoading(status: boolean) {
      this.pageLoading = status;
    },
  },
});

// !setup
export function useSystemStoreWithOut() {
  return useSystemStore(store);
}

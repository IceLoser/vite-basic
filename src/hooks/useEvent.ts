import { useSystemStoreWithOut } from '/@/store/modules/system';

// 监听网络状态变动
export function useNetworkStatus() {
  const systemStore = useSystemStoreWithOut();

  window.addEventListener('online', () => {
    systemStore.setNetWork(true);
    console.info('ICE-[ status ] >>>', systemStore.getNetwork);
  });
  window.addEventListener('offline', () => {
    systemStore.setNetWork(false);
    console.info('ICE-[ status ] >>>', systemStore.getNetwork);
  });
}

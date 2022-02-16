import { useOnline } from '@vueuse/core';
import { useSystemStoreWithOut } from '/@/store/modules/system';

// 监听网络状态变动
export function useNetworkStatus() {
  const online = useOnline();
  const systemStore = useSystemStoreWithOut();

  watch(
    () => online.value,
    (d) => {
      systemStore.setNetWork(d);
    },
  );
}

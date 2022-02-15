import type { Router } from 'vue-router';

import { useSystemStore } from '/@/store/modules/system';

// todo app 运行环境拦截逻辑
export function createAppGuard(router: Router) {
  const systemStore = useSystemStore();
  const isApp = systemStore.getIsApp;

  if (!isApp) {
    return;
  } // *运行环境不为 app 内,直接跳出拦截

  console.info('ICE-[ router ] >>>', router);
}

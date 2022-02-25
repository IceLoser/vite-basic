import type { Router } from 'vue-router';

import { useUserStoreWithOut } from '/@/store/modules/user';
import { useBasicStoreWithOut } from '/@/store/modules/basic';
import { useSystemStoreWithOut } from '/@/store/modules/system';

import { WHITE_NAME_LIST } from '/@/router/helper/constant';

// 浏览器运行环境拦截逻辑
export function createHtmlGuard(router: Router) {
  const systemStore = useSystemStoreWithOut();

  const isApp = systemStore.getIsApp;

  if (isApp) {
    return;
  } // *运行环境为 app 内,直接跳出拦截

  router.beforeEach(async (to, _from, next) => {
    if (WHITE_NAME_LIST.includes(to.path)) {
      next();
      return;
    }

    const basicStore = useBasicStoreWithOut();
    const t = basicStore.getToken;

    if (t) {
      const userStore = useUserStoreWithOut();
      const userId = userStore.getUserId;

      if (!userId) {
        userStore.setUserInfo();
      }

      next();
      return;
    }

    next({
      path: '/login',
      replace: true,
      query: { redirect: to.fullPath },
    });
    return;
  });
}

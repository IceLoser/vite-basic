import type { Router, RouteRecordRaw } from 'vue-router';

import { useUserStoreWithOut } from '/@/store/modules/user';
import { useBasicStoreWithOut } from '/@/store/modules/basic';
import { useSystemStoreWithOut } from '/@/store/modules/system';
import { usePermissionStoreWithOut } from '/@/store/modules/permission';

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

    const userStore = useUserStoreWithOut();
    const userId = userStore.getUserId;

    const permissionStore = usePermissionStoreWithOut();

    if (!t) {
      next({
        path: '/login',
        replace: true,
        query: { redirect: to.fullPath },
      });
      return;
    }

    if (!userId) {
      userStore.setUserInfo();
    }

    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }

    const routers = await permissionStore.buildRouter();
    routers.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });
    permissionStore.setDynamicAddedRoute(true);

    next({ path: to.fullPath, replace: true, query: to.query });
  });
}

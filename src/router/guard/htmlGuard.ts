import type { Router, RouteRecordRaw } from 'vue-router';

import { useUserStoreWithOut } from '/@/store/modules/user';
import { useBasicStoreWithOut } from '/@/store/modules/basic';
import { useSystemStoreWithOut } from '/@/store/modules/system';
import { usePermissionStoreWithOut } from '/@/store/modules/permission';

import { WHITE_NAME_LIST } from '/@/router/helper/constant';
import { RESULT_NAME } from '/@/router/routers/basic';

// 浏览器运行环境拦截逻辑
export function createHtmlGuard(router: Router) {
  const systemStore = useSystemStoreWithOut();

  const isApp = systemStore.getIsApp;

  if (isApp) {
    return;
  } // *运行环境为 app 内,直接跳出拦截

  router.beforeEach(async (to, from, next) => {
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

    if (to.name === RESULT_NAME) {
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      next(nextData);
    }
  });
}

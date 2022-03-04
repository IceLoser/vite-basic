import type { Router } from 'vue-router';

import { usePermissionStoreWithOut } from '/@/store/modules/permission';

export function dynamicRouterGuard(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    const permissionStore = usePermissionStoreWithOut();
    const routerList = permissionStore.getRouterList;
    const menuList = await permissionStore.buildMenu(routerList);

    if (!menuList.length) {
      next();
      return;
    }

    if (permissionStore.getIsDynamicAddedMenu) {
      next();
      return;
    }
    permissionStore.setMenuList(menuList);
    permissionStore.setDynamicAddedMenu(true);

    next();
    return;
  });
}

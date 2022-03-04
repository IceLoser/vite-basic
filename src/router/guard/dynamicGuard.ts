import type { Router } from 'vue-router';

import { usePermissionStoreWithOut } from '/@/store/modules/permission';

export function dynamicRouterGuard(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    const permissionStore = usePermissionStoreWithOut();

    if (permissionStore.getIsDynamicAddedMenu) {
      next();
      return;
    }
    const routerList = permissionStore.getRouterList;
    const menuList = await permissionStore.buildMenu(routerList);
    permissionStore.setMenuList(menuList);
    permissionStore.setDynamicAddedMenu(true);

    next();
    return;
  });
}

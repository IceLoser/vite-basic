import type { Router } from 'vue-router';

import { usePermissionStoreWithOut } from '/@/store/modules/permission';

export function dynamicRouterGuard(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    const permissionStore = usePermissionStoreWithOut();
    const menuList = permissionStore.getMenuList;

    if (!menuList.length) {
      permissionStore.setMenuList();
    }

    next();
    return;
  });
}

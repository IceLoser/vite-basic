import type { Menu } from '/@/router/types';
import type { RouteRecordRaw } from 'vue-router';

import { store } from '/@/store';
import { defineStore } from 'pinia';
import { asyncRoutes } from '/@/router/routers';

interface permissionState {
  menuList: Array<Menu>;
  routerList: Array<RouteRecordRaw>;
  isDynamicAddedRoute: boolean;
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): permissionState => ({
    menuList: [],
    routerList: [],
    isDynamicAddedRoute: false,
  }),
  getters: {
    getMenuList(): Array<Menu> {
      return this.menuList;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setMenuList() {
      this.menuList = [];
    },
    setDynamicAddedRoute(status: boolean) {
      this.isDynamicAddedRoute = status;
    },
    async buildRouter() {
      return asyncRoutes;
    },
  },
});

// !setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}

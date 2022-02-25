import type { Menu } from '/@/router/types';
import type { RouteRecordRaw } from 'vue-router';

import { store } from '/@/store';
import { defineStore } from 'pinia';

interface permissionState {
  menuList: Array<Menu>;
  routerList: Array<RouteRecordRaw>;
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): permissionState => ({
    menuList: [],
    routerList: [],
  }),
  getters: {
    getMenuList(): Array<Menu> {
      return this.menuList;
    },
  },
  actions: {
    setUserInfo(data: Array<Menu>) {
      this.menuList = data;
    },
  },
});

// !setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}

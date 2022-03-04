// import type { MenuOption } from 'naive-ui';
import type { AppRouteModule, Menu } from '/#/router';

import { store } from '/@/store';
import { defineStore } from 'pinia';
import { renderIcon } from '/@/utils/render';
import { asyncRoutes } from '/@/router/routers';
import { RouterLink } from 'vue-router';
import { h } from 'vue';

interface permissionState {
  menuList: Array<Menu>;
  routerList: Array<AppRouteModule>;
  isDynamicAddedMenu: boolean;
  isDynamicAddedRoute: boolean;
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): permissionState => ({
    menuList: [],
    routerList: [],
    isDynamicAddedMenu: false,
    isDynamicAddedRoute: false,
  }),
  getters: {
    getMenuList(): Array<Menu> {
      return this.menuList;
    },
    getRouterList(): Array<AppRouteModule> {
      return this.routerList;
    },
    getIsDynamicAddedMenu(): boolean {
      return this.isDynamicAddedMenu;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setMenuList(data: Array<Menu>) {
      this.menuList = data;
    },
    setDynamicAddedMenu(status: boolean) {
      this.isDynamicAddedMenu = status;
    },
    setRouterList(data: Array<AppRouteModule>) {
      this.routerList = data;
    },
    setDynamicAddedRoute(status: boolean) {
      this.isDynamicAddedRoute = status;
    },
    async buildMenu(routerList: Array<AppRouteModule>) {
      const _menu: Array<Menu> = [];

      routerList.forEach(async (item) => {
        const children = item.children ? await this.buildMenu(item.children) : undefined;
        _menu.push({
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: item.name,
                  path: item.path,
                },
              },
              { default: () => item.meta.title },
            ),
          key: item.name,
          icon: renderIcon(item.meta.icon),
          children,
        });
      });

      return _menu;
    },
    async buildRouter() {
      this.setRouterList(asyncRoutes);
      return asyncRoutes;
    }, // todo: 可将此处逻辑替换为从服务端获取动态路由数据
  },
});

// !setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}

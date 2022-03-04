import { store } from '/@/store';
import { defineStore } from 'pinia';

import { useBasicStoreWithOut } from './basic';
import { usePermissionStoreWithOut } from './permission';

import { useGo } from '/@/hooks/usePage';
import { router } from '/@/router';

interface userState {
  avatar: string;
  userId: string;
  userName: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): userState => ({
    avatar: '',
    userId: '',
    userName: '',
  }),
  getters: {
    getAvatar(): string {
      return this.avatar;
    },
    getUserId(): string {
      return this.userId;
    },
    getUserName(): string {
      return this.userName;
    },
  },
  actions: {
    setUserInfo() {
      this.avatar = '';
      this.userId = '001';
      this.userName = '小冰(Ice)';
    },
    async logout() {
      const go = useGo(router);
      const basicStore = useBasicStoreWithOut();
      const permissionStore = usePermissionStoreWithOut();

      // i: 清空用户信息
      this.avatar = '';
      this.userId = '001';
      this.userName = '小冰(Ice)';

      // i: 清空 token
      basicStore.setToken('');

      // i: 清空 菜单列表 ADN 路由列表
      permissionStore.setMenuList([]);
      permissionStore.setDynamicAddedMenu(false);
      permissionStore.setRouterList([]);
      permissionStore.setDynamicAddedRoute(false);

      // i: 跳转登录
      go({ path: '/login', replace: true });
    },
  },
});

// !setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}

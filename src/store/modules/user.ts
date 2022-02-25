import { store } from '/@/store';
import { defineStore } from 'pinia';

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
  },
});

// !setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}

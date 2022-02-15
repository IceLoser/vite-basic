import { store } from '/@/store';
import { defineStore } from 'pinia';

interface userState {
  userId: string;
  userName: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): userState => ({
    userId: '',
    userName: '',
  }),
  getters: {
    getUserId(): string {
      return this.userId;
    },
    getUserName(): string {
      return this.userName;
    },
  },
  actions: {
    setUserInfo(data: userState) {
      this.userId = data.userId;
      this.userName = data.userName;
    },
  },
});

// !setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}

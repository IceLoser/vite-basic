import { NDropdown } from 'naive-ui';
import { renderIcon } from './utils';
import { useUserStoreWithOut } from '/@/store/modules/user';
import { PersonCircleOutline as UserIcon, LogOutOutline as LogoutIcon } from '@vicons/ionicons5';

import theAvatar from '/@/assets/images/the_default_avatar.gif';

export default defineComponent({
  name: 'UserDrop',
  components: {
    'n-dropdown': NDropdown,
  },
  setup() {
    const userStore = useUserStoreWithOut();
    const userName = userStore.getUserName;
    const userAvatar = userStore.getAvatar || theAvatar;

    const options = [
      {
        label: '用户资料',
        key: 1,
        icon: renderIcon(UserIcon),
      },
      {
        label: '退出登录',
        key: 2,
        icon: renderIcon(LogoutIcon),
      },
    ];

    function onSelect(key: number) {
      console.info('ICE-[ key ] >>>', key);
    }

    return { userAvatar, userName, options, onSelect };
  },
  render() {
    const { userAvatar, userName, options, onSelect } = this;

    function userInfo(text: string) {
      return (
        <div class="flex items-center cursor-pointer ml-3">
          <img class="w-8 h-8 rounded-lg" src={userAvatar} />
          <span class="pl-2 pr-2 font-mono font-medium text-white">{text}</span>
        </div>
      );
    }

    return (
      <n-dropdown options={options} onSelect={onSelect}>
        {userInfo(userName)}
      </n-dropdown>
    );
  },
});

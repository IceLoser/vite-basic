import type { AppRouteModule } from '/#/router';

import { HomeOutline as MainIcon, RibbonOutline as MainIndex } from '@vicons/ionicons5';

const LAYOUT = () => import('/@/layout/index.vue');

const dashboard: AppRouteModule = {
  path: '/main',
  name: 'MainRoot',
  component: LAYOUT,
  redirect: '/main/index',
  meta: {
    title: '首页',
    icon: markRaw(MainIcon),
  },
  children: [
    {
      path: 'index',
      name: 'MainIndex',
      component: () => import('/@/views/Main/index.vue'),
      meta: {
        title: '首页',
        icon: markRaw(MainIndex),
      },
    },
  ],
};

export default dashboard;

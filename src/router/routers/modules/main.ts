import type { AppRouteModule } from '/#/router';

import { HomeOutline as MainIcon, RibbonOutline as MainIndex } from '@vicons/ionicons5';

const LAYOUT = () => import('/@/layout/index.vue');

const MAIN_ROUTE: AppRouteModule = {
  path: '/main',
  name: 'MainRoot',
  component: LAYOUT,
  redirect: '/main/index',
  meta: {
    orderNo: 0,
    title: '首页',
    icon: markRaw(MainIcon),
  },
  children: [
    {
      path: 'index',
      name: 'MainIndex',
      component: () => import('/@/views/Main/index.vue'),
      meta: {
        orderNo: 0,
        title: '首页',
        icon: markRaw(MainIndex),
      },
    },
  ],
};

export default MAIN_ROUTE;

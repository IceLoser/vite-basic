import type { AppRouteModule } from '/#/router';

import { DesktopOutline as CareerAdminIcon } from '@vicons/ionicons5';

const LAYOUT = () => import('/@/layout/index.vue');

const CAREER_ADMIN_ROUTE: AppRouteModule = {
  path: '/career-admin',
  name: 'CareerAdmin',
  component: LAYOUT,
  redirect: '/career-admin/index',
  meta: {
    orderNo: 1,
    title: '职业C端',
    icon: markRaw(CareerAdminIcon),
  },
  children: [
    {
      path: '/career-admin/:path(.*)',
      name: 'CareerAdminIndex',
      component: () => import('/@/views/CareerAdmin/index.vue'),
      meta: {
        orderNo: 0,
        title: '职业C端首页',
        icon: markRaw(CareerAdminIcon),
      },
    },
  ],
};

export default CAREER_ADMIN_ROUTE;

import type { AppRouteModule } from '/#/router';

const LAYOUT = () => import('/@/layout/index.vue');

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    title: '首页',
  },
  children: [
    {
      path: 'index',
      name: 'HomeRoot',
      component: () => import('/@/views/Home/index.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
};

export default dashboard;

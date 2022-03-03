import type { AppRouteModule } from '/#/router';

const LAYOUT = () => import('/@/layout/index.vue');

const dashboard: AppRouteModule = {
  path: '/main',
  name: 'MainRoot',
  component: LAYOUT,
  redirect: '/main/index',
  meta: {
    title: '首页',
  },
  children: [
    {
      path: 'index',
      name: 'Main',
      component: () => import('/@/views/Main/index.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
};

export default dashboard;

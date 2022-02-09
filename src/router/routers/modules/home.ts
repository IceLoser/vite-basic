import type { AppRouteModule } from '/#/router';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: () => import('/@/views/Home/index.vue'),
  meta: {
    orderNo: 10,
    title: '首页',
    hideMenu: true,
    ignoreKeepAlive: true,
  },
};

export default dashboard;

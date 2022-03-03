import type { AppRouteRecordRaw } from '/#/router';

const resultComponent = () => import('/@/views/Result/index.vue');
const LAYOUT = () => import('/@/layout/index.vue');
export const REDIRECT_NAME = 'Redirect';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/main',
  meta: {
    title: 'Root',
    hideBreadcrumb: true,
    hideMenu: true,
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/Login/index.vue'),
  meta: {
    title: '登录',
    hideBreadcrumb: true,
    hideMenu: true,
  },
};

export const ErrorRoute: AppRouteRecordRaw[] = [
  {
    // 注意这里，404页面匹配规则和以前不相同，要采用这种配置方式才行
    path: '/:pathMatch(.*)*',
    component: resultComponent,
    name: 'Result',
    meta: {
      title: 'Error',
    },
  },
];

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: REDIRECT_NAME,
  meta: {
    title: '刷新',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('/@/views/redirect/index.vue'),
      meta: {
        title: '刷新',
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};

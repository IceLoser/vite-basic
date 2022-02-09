import type { AppRouteRecordRaw } from '/#/router';

const resultComponent = () => import('/@/views/Result/index.vue');

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home',
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/Login/index.vue'),
  meta: {
    title: '登录',
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

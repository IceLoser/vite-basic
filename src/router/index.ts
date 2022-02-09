import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

// import { WHITE_NAME_LIST } from '/@/router/helper/constant';
import { basicRoutes } from '/@/router/routers';

export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as Array<RouteRecordRaw>,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description: 挂载路由
 * @param {App} app
 */
export function setupRouter(app: App<Element>) {
  app.use(router);
}

import type { Router } from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { createAppGuard } from './appGuard';
import { createHtmlGuard } from './htmlGuard';
import { dynamicRouterGuard } from './dynamicGuard';

// 拦截器执行顺序不可修改
export function setupRouterGuard(router: Router) {
  createPageGuard(router);

  createAppGuard(router);
  createHtmlGuard(router);
  dynamicRouterGuard(router);
}

/**
 * 处理页面状态
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {
    // 不进行重复拦截
    NProgress.start();

    to.meta.loaded = !!loadedPageMap.get(to.path);

    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
    NProgress.done();
  });
}

import type { AppRouteModule } from '/#/router';

import { RootRoute, LoginRoute, ErrorRoute, REDIRECT_ROUTE } from '/@/router/routers/basic';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = routeModuleList;

export const basicRoutes = [RootRoute, LoginRoute, REDIRECT_ROUTE, ...ErrorRoute, ...asyncRoutes];

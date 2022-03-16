import type { AppRouteModule } from '/#/router';

import { RootRoute, LoginRoute, ErrorRoute, REDIRECT_ROUTE } from '/@/router/routers/basic';
import { sortBy } from 'lodash-es';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: Array<AppRouteModule> = [];
const utilSortBy = (data: Array<AppRouteModule>) => {
  return sortBy(data, (item) => {
    if (item.children) {
      item.children = utilSortBy(item.children);
    }
    return item.meta.orderNo;
  });
};

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = utilSortBy(routeModuleList);

export const basicRoutes = [RootRoute, LoginRoute, REDIRECT_ROUTE, ...ErrorRoute];

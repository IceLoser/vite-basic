import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import type { VNodeChild, Component } from 'vue';

import { defineComponent } from 'vue';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface AppRouterMeta extends RouteMeta {
  icon: Component;
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: AppRouterMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success';
  content?: string;
  dot?: boolean;
}

export interface Menu {
  // name: string;
  // icon?: string;
  // path: string;

  // // 路径包含参数，自动赋值
  // paramPath?: string;
  // disabled?: boolean;
  // children?: Menu[];
  // orderNo?: number;
  // meta?: Partial<RouteMeta>;
  // tag?: MenuTag;
  // hideMenu?: boolean;

  label: string | (() => VNodeChild);
  key: string;
  icon: () => VNodeChild;
  children?: Array<Menu>;
  disabled?: boolean;
  extra?: string | (() => VNodeChild);
  meta?: Partial<RouteMeta>;
}

export interface MenuModule {
  orderNo?: number;
  menu: Menu;
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;

import type { RouteMeta } from 'vue-router';

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success';
  content?: string;
  dot?: boolean;
}

export interface Menu {
  name: string;
  icon?: string;
  path: string;

  // 路径包含参数，自动赋值
  paramPath?: string;
  disabled?: boolean;
  children?: Menu[];
  orderNo?: number;
  meta?: Partial<RouteMeta>;
  tag?: MenuTag;
  hideMenu?: boolean;
}

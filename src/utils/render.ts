import type { Component } from 'vue';
import { NIcon } from 'naive-ui';

// 渲染 icon
export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

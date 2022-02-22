import type { App, Plugin } from 'vue';

/**
 * @description 获取 css 变量
 * @param key string
 * @returns string
 */
export function getPropertyValue(key: string) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(key);
}

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

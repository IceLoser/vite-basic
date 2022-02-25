import pkg from '../../package.json';

export function getCommonStoragePrefix() {
  const VITE_GLOB_APP_SHORT_NAME = import.meta.env.VITE_GLOB_APP_SHORT_NAME;
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase();
}

/**
 * @description: 根据版本生成缓存密钥
 */
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

/**
 * @description: 是否开发环境
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: 获取环境变量
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

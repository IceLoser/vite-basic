import type { VNode, ComponentRenderProxy } from 'vue';

declare global {
  type Recordable<T = any> = Record<string, T>;
  type ImportMetaEnv = ViteEnv;

  interface ViteEnv {
    VITE_PORT: number; // 端口号
    VITE_GLOB_APP_TITLE: string; // 全称
    VITE_GLOB_APP_SHORT_NAME: string; // 简称

    VITE_PUBLIC_PATH: string; // 公共路径

    VITE_PROXY: [string, string][]; // !跨域代理，可以配置多个 <请注意不要换行>
    VITE_DROP_CONSOLE: boolean; // 是否删除控制台
    VITE_GLOB_API_URL: string; // 基本接口地址
    VITE_GLOB_UPLOAD_URL: string; // 文件上传地址，可选

    VITE_USE_PWA: boolean; // 是否开启 pwa
    VITE_LEGACY: boolean; // 是否与旧的浏览器兼容

    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'; // 是否启用 gzip 压缩或 brotli 压缩
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean; // 使用压缩时是否删除原始文件
  }

  namespace JSX {
    type Element = VNode;
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

export {};

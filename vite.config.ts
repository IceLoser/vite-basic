import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';
import { wrapperEnv, pathResolve, configManualChunk } from './build/utils';
import { createProxy } from './build/proxy';
import { createVitePlugins } from './build/plugin';

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: /\/~\//,
          replacement: pathResolve('') + '/',
        },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true, // 监听所有本地ip
      port: VITE_PORT,
      open: true,
      proxy: createProxy(VITE_PROXY), // !从.env加载代理配置
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.info', 'console.log', 'debugger'] : [],
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: '',
          javascriptEnabled: true,
        },
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
  };
};

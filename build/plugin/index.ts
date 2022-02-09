import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import { configPwaPlugin } from './pwa';
import { configHtmlPlugin } from './html';
import { configCompressPlugin } from './compress';
import { configAutoImportPlugin } from './autoImport';
import { configComponentsPlugin } from './components';
import { configVisualizerPlugin } from './visualizer';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;

  const vitePlugins = [
    vue(),
    vueJsx(),
    vueSetupExtend(), // setup 增强
  ];

  vitePlugins.push(configComponentsPlugin());
  vitePlugins.push(configAutoImportPlugin());
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  if (isBuild) {
    VITE_LEGACY && vitePlugins.push(legacy());

    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    );

    vitePlugins.push(configPwaPlugin(viteEnv));
    vitePlugins.push(configVisualizerPlugin());
  }

  return vitePlugins;
}

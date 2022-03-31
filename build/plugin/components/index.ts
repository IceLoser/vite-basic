import Components from 'unplugin-vue-components/vite';
import { VantResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers';

/**
 * 按需加载
 * https://github.com/antfu/unplugin-vue-components
 */
export function configComponentsPlugin() {
  return Components({
    dts: 'types/components.d.ts', // !当' typescript '被安装时，默认启用
    deep: true,
    resolvers: [VantResolver(), NaiveUiResolver()],
  });
}

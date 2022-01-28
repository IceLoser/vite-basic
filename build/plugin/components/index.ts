import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

/**
 * 按需加载
 * https://github.com/antfu/unplugin-vue-components
 */
export function configComponentsPlugin() {
  return Components({
    dts: true, // !当' typescript '被安装时，默认启用
    resolvers: [VantResolver()],
  });
}

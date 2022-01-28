import type { Plugin } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

/**
 * 在 index.html 中使用 ejs 模板语法的插件。
 * https://github.com/anncwb/vite-plugin-html
 */
export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE } = env;

  const htmlPlugin: Plugin[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE,
      }, // !将数据注入到 ejs 模板
    },
  });

  return htmlPlugin;
}

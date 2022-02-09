import type { Plugin } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * 在 index.html 中使用 ejs 模板语法的插件。
 * https://github.com/anncwb/vite-plugin-html
 */
export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE } = env;

  const htmlPlugin: Plugin[] = createHtmlPlugin({
    minify: isBuild,
    /**
     * 在这里写 entry 后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
     * @default src/main.ts
     */
    // entry: 'src/main.ts',
    /**
     * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
     * @default index.html
     */
    template: 'index.html',
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE,
      }, // !将数据注入到 ejs 模板
    },
  });

  return htmlPlugin;
}

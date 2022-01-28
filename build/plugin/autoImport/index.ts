import AutoImport from "unplugin-auto-import/vite";

/**
 * 依赖按需自动导入
 * https://github.com/antfu/unplugin-auto-import
 */
export function configAutoImportPlugin() {
  return AutoImport({
    imports: ["vue", "vue-router"],
    dts: "types/auto-imports.d.ts",
  });
}

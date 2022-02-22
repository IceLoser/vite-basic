/**
 * 静态 HTML 文件中加入 meta 标签没用（naive 的样式仍然可能被覆盖），
 * 因为你的工具链可能永远会把 tailwind 的样式插入 head 的尾部。
 * 这种情况下，需要在 app 挂载之前动态的插入 meta 标签。
 */

export function setupNaiveUi() {
  const meta = document.createElement('meta');
  meta.name = 'naive-ui-style';
  document.head.appendChild(meta);
}

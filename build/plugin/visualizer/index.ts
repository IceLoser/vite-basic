import visualizer from 'rollup-plugin-visualizer';

/**
 * 包依赖分析可视化
 * https://github.com/btd/rollup-plugin-visualizer
 */
export function configVisualizerPlugin() {
  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  });
}

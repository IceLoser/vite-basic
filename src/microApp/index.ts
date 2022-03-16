import type { OptionsType } from '@micro-app/types';

import microApp from '@micro-zoe/micro-app';

/**
 * @description: 微服务启动
 */
export function setupMicroApp() {
  const options: OptionsType = {
    inline: true, // 默认值 false
    destroy: true, // 默认值 false
    disableScopecss: true, // 默认值 false
    disableSandbox: false, // 默认值 false
    shadowDOM: false, // 默认值 false
    ssr: true, // 默认值 false
  };

  microApp.start(options);
}

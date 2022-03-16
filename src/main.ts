import '/@/design/index.less';

import App from './App.vue';
import { createApp } from 'vue';

import { setupMicroApp } from '/@/microApp';
import { setupNaiveUi } from '/@/design';
import { setupStore } from '/@/store';
import { setupRouter, router } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';

function bootstrap() {
  const app = createApp(App);

  setupMicroApp();
  setupNaiveUi();

  setupStore(app);
  setupRouter(app);
  setupRouterGuard(router);

  app.mount('#BasicRoot');
}

bootstrap();

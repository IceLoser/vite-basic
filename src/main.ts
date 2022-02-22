import '/@/design/index.less';

import App from './App.vue';
import { createApp } from 'vue';

import { setupNaiveUi } from '/@/design';
import { setupStore } from '/@/store';
import { setupRouter, router } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';

function bootstrap() {
  const app = createApp(App);

  setupNaiveUi();

  setupStore(app);
  setupRouter(app);
  setupRouterGuard(router);

  app.mount('#app');
}

bootstrap();

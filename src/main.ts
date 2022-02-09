import '/@/design/index.css';

import App from './App.vue';
import { createApp } from 'vue';

import { setupStore } from '/@/store';
import { setupRouter } from '/@/router';

function bootstrap() {
  const app = createApp(App);

  setupStore(app);
  setupRouter(app);

  app.mount('#app');
}

bootstrap();

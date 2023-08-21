import { createApp, defineAsyncComponent } from 'vue';
import '../css/index.css';

for (const el of document.getElementsByClassName('vue-app')) {
  const app = createApp({
    components: {
      // defineAsyncComponent to import async and miniminize bundle
      App: defineAsyncComponent(() => import('~/components/App.vue')),
    },
  });
  app.mount(el);
}

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import '@arco-design/web-vue/dist/arco.css';
import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = createApp(App)

app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(router)
app.mount('#app')

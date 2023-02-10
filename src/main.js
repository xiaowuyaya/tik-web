import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import './style/index.css'
import 'virtual:windi.css' // windicss

import 'element-plus/es/components/message/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).use(router).use(createPinia()).mount('#app')

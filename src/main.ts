import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 样式重置
import 'reset-css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

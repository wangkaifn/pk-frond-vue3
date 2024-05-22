import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'
// 使用 tailwind 提供的重置样式
import '@unocss/reset/tailwind.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

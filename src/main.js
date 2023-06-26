import { createApp } from 'vue'
import router from './router/index'
import pinia from './stores/index'

import "normalize.css"
import "./assets/css/index.css"

import App from './App.vue'
const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from "./router"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

createApp(App).use(route).use(createPinia().use(piniaPluginPersistedstate)).mount('#app')

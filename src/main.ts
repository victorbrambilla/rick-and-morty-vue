import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './presentation/router/routes'
import '@fortawesome/fontawesome-free/css/all.css'
import { key, store } from '@/presentation/store'

createApp(App).use(router).use(store, key).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './presentation/router/routes'
import { key, store } from '@/presentation/store'
import VueAwesomePaginate from 'vue-awesome-paginate'

import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).use(VueAwesomePaginate).use(store, key).mount('#app')

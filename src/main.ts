import { createApp } from 'vue'
import App from './App.vue'
import router from './presentation/router/routes'
import { key, store } from '@/presentation/store'
import { Quasar } from 'quasar'
import VueAwesomePaginate from 'vue-awesome-paginate'

import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

createApp(App)
  .use(router)
  .use(VueAwesomePaginate)
  .use(Quasar, {
    config: {
      brand: {
        primary: '#03C03C',
        secondary: '#653496',
      },
      dark: true,
    },
  })
  .use(store, key)
  .mount('#app')

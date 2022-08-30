import Home from '../views/Home.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: () => import('../views/Character.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
export default router

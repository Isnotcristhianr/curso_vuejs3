import { createRouter, createWebHistory } from 'vue-router'
//vistas
import HomeView from '../views/HomeView.vue'
import BuscadorView from '../views/BuscadorView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }, 
    {
      path: '/buscador',
      name: 'buscador',
      component: BuscadorView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router

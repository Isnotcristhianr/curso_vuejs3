import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HomeView,
    },
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    //register
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
const index = () => import('@/pages/index.vue')
const login = () => import('@/pages/login/index.vue')

const advantages = () => import('@/components/pages/advantages-section/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/advantages',
      name: 'advantages',
      component: advantages
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
const index = () => import('@/pages/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
const index = () => import('@/pages/index.vue')

const advantages = () => import('@/components/pages/advantages-section/index.vue')

const plans = () => import('@/components/pages/PlansSection/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/advantages',
      name: 'advantages',
      component: advantages
    },
    {
      path: '/plans',
      name: 'plans',
      component: plans
    }
  ]
})

export default router

import HomeVueVue from '@/views/HomeVue.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { pb } from '@/services/pb'
import type { BaseAuthStore } from 'pocketbase'
import LayoutVue from '@/views/Layout.vue'

const routeGuard = (baseAuth: BaseAuthStore | null, fallBack?: { name: string }) => {
  const canI = baseAuth?.isValid || true
  return {
    beforeEnter: () => canI || fallBack,
    meta: {
      canI
    }
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: LayoutVue,
      children: [
        {
          path: '/',
          name: 'patients', // 'patients'
          component: HomeVueVue,
          ...routeGuard(pb.authStore, { name: 'login' })
        }
      ]
    }
  ]
})

export default router

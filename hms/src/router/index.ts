import HomeVueVue from '@/views/HomeVue.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { pb } from '@/services/pb'
import type { BaseAuthStore } from 'pocketbase'
import LayoutVue from '@/views/MainLayout.vue'
import LayoutVue2 from '@/views/MainLayout2.vue'

const routeGuard = (baseAuth: BaseAuthStore | null, fallBack?: { name: string }) => {
  const canI = baseAuth?.isValid
  console.log('route guard ', canI)
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
      component: () => import('@/views/LoginPage.vue')
    },
    // {
    //   path: '/play',
    //   name: 'play',
    //   component: () => import('@/views/playground/index.vue')
    // },
    {
      path: '/',
      name: 'home',
      component: LayoutVue2,
      children: [
        {
          path: '/dashboard',
          name: 'DashBoard', // 'patients'
          component: HomeVueVue,
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/booking-create',
          name: 'Booking Create', // 'patients'
          component: () => import('@/views/BookingCreate.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/booking-list',
          name: 'Booking List', // 'patients'
          component: () => import('@/views/BookingList.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/booking-edit/:id',
          name: 'Booking Edit', // 'patients'
          component: () => import('@/views/BookingEdit.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        // {
        //   path: '/bookings',
        //   name: 'Booking', // 'patients'
        //   component: () => import('@/views/BookingRoom.vue'),
        //   ...routeGuard(pb.authStore, { name: 'login' })
        // },
        {
          path: '/rooms',
          name: 'Rooms', // 'patients'
          component: () => import('@/views/RoomStatus.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/rooms-schedule',
          name: 'Rooms Schedule', // 'patients'
          component: () => import('@/views/RoomSchedule.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/booking-history',
          name: 'Booking History', // 'patients'
          component: () => import('@/views/BookingHistory.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/daily-report',
          name: 'Daily Report', // 'patients'
          component: () => import('@/views/DailyReport.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/budget',
          name: 'Budget', // 'patients'
          component: () => import('@/views/Budget.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        },
        {
          path: '/range-report',
          name: 'Range Report', // 'patients'
          component: () => import('@/views/RangeReport.vue'),
          ...routeGuard(pb.authStore, { name: 'login' })
        }
      ]
    }
  ]
})

export default router

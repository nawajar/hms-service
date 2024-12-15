import HomeVueVue from '@/views/HomeVue.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { pb } from '@/services/pb'
import type { BaseAuthStore } from 'pocketbase'
import LayoutVue2 from '@/views/MainLayout2.vue'
import { useAuthStore } from '@/stores/auth'

// const routeGuard = (baseAuth: BaseAuthStore | null, fallBack?: { name: string }) => {
//   const canI =true;
//   console.log('route guard ', canI)
//   return {
//     beforeEnter: () => canI || fallBack,
//     meta: {
//       canI
//     }
//   }
// }
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue'),
      meta: { requiresAuth: false },
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
          meta: { requiresAuth: true },
        },
        {
          path: '/booking-create',
          name: 'Booking Create', // 'patients'
          component: () => import('@/views/BookingCreate.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/booking-list',
          name: 'Booking List', // 'patients'
          component: () => import('@/views/BookingList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/booking-edit/:id',
          name: 'Booking Edit', // 'patients'
          component: () => import('@/views/BookingEdit.vue'),
          meta: { requiresAuth: true },
        },
        // {
        //   path: '/bookings',
        //   name: 'Booking', // 'patients'
        //   component: () => import('@/views/BookingRoom.vue'),
        //   meta: { requiresAuth: true },
        // },
        {
          path: '/rooms',
          name: 'Rooms', // 'patients'
          component: () => import('@/views/RoomStatus.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/rooms-schedule',
          name: 'Rooms Schedule', // 'patients'
          component: () => import('@/views/RoomSchedule.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/booking-history',
          name: 'Booking History', // 'patients'
          component: () => import('@/views/BookingHistory.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/daily-report',
          name: 'Daily Report', // 'patients'
          component: () => import('@/views/DailyReport.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/budget',
          name: 'Budget', // 'patients'
          component: () => import('@/views/Budget.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/range-report',
          name: 'Range Report', // 'patients'
          component: () => import('@/views/RangeReport.vue'),
          meta: { requiresAuth: true },
        }
      ]
    }
  ]
})
router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const authStore = useAuthStore();
  console.log("before route ", authStore.isLogin);

  if (to.meta.requiresAuth && !authStore.isLogin) return '/login'
})

export default router


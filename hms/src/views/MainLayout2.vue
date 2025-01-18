<template>
  <div class="w-full flex flex-col h-svh max-h-svh">
    <div class="h-full fixed left-0">
      <!-- Left Sidebar -->
      <div
        class="grid h-full border-r translate-y-12 bg-[#F4D793] bg-clip-border text-gray-700 shadow-xl shadow-blue-gray-900/5"
      >
        <ul class="cus-menu flex flex-col bg-primary-200 gap-2 font-bold text-xl w-[170px]">
          <li>
            <RouterLink :to="'/dashboard'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              ໜ້າຫຼັກ
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="'/booking-create'" activeClass="bg-neutral">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="right-to-bracket"></font-awesome-icon>
              </div>
              ການຈອງຫ້ອງ
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="'/booking-list'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="bars-staggered"></font-awesome-icon>
              </div>
              ลูกค้าเข้าพัก
            </RouterLink>
          </li>
          <hr class="border-base-300 dark:border-white" />
          <li>
            <RouterLink :to="'/rooms'">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="cube"></font-awesome-icon>
              </div>
              ສະຖານະ ຫ້ອງພັກ
              <div class="grid ml-auto place-items-center justify-self-end">
                <div
                  class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900"
                ></div>
              </div>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="'/rooms-schedule'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="calendar-day"></font-awesome-icon>
              </div>
              ຕາຕະລາງຫ້ອງ
            </RouterLink>
          </li>
          <hr class="border-base-300 dark:border-white" />
          <li>
            <RouterLink :to="'/budget'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="calendar-day"></font-awesome-icon>
              </div>
              ລາຍຈ່າຍ
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="'/daily-report'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="calendar-day"></font-awesome-icon>
              </div>
              ສະຫຼຸບປະຈໍາວັນ
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="'/range-report'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="calendar-day"></font-awesome-icon>
              </div>
              ສະຫລຸບລວມ
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-full flex-1">
      <!-- Main Content Area-->
      <div class="flex h-full flex-col justify-between overflow-y-scroll overscroll-none">
        <div class="sticky top-0 w-full border px-4 bg-white z-50">
          <!-- Header -->
          <div class="w-full flex items-center justify-between">
            <div class="h-12 flex items-center">
              <h1 class="text-center text-xl">Xayluedy Hotel</h1>
            </div>
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn m-1">
                <font-awesome-icon icon="user" class="text-primary" />
                {{ pb.authStore.model?.name }}
              </div>
              <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li><a @click="signout()">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pl-[180px] h-full w-full overflow-hidden">
          <!-- Content -->
          <RouterView></RouterView>
        </div>

        <div class="w-full">
          <!-- Footer -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { pb } from '@/services/pb'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAuthStore } from '@/stores/auth'
const router = useRouter()

const loginStore = useAuthStore()
const signout = () => {
  pb.authStore.clear()
  loginStore.loggedOut()
  router.push({ name: 'login' })
}
</script>
<style lang="scss" scoped>
.cus-menu {
  @apply p-2;
}
.cus-menu li {
  @apply p-2 hover:bg-neutral rounded;
}

.cus-menu li > a {
  @apply flex flex-row gap-2;
}
</style>

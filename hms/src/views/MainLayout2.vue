<template>
  <div class="w-full flex flex-col h-svh max-h-svh">
    <div class="h-full fixed left-0 w-[180px]">
      <!-- Left Sidebar -->
      <div
        class="grid h-full border-r translate-y-12 bg-gray-50 bg-clip-border text-gray-700 shadow-xl shadow-blue-gray-900/5"
      >
        <ul class="menu bg-primary-200 min-w-[140px] gap-2 pr-4 font-bold text-base">
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
              Dashboards
            </RouterLink>
          </li>
          <li>
            <a>
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="hashtag"></font-awesome-icon>
              </div>
              ການຈອງ
            </a>
            <ul>
              <li>
                <RouterLink :to="'/booking-create'" activeClass="border-indigo-500">
                  <div class="grid mr-4 place-items-center">
                    <font-awesome-icon icon="right-to-bracket"></font-awesome-icon>
                  </div>
                  ຫ້ອງຈອງ
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="'/booking-list'" activeClass="border-indigo-500">
                  <div class="grid mr-4 place-items-center">
                    <font-awesome-icon icon="bars-staggered"></font-awesome-icon>
                  </div>
                  ຮາຍກາຮຂອງ
                </RouterLink>
              </li>
            </ul>
          </li>

          <!-- <li>
              <RouterLink :to="'bookings'" activeClass="border-indigo-500">
                <div class="grid mr-4 place-items-center">
                  <font-awesome-icon icon="bars-staggered"></font-awesome-icon>
                </div>
                Booking
              </RouterLink>
            </li> -->

          <li>
            <a>
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="hashtag"></font-awesome-icon>
              </div>
              ຫ້ອງ
            </a>
            <ul>
              <li>
                <RouterLink :to="'/rooms'">
                  <div class="grid mr-4 place-items-center">
                    <font-awesome-icon icon="cube"></font-awesome-icon>
                  </div>
                  ສະ​ຖາ​ນະ​ພາບ​ຫ້ອງ​
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
                  ຕາ​ຕະ​ລາງ​ຫ້ອງ​
                </RouterLink>
              </li>
            </ul>
          </li>

          <li>
            <RouterLink :to="'/booking-history'" activeClass="border-indigo-500">
              <div class="grid mr-4 place-items-center">
                <font-awesome-icon icon="clock-rotate-left"></font-awesome-icon>
              </div>
              Booking History
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
              <h1 class="text-center text-xl">Header</h1>
            </div>
            <div class="font-bold text-base">
              <font-awesome-icon icon="user" class="text-primary" />
              {{ pb.authStore.model?.name }}
            </div>
          </div>
        </div>

        <div class="pl-[180px] h-full">
          <!-- Content -->
          <div class="p-10 z-10 h-full">
            <RouterView></RouterView>
          </div>
        </div>

        <div class="w-full">
          <!-- Footer -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { pb } from '@/services/pb'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

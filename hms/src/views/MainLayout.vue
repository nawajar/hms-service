<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { pb } from '@/services/pb'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="flex h-screen w-full overflow-x-hidden overflow-y-hidden">
    <div
      class="relative flex min-h-full max-w-[10rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl shadow-blue-gray-900/5"
    >
      <div class="p-4 mb-2">
        <h5
          class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
        >
          Xayluedee Hotel
        </h5>
      </div>
      <ul class="menu bg-primary-200 min-w-[140px] gap-2 pr-4">
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

        <!-- <li>
          <RouterLink :to="'/booking-history'" activeClass="border-indigo-500">
            <div class="grid mr-4 place-items-center">
              <font-awesome-icon icon="clock-rotate-left"></font-awesome-icon>
            </div>
            Booking History
          </RouterLink>
        </li> -->
      </ul>
    </div>
    <div class="w-full min-h-full">
      <div class="navbar bg-secondary">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl"></a>
        </div>
        <div class="flex-none gap-2">
          <font-awesome-icon icon="user" />
          {{ pb.authStore.model?.name }}
        </div>
      </div>
      <div class="p-8 h-[calc(100%-50px)] w-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>

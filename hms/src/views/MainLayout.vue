<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { pb } from '@/services/pb'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="flex h-screen pb-4">
    <div
      class="relative flex h-[calc(100vh)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5"
    >
      <div class="p-4 mb-2">
        <h5
          class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
        >
          <!-- Xayluedee Hotel -->ASDF
        </h5>
      </div>
      <ul class="menu bg-primary-200 min-w-[240px] gap-2">
        <li>
          <RouterLink :to="'dashboard'" activeClass="border-indigo-500">
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
          <RouterLink :to="'bookings'" activeClass="border-indigo-500">
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
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Booking
          </RouterLink>
        </li>
        <li>
          <a>
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
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Inbox
            <div class="grid ml-auto place-items-center justify-self-end">
              <div
                class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900"
              >
                <span class="">14</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="w-full min-h-[100%]">
      <div class="navbar bg-secondary">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Search..</a>
        </div>
        <div class="flex-none gap-2">
          <font-awesome-icon icon="user" />
          {{ pb.authStore.model?.name }}
        </div>
      </div>
      <div class="p-8 h-[calc(100%-50px)] relative">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>

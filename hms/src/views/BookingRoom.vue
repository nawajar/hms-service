<template>
  <div class="w-full h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="flex gap-4 items-center justify-between">
      <div class="flex gap-4">
        <legend class="text-secondary text-xl">Booking</legend>
        <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
          <font-awesome-icon icon="arrows-rotate" />
        </button>
      </div>
      <button @click="activeRight = !activeRight" class="text-neutral bg-black px-4 py-2 rounded">
        Create
      </button>
    </div>
    <div class="page-body" :class="[activeRight ? 'opacity-20' : '']">
      <table class="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Id
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Room
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Customer Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Phone No
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                CheckIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                CheckOut
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" v-bind:key="booking.id">
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    {{ booking.created }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    {{ booking.expand.room.room_no }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex flex-col">
                <p
                  class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                >
                  {{ booking.cus_name }}
                </p>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="w-max">
                <div
                  class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md"
                  style="opacity: 1"
                >
                  <span class="">{{ booking.cus_phone_no }}</span>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <p
                class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
              >
                {{ booking.check_in_date }}
              </p>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              {{ activeRight }}
              <button
                @click="activeRight = !activeRight"
                class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
                    ></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div
    ref="rightDrawer"
    id="rightDrawer"
    :class="[activeRight ? '' : 'translate-x-full']"
    class="absolute inset-y-0 right-0 w-1/2 bg-white shadow-lg transform transition-transform ease-in-out duration-300"
  >
    <div class="flex items-center justify-between py-4 px-6 bg-white-500 h-[50px] border-b-[1px]">
      <h2 class="text-black text-lg font-semibold">Drawer Right</h2>
      <button id="closeRightDrawerBtn" class="text-black" @click="activeRight = !activeRight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="h-[calc(100%-50px)] overflow-y-scroll c-scrollbox">
      <div class="container mx-auto p-4">
        <form class="space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">In</span>
            </label>
            <flat-pickr v-model="startDate" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Out</span>
            </label>
            <flat-pickr v-model="endDate" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Customer Name</span>
            </label>
            <input type="text" placeholder="John Doe" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input type="tel" placeholder="" class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Room</span>
            </label>
            <select class="select select-bordered w-full" @click="onSelectRoom">
              <option v-for="(r, idx) in availableRoom" :key="idx">
                {{ r.room_no }}
              </option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div
      class="flex bg-white-500 absolute right-0 bottom-0 p-3 w-full border-t-[1px] justify-between"
    >
      <button class="btn btn-error">Cancel</button>
      <button class="btn btn-primary">Create</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'

const activeRight = ref(false)
const bookings = ref<any>([])
const rightDrawer = ref(null)
const startDate = ref(null)
const endDate = ref(null)

const availableRoom = ref<RecordModel[]>([])

onClickOutside(rightDrawer, (_) => {
  if (activeRight.value) {
    // activeRight.value = false
  }
})

const refresh = async () => {
  getBookings()
}

const getBookings = async () => {
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    expand: 'room',
    fields: '*'
  })

  console.log('records ', records)
  bookings.value = records
}

const getRooms = async () => {
  const rooms = await pb.collection('rooms').getFullList({
    sort: '-created',
    fields: '*'
  })
  availableRoom.value = rooms
  console.log('room ', rooms)
}

const onSelectRoom = async () => {
  console.log('on select room ')
  getRooms()
}

onMounted(async () => {
  getBookings()
})
</script>
<style lang="scss">
.page-body {
  @apply mb-[10rem] bg-white;
}

.c-scrollbox {
  position: relative;
}

.c-scrollbox::before {
  content: '';
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: block;
  height: 5px;
  background: -webkit-linear-gradient(top, #fff, #fff 30%, rgba(255, 255, 255, 0));
  background: -moz-linear-gradient(top, #fff, #fff 30%, rgba(255, 255, 255, 0));
  background: linear-gradient(to bottom, #fff, #fff 30%, rgba(255, 255, 255, 0));
}

.c-scrollbox::after {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 1rem;
  background: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>

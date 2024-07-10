<template>
  <div class="w-full h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="flex gap-4 items-center justify-between">
      <div class="flex gap-4">
        <legend class="text-secondary text-xl">Booking</legend>
        <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
          <font-awesome-icon icon="arrows-rotate" />
        </button>
      </div>
      <button @click="openCreate" class="text-neutral bg-black px-4 py-2 rounded">Create</button>
    </div>
    <div class="page-body container" :class="[activeRight ? 'opacity-20' : '']">
      <table class="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                View
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                In-Out
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Days
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
                Prices
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
                Paid
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
                Status
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
                Action
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
                    <button @click="viewBookAt(booking)">
                      <font-awesome-icon icon="eye" />
                    </button>
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
                    {{ formatDate(booking.check_in_date) }} To
                    {{ formatDate(booking.check_out_date) }}
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
                    {{ dayCount(booking.check_out_date, booking.check_in_date) }}
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
                    {{
                      dayCount(booking.check_out_date, booking.check_in_date) *
                      booking.expand.room.price
                    }}
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
                    {{ booking.paid ? 'Yes' : 'No' }}
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
                <p
                  class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                >
                  {{ booking.cus_phone_no }}
                </p>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div
                class="items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md text-center"
                style="opacity: 1"
              >
                {{ booking.status }}
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <button
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
      <dialog :class="{ 'modal-open': showModal }" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <h1 class="text-3xl font-bold mb-8">Booking Information</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h2 class="text-xl font-semibold mb-2">Booking Details</h2>
              <p><strong>ID:</strong> RECORD_ID</p>
              <p><strong>Room:</strong> RELATION_RECORD_ID</p>
              <p><strong>Status:</strong> <span class="text-green-500">Active</span></p>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-2">Customer Details</h2>
              <p><strong>Name:</strong> test</p>
              <p><strong>Phone No:</strong> test</p>
              <p><strong>ID Card:</strong> test</p>
              <p><strong>Address:</strong> test</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h2 class="text-xl font-semibold mb-2">Dates</h2>
              <p><strong>Check-in Date:</strong> {{ viewBook?.check_in_date }}</p>
              <p><strong>Check-out Date:</strong>{{ viewBook?.check_out_date }}</p>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-2">Payment</h2>
              <p><strong>Paid:</strong> <span class="text-green-500">Yes</span></p>
              <p>
                <strong>Payment Evidence:</strong>
                <a href="#" class="text-blue-500">filename.jpg</a>
              </p>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2">Additional Notes</h2>
            <p>test</p>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button, it will close the modal -->
              <button class="btn" @click="showModal = !showModal">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>

  <div
    ref="rightDrawer"
    id="rightDrawer"
    :class="[activeRight ? '' : 'translate-x-full']"
    class="absolute inset-y-0 right-0 w-1/2 bg-white shadow-lg transform transition-transform ease-in-out duration-300"
  >
    <div class="flex items-center justify-between py-4 px-6 bg-white-500 h-[50px] border-b-[1px]">
      <h2 class="text-black text-lg font-semibold">Bookings</h2>
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
            <input
              type="text"
              placeholder=""
              class="input input-bordered w-full"
              v-model="customerName"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder=""
              class="input input-bordered w-full"
              v-model="customerPhone"
            />
          </div>
          <div class="form-control">
            {{ startDate }}
            <label class="label">
              <span class="label-text">Room</span>
            </label>
            <select
              class="select select-bordered w-full"
              @click="onSelectRoom"
              v-model="selectedRoom"
            >
              <option v-for="(r, idx) in availableRoom" :key="idx" :value="r.id">
                room {{ r.room_no }} ราคา {{ r.price }} ต่อคืน
              </option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div
      class="flex bg-white-500 absolute right-0 bottom-0 p-3 w-full border-t-[1px] justify-between"
    >
      <button class="btn btn-error" @click="activeRight = !activeRight">Cancel</button>
      <button class="btn btn-primary" @click="createBook">Create</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { onMounted, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'
import { DateTime, Interval } from 'luxon'

const activeRight = ref(false)
const bookings = ref<any>([])
const rightDrawer = ref(null)
const startDate = ref(null)
const endDate = ref(null)
const selectedRoom = ref(null)
const customerName = ref(null)
const customerPhone = ref(null)
const availableRoom = ref<RecordModel[]>([])
const viewBook = ref<any>(null)

const showModal = ref(false)

const formatDate = (s: string) => {
  var d = s.split(' ').join('T')
  return DateTime.fromISO(d).toFormat('yyyy-MM-dd')
}

const toDate = (s: string) => {
  var d = s.split(' ').join('T')
  return DateTime.fromISO(d).set({ hour: 0 })
}

const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days + 1
}

const viewBookAt = (book: any) => {
  viewBook.value = book
  showModal.value = !showModal.value
}

const createBook = async () => {
  const data = {
    room: selectedRoom.value,
    cus_name: 'test',
    cus_phone_no: 'test',
    check_in_date: startDate.value,
    check_out_date: endDate.value,
    status: 'active'
  }

  await pb.collection('bookings').create(data)
  activeRight.value = !activeRight.value
  refresh()
}

const openCreate = () => {
  activeRight.value = !activeRight.value
  //getRooms()
}

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

  const unavailableRoom = bookings.value.filter((book: any) => {
    var start = toDate(book.check_in_date)
    var end = toDate(book.check_out_date)
    var selectedStart = toDate(startDate.value ?? '')
    var selectedEnd = toDate(endDate.value ?? '')
    const interval = Interval.fromDateTimes(start, end)
    if (
      interval.contains(selectedStart) ||
      interval.contains(selectedEnd) ||
      interval.start?.equals(selectedStart) ||
      interval.end?.equals(selectedStart) ||
      interval.start?.equals(selectedEnd) ||
      interval.end?.equals(selectedEnd)
    ) {
      return true
    }
    return false
  })

  availableRoom.value = rooms.filter((r) => {
    var isBook = unavailableRoom.some((un: any) => {
      return r.id == un.expand.room.id
    })
    return !isBook
  })
}

const onSelectRoom = async () => {}

onMounted(async () => {
  getBookings()
})

watch([startDate, endDate], () => {
  if ((startDate.value, endDate.value)) {
    getRooms()
  }
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

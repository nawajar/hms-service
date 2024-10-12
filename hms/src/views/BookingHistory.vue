<template>
  <div class="w-full h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="flex gap-4 items-center justify-between">
      <div class="flex gap-4">
        <legend class="text-secondary text-xl">Booking History</legend>
        <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
          <font-awesome-icon icon="arrows-rotate" />
        </button>
      </div>
      
    </div>
    <div
      class="page-body container"
      :class="[activeRightCreate || activeRightUpdate ? 'opacity-20' : '']"
    >
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
                    {{ getListValJoin(booking.expand.room, 'room_no') }}
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
                    {{ toThaiFromCheckDate(booking.check_in_date) }} To
                    {{ toThaiFromCheckDate(booking.check_out_date) }}
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
                    {{ numberWithCommas(booking.price) }}
                    <!-- {{ booking.price }} -->
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
                    <!-- {{ booking.paid ? 'Yes' : 'No' }} -->

                    <span class="flex items-center">
                      <span class="badge badge-success mr-2" v-if="booking.paid">Paid</span>
                      <span class="badge badge-error mr-2" v-if="!booking.paid">Unpaid</span>
                    </span>
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
                class="bg-green-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'active'"
              >
                <i class="fas fa-check-circle text-green-500 text-2xl"></i>
                <font-awesome-icon class="text-green-500" icon="check-circle" />
                <span class="ml-3 text-green-800 font-semibold">{{ booking.status }}</span>
              </div>
              <div
                class="bg-red-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'cancel'"
              >
                <font-awesome-icon class="text-red-500" icon="times-circle" />
                <span class="ml-3 text-red-800 font-semibold">Cancel</span>
              </div>
              <div
                class="bg-blue-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'check-in'"
              >
                <font-awesome-icon class="text-blue-500" icon="sign-in-alt" />
                <span class="ml-3 text-blue-800 font-semibold">Check-in</span>
              </div>
              <div
                class="bg-yellow-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'check-out'"
              >
                <font-awesome-icon class="text-yellow-500" icon="sign-out-alt" />
                <span class="ml-3 text-yellow-800 font-semibold">Check-out</span>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <Teleport to="body">
    <RoomPick
      :show="openRoomPick"
      :availableRoom="availableRoom"
      @onSelect="onSelectRoom"
      @close="openRoomPick = !openRoomPick"
    ></RoomPick>
  </Teleport>

  <dialog :class="{ 'modal-open': showModal }" class="modal" v-if="viewBook">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">Booking Information</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h2 class="text-xl font-semibold mb-2">Booking Details</h2>
          <p><strong>Room:</strong> {{ getListValJoin(viewBook.expand.room, 'room_no') }}</p>
          <p>
            <strong>Status:</strong>
            <span class="text-green-500" v-if="viewBook.status == 'active'">
              <font-awesome-icon class="text-green-500" icon="check-circle" />
              {{ viewBook.status }}
            </span>
            <span class="text-red-500" v-if="viewBook.status == 'cancel'">
              <span class="ml-3 text-red-800 font-semibold">Cancel</span>
              {{ viewBook.status }}
            </span>
            <span class="text-blue-500" v-if="viewBook.status == 'check-in'">
              <font-awesome-icon class="text-blue-500" icon="sign-in-alt" />{{ viewBook.status }}
            </span>
            <span class="text-yellow-500" v-if="viewBook.status == 'check-out'">
              <font-awesome-icon class="text-yellow-500" icon="sign-out-alt" />{{ viewBook.status }}
            </span>
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">Customer Details</h2>
          <p><strong>Name:</strong> {{ viewBook.cus_name }}</p>
          <p><strong>Phone No:</strong> {{ viewBook.cus_phone_no }}</p>
          <p><strong>ID Card:</strong> {{ viewBook.cus_id_card }}</p>
          <p><strong>Address:</strong> {{ viewBook.customer_address }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h2 class="text-xl font-semibold mb-2">Dates</h2>
          <p><strong>Check-in Date:</strong> {{ viewBook?.check_in_date }}</p>
          <p><strong>Check-out Date:</strong>{{ viewBook?.check_out_date }}</p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">Additional Notes</h2>
          <p>{{ viewBook.note }}</p>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Payment</h2>
        <p>
          <strong>Paid:</strong>
          <span class="text-green-500" v-if="viewBook.paid">Yes</span>
          <span class="text-red-500" v-if="!viewBook.paid">No</span>
        </p>
        <p>
          <strong>Amount:</strong>
          <a href="#" class="text-black-500">{{ viewBook.price }}</a>
        </p>
        <p class="flex flex-col">
          <strong>Documents:</strong>
          <div v-for="f of viewBook.cus_documents" :key="f">
            <a target="_blank" :href="fileUrl(f)" class="text-blue-500 underline overflow-auto line-clamp-1">
              {{ f }}
            </a>
          </div>
        </p>
      </div>
      
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button, it will close the modal -->
          <button class="btn" @click="showModal = !showModal">Close</button>
        </form>
      </div>
    </div>
  </dialog>

  

  
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import {  onMounted, ref } from 'vue'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import RoomPick from '@/components/RoomPick.vue'
import _ from 'lodash'
import 'dropzone-vue/dist/dropzone-vue.common.css'

const activeRightCreate = ref(false)
const activeRightUpdate = ref(false)
const bookings = ref<any>([])
const selectedRoom = ref<string[]>([])
const availableRoom = ref<RecordModel[]>([])
const viewBook = ref<any>(null)

const showModal = ref(false)
const openRoomPick = ref<boolean>(false)

const toThaiFromCheckDate = (date: string) => {
  var s = date.split(' ').join('T')
  const dateL = DateTime.fromISO(s).toFormat('dd-MM-yyyy')
  return dateL
}


function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const getListValJoin = (list: any, key: string) => {
  return _.map(list, (l) => l[key]).join(',')
}

const onSelectRoom = (rooms: string[]) => {
  selectedRoom.value = rooms
}



const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days
}

const fileUrl = (fileName: string) => {
  return `${import.meta.env.API_URL}api/files/${viewBook.value.collectionId}/${viewBook.value.id}/${fileName}?token=`
}


const viewBookAt = (book: any) => {
  viewBook.value = book
  showModal.value = !showModal.value
}

const refresh = async () => {
  getBookings()
}

const getBookings = async () => {
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    filter: `status = 'cancel' || status = 'check-out'`,
    expand: 'room',
    fields: '*'
  })

  console.log('records ', records)
  bookings.value = records
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

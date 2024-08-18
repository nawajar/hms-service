<template>
  <div class="min-w-[400px] h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="flex gap-4 items-center justify-between">
      <div class="flex gap-4">
        <legend class="text-secondary text-xl">Booking</legend>
        <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
          <font-awesome-icon icon="arrows-rotate" />
        </button>
      </div>
    </div>
    <div class="mb-4">
      <fieldset class="border border-gray-300 p-4 rounded-lg bg-white shadow-lg">
        <legend class="text-lg font-semibold text-gray-700 px-2">Search and Filter</legend>
        <div class="flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-4">
          <!-- Search text -->
          <div class="flex-grow">
            <label for="search" class="block text-gray-700 text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search by name or room number"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <!-- Date Filter: From -->
          <div>
            <label for="from-date" class="block text-gray-700 text-sm font-medium mb-1"
              >From Date</label
            >
            <input
              type="date"
              id="from-date"
              name="from-date"
              class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <!-- Date Filter: To -->
          <div>
            <label for="to-date" class="block text-gray-700 text-sm font-medium mb-1"
              >To Date</label
            >
            <input
              type="date"
              id="to-date"
              name="to-date"
              class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <!-- Filter Button -->
          <div>
            <button
              class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Filter
            </button>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ລ/ດ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ເລກຫ້ອງ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ຊື່ຜູ້ເຊົາແຂກ
            </th>
            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ຄ່າຫ້ອງ
            </th>
            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ວິນ
            </th>
            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ຮວມ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ຂ່າຍແລ້ວ / ຍິງ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ຂ່າຍທາງ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ພນິກງານ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ວັນທີມາ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ວັນທີໄປ
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <template v-for="(booking, idx) in bookingsView" v-bind:key="booking.id">
            <tr class="hover:bg-gray-100">
              <td class="px-6 py-4 text-center text-base text-gray-600">{{ idx + 1 }}</td>
              <td class="px-6 py-4 text-base text-gray-600">
                {{ booking.room_no }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">{{ booking.cus_name }}</td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.room_price }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.days }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.net_amt }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.paid }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.paid_channel }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">{{ booking.create_by }}</td>
              <td class="px-6 py-4 text-base text-gray-600">9/8/24</td>
              <td class="px-6 py-4 text-base text-gray-600">8/8/24</td>
            </tr>
          </template>

          <!-- Add more rows as needed based on the image -->
        </tbody>
      </table>
    </div>
    <div class="flex justify-between items-center mt-6">
      <div class="text-sm text-gray-600">
        Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of
        <span class="font-medium">50</span> results
      </div>
      <div>
        <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            1
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            3
          </a>
          <span
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"
          >
            ...
          </span>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            5
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            6
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            Next
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { computed, onMounted, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'
import { DateTime, Interval } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import RoomPick from '@/components/RoomPick.vue'
import _ from 'lodash'
import DropZone from 'dropzone-vue'
import 'dropzone-vue/dist/dropzone-vue.common.css'
import CustomCalendar from '@/components/CustomCalendar.vue'

const bookings = ref<any>([])

const bookingsView = computed(() => {
  var bookingV = bookings.value.map((book: any) => {
    return {
      room_no: getListValJoin(book.expand.room, 'room_no'),
      cus_name: book.cus_name,
      room_price: _.sumBy(book.expand.room, 'price'),
      days: dayCount(book.check_out_date, book.check_in_date),
      net_amt: `${numberWithCommas(book.price)} ເພຶ່ມ ${book.extra_charge_amt ?? 0}`,
      paid: book.paid ? 'ຂ່າຍແລ້ວ' : 'ຍິງ',
      paid_channel: book.paid_channel,
      create_by: book.create_by,
      check_in: book.check_in_date,
      check_out: book.check_out_date
    }
  })
  return bookingV
})

const refresh = async () => {
  getBookings()
}

const getBookings = async () => {
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    filter: `status = 'active' || status = 'check-in'`,
    expand: 'room',
    fields: '*'
  })

  bookings.value = records
}

const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days
}

const getListValJoin = (list: any, key: string) => {
  return _.map(list, (l) => l[key]).join(',')
}

function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

onMounted(async () => {
  getBookings()
})
</script>

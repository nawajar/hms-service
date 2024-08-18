<template>
  <div class="min-w-[400px] h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="w-full mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 class="text-lg font-semibold mb-4 text-center">Booking Information</h1>

      <!-- Room Information Section -->
      <fieldset class="border border-gray-300 rounded-md p-4 mb-6">
        <legend class="text-md font-semibold px-2">Room Information</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Check-in Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ວິນທີ່ເຊ້າພິກ:</label>
            <div class="w-2/3">
              <CustomCalendar v-model="startDate"></CustomCalendar>
            </div>
          </div>
          <!-- Check-out Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ວິນທີ່ອອກ:</label>
            <div class="w-2/3">
              <CustomCalendar v-model="endDate"></CustomCalendar>
            </div>
          </div>
          <!-- Room Numbers -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Room Numbers:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              :value="getListValJoin(showRoomSelected, 'room_no')"
              readonly
              @click="openSelectRoom()"
            />
          </div>
        </div>
      </fieldset>

      <!-- Customer Information Section -->
      <fieldset class="border border-gray-300 rounded-md p-4 mb-6">
        <legend class="text-md font-semibold px-2">Customer Information</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Name -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Name:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              value="Sommalee Saithong"
              readonly
            />
          </div>
          <!-- Phone Number -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Phone Number:</label>
            <input type="text" class="flex-1 border p-2 rounded" value="020 5577 9941" readonly />
          </div>
          <!-- Customer ID Card -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Customer ID Card:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              placeholder="Enter ID card number"
            />
          </div>
          <!-- Customer Address -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Customer Address:</label>
            <textarea
              class="flex-1 border p-2 rounded"
              rows="3"
              placeholder="Enter customer address"
            ></textarea>
          </div>
          <!-- Note -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Note:</label>
            <textarea
              class="flex-1 border p-2 rounded"
              rows="3"
              placeholder="Enter any notes"
            ></textarea>
          </div>
        </div>
      </fieldset>

      <!-- Additional Cost Section -->
      <fieldset class="border border-gray-300 rounded-md p-4 mb-6">
        <legend class="text-md font-semibold px-2">Payment Information</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Additional Cost -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Additional Cost:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              placeholder="Enter additional cost"
            />
          </div>
          <!-- Additional Cost Quantity -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Additional Cost Quantity:</label>
            <input type="number" class="flex-1 border p-2 rounded" value="0" />
          </div>
          <!-- Paid Checkbox -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Paid <span class="text-sm">(200 ₭)</span>:</label>
            <input
              type="checkbox"
              class="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
          </div>
          <!-- File Upload -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium"></label>
            <div
              class="flex-1 border-2 border-dashed border-green-400 p-4 rounded text-center text-gray-500"
            >
              Drop here
            </div>
          </div>
        </div>
      </fieldset>

      <!-- Total Payment -->
      <fieldset class="border border-gray-300 rounded-md p-4 mb-6">
        <legend class="text-md font-semibold px-2">Total Payment</legend>
        <div class="flex items-center">
          <label class="w-1/3 font-medium">Total Payment:</label>
          <input
            type="text"
            class="flex-1 border p-2 rounded"
            :value="`${calculateNetAmount(showRoomSelected)} ₭`"
            readonly
            disabled
          />
        </div>
        <!-- Signature -->
        <!-- <div class="flex items-center mt-4">
          <label class="w-1/3 font-medium">Signature:</label>
          <input type="text" class="flex-1 border p-2 rounded" placeholder="Sign here" />
        </div> -->
      </fieldset>

      <!-- Room Details Table -->
      <div class="w-full mx-auto p-4 bg-white shadow-md rounded-md mt-6 mb-6">
        <h2 class="text-lg font-semibold mb-4 text-center">Room Details</h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="border p-2 text-left">Room Type</th>
              <th class="border p-2 text-left">Room Number</th>
              <th class="border p-2 text-left">Price (₭)</th>
              <th class="border p-2 text-left">Days</th>
              <th class="border p-2 text-left">Price (₭) Net.</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="room of showRoomSelected" :key="room">
              <tr>
                <td class="border p-2">{{ room.room_type }}</td>
                <td class="border p-2">{{ room.room_no }}</td>
                <td class="border p-2">{{ room.price }}</td>
                <td class="border p-2">{{ dayCounted }}</td>
                <td class="border p-2">{{ room.price_net }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end w-50">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          ສຮ້າງ
        </button>
      </div>
    </div>
    <Teleport to="body">
      <RoomPick
        v-if="availableRoom.length > 0"
        :show="openRoomPick"
        :availableRoom="availableRoom"
        @onSelect="onSelectRoom"
        @close="openRoomPick = !openRoomPick"
      ></RoomPick>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { computed, onMounted, ref, watch } from 'vue'
import CustomCalendar from '@/components/CustomCalendar.vue'
import type { RecordModel } from 'pocketbase'
import { DateTime, Interval } from 'luxon'
import _ from 'lodash'
import RoomPick from '@/components/RoomPick.vue'

const bookings = ref<any>([])
const startDate = ref(null)
const endDate = ref(null)
const selectedRoom = ref<string[]>([])
const openRoomPick = ref<boolean>(false)
const availableRoom = ref<RecordModel[]>([])
const validCreateDate = ref<boolean>(false)

const getListValJoin = (list: any, key: string) => {
  return _.map(list, (l) => l[key]).join(',')
}

const calculateNetAmount = (room: any) => {
  return _.sumBy(room, (r: any) => r.price_net)
}

const dayCounted = computed(() => {
  if (startDate.value && endDate.value) {
    return dayCount(endDate.value, startDate.value)
  }
  return 0
})

const showRoomSelected = computed(() => {
  return _.map(selectedRoom.value, (a: any) => {
    const roomDetails = _.find(availableRoom.value, (se) => se.id == a)
    return {
      room_type: roomDetails?.room_type,
      room_no: roomDetails?.room_no,
      price: roomDetails?.price,
      price_net: dayCounted.value * roomDetails?.price
    }
  })
})

const onSelectRoom = (rooms: string[]) => {
  selectedRoom.value = rooms
}

const openSelectRoom = () => {
  selectedRoom.value = []
  openRoomPick.value = !openRoomPick.value
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

const toDate = (s: string) => {
  var d = s.split(' ').join('T')
  return DateTime.fromISO(d).set({ hour: 0 })
}

const getRooms = async () => {
  getBookings()
  const rooms = await pb.collection('rooms').getFullList({
    sort: '-created',
    filter: 'active = true',
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
      //interval.end?.equals(selectedStart) ||
      interval.start?.equals(selectedEnd) ||
      interval.end?.equals(selectedEnd)
    ) {
      return true
    }
    return false
  })

  availableRoom.value = rooms.filter((r) => {
    var isBook = unavailableRoom.some((un: any) => {
      return _.some(un.expand.room, (ex) => ex.id == r.id)
    })
    return !isBook
  })
}

const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days
}

watch([startDate, endDate], () => {
  if ((startDate.value, endDate.value)) {
    if (startDate.value == endDate.value) {
      validCreateDate.value = false
      availableRoom.value = []
      return
    }
    var selectedStart = toDate(startDate.value ?? '')
    var selectedEnd = toDate(endDate.value ?? '')
    if (selectedStart > selectedEnd) {
      validCreateDate.value = false
      availableRoom.value = []
      return
    }
    validCreateDate.value = true
    getRooms()
  } else {
    availableRoom.value = []
  }
})

onMounted(async () => {
  getBookings()
})
</script>

<template>
  <div class="min-w-[400px] h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="w-full mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 class="text-lg font-semibold mb-4 text-center">ແກ້ໄຂການຈອງ</h1>

      <!-- Room Information Section -->
      <fieldset class="border border-gray-300 rounded-md p-4 mb-6">
        <legend class="text-md font-semibold px-2">Room Information</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Check-in Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ວິນທີ່ເຊ້າພິກ:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded disabled:opacity-35"
              disabled
              v-model="startDate"
            />
          </div>
          <!-- Check-out Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ວິນທີ່ອອກ:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded disabled:opacity-35"
              disabled
              v-model="endDate"
            />
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
            <input type="text" class="flex-1 border p-2 rounded" v-model="customerName" />
          </div>
          <!-- Phone Number -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Phone Number:</label>
            <input type="text" class="flex-1 border p-2 rounded" v-model="customerPhone" />
          </div>
          <!-- Customer ID Card -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Customer ID Card:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              placeholder="Enter ID card number"
              v-model="customerCardId"
            />
          </div>
          <!-- Customer Address -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Customer Address:</label>
            <textarea
              class="flex-1 border p-2 rounded"
              rows="3"
              placeholder="Enter customer address"
              v-model="customerAddress"
            ></textarea>
          </div>
          <!-- Note -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Note:</label>
            <textarea
              class="flex-1 border p-2 rounded"
              rows="3"
              placeholder="Enter any notes"
              v-model="note"
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
              v-model="extraChargeDetails"
            />
          </div>
          <!-- Additional Cost Quantity -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Additional Cost Quantity:</label>
            <input type="number" class="flex-1 border p-2 rounded" v-model="extraChargeAmt" />
          </div>
          <!-- Paid Checkbox -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Paid <span class="text-sm">(200 ₭)</span>:</label>
            <input
              type="checkbox"
              class="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
              v-model="paid"
            />
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຂ່າຍແບບ :</label>
            <div class="w-2/3 flex gap-4">
              <select id="status" class="flex-1 border p-2 rounded" v-model="paidChannel">
                <option value="cash">Cash</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>
          </div>
          <!-- File Upload -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium"></label>
            <div class="w-2/3">
              <DropZone
                :maxFiles="Number(5)"
                :uploadOnDrop="false"
                :multipleUpload="true"
                :parallelUpload="3"
                @addedFile="onFileAdd"
                @removedFile="onFileRemove"
              />
            </div>
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium flex flex-col"></label>
            <div class="flex flex-col">
              <template v-for="f of uploadDoc" :key="f">
                <a
                  target="_blank"
                  :href="fileUrl(f)"
                  class="text-blue-500 underline overflow-auto line-clamp-1"
                >
                  {{ f }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- Total Payment -->
      <fieldset class="border border-gray-300 rounded-md p-4 mb-6">
        <legend class="text-md font-semibold px-2">Summary</legend>
        <div class="grid grid-cols-1 gap-4">
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Status:</label>
            <div class="w-2/3 flex gap-4">
              <select id="status" class="flex-1 border p-2 rounded" v-model="bookingStatus">
                <option value="active">Active</option>
                <option value="cancel">Cancel</option>
                <option value="check-in">Check-in</option>
                <option value="check-out">Check-out</option>
              </select>
            </div>
          </div>
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
          <div class="flex items-center">
            <label class="w-1/3 font-medium">Create By:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              v-model="createBy"
              readonly
              disabled
            />
          </div>
          <!-- <div class="flex items-center">
            <label class="w-1/3 font-medium">Update By:</label>
            <input
              type="text"
              class="flex-1 border p-2 rounded"
              v-model="updateBy"
              readonly
              disabled
            />
          </div> -->
        </div>
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
      <div class="flex justify-end w-50 gap-4">
        <button
          class="bg-warning hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          @click="back"
        >
          ຍົກເລີກ
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          @click="editBook"
        >
          ແກ້ໄຂການຈອງ
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
import DropZone from 'dropzone-vue'
import 'dropzone-vue/dist/dropzone-vue.common.css'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const bookings = ref<any>([])
const startDate = ref(null)
const endDate = ref(null)
const selectedRoom = ref<string[]>([])
const openRoomPick = ref<boolean>(false)
const availableRoom = ref<RecordModel[]>([])
const validCreateDate = ref<boolean>(false)
const customerName = ref(null)
const customerPhone = ref(null)
const customerCardId = ref(null)
const customerAddress = ref(null)
const note = ref(null)
const extraChargeDetails = ref(null)
const extraChargeAmt = ref(null)
const paid = ref(false)
const files = ref<any>([])
const bookingStatus = ref('active')
const paidChannel = ref(null)
const createBy = ref()
const updateBy = ref()
const uploadDoc = ref()
const collectionId = ref()

const back = () => {
  router.push({ name: 'Booking List' })
}

const onFileRemove = async (event: any) => {
  _.remove(files.value, (i: any) => i?.id == event.id)
}

const onFileAdd = async (event: any) => {
  if (!files.value) {
    files.value = []
  }
  files.value.push(event)
}

const setIfExist = (formData: FormData, key: string, val: any) => {
  if (val) {
    formData.append(key, val)
  }
}

const editBook = async () => {
  const bookId = route.params.id as string
  var price = 0
  if (startDate.value && endDate.value) {
    const roomPrice = _.sumBy(showRoomSelected.value, (a) => a.price)
    price = dayCount(endDate.value, startDate.value) * roomPrice
    price += extraChargeAmt.value ?? 0
  } else {
    return
  }
  const formData = new FormData()
  setIfExist(formData, 'check_in_date', startDate.value)
  setIfExist(formData, 'check_out_date', endDate.value)
  _.forEach(selectedRoom.value, (room) => {
    setIfExist(formData, 'room', room)
  })

  setIfExist(formData, 'cus_name', customerName.value)
  setIfExist(formData, 'cus_phone_no', customerPhone.value)
  setIfExist(formData, 'cus_id_card', customerCardId.value)
  setIfExist(formData, 'customer_address', customerAddress.value)
  setIfExist(formData, 'note', note.value)

  setIfExist(formData, 'extra_charge_details', extraChargeDetails.value)
  setIfExist(formData, 'extra_charge_amt', extraChargeAmt.value)
  formData.append('paid', `${paid.value}`)
  setIfExist(formData, 'paid_channel', paidChannel.value)

  if (files.value?.length > 0) {
    _.forEach(files.value, (f: any) => {
      formData.append('cus_documents', f.file)
    })
  }

  setIfExist(formData, 'status', bookingStatus.value)
  setIfExist(formData, 'price', price)
  formData.append('update_by', pb.authStore.model?.name)
  await pb.collection('bookings').update(bookId, formData)
  clearCreateForm()
}

const clearCreateForm = () => {
  startDate.value = null
  endDate.value = null
  selectedRoom.value = []

  customerName.value = null
  customerPhone.value = null
  customerCardId.value = null
  customerAddress.value = null
  note.value = null

  extraChargeDetails.value = null
  extraChargeAmt.value = null
  paid.value = false
  paidChannel.value = null
  files.value = []

  bookingStatus.value = ''
}

const getListValJoin = (list: any, key: string) => {
  return _.map(list, (l) => l[key]).join(',')
}

const calculateNetAmount = (room: any) => {
  return _.sumBy(room, (r: any) => r.price_net) + (extraChargeAmt.value ?? 0)
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

const fileUrl = (fileName: string) => {
  const bookId = route.params.id as string
  return `${import.meta.env.API_URL}api/files/${collectionId.value}/${bookId}/${fileName}?token=`
}

const getBookings = async () => {
  const igNoreBook = route.params.id as string
  console.log('get booking ', igNoreBook)
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    filter: `(status = 'active' || status = 'check-in') && id != '${igNoreBook}'`,
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

const getBook = async () => {
  const bookId = route.params.id
  const records = await pb.collection('bookings').getOne(bookId as string, {
    fields: '*'
  })
  patchForm(records)
}

const patchForm = (book: any) => {
  startDate.value = book.check_in_date.split(' ')[0]
  endDate.value = book.check_out_date.split(' ')[0]
  selectedRoom.value = book.room
  customerName.value = book.cus_name
  customerPhone.value = book.cus_phone_no
  customerCardId.value = book.cus_id_card
  customerAddress.value = book.customer_address

  note.value = book.note
  extraChargeDetails.value = book.extra_charge_details
  extraChargeAmt.value = book.extra_charge_amt
  paid.value = book.paid

  paidChannel.value = book.paid_channel
  bookingStatus.value = book.status
  createBy.value = book.create_by
  updateBy.value = book.update_by
  uploadDoc.value = book.cus_documents
  collectionId.value = book.collectionId
}

onMounted(async () => {
  //getBookings()
  getBook()
})
</script>

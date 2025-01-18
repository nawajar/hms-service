<template>
  <div class="w-full min-w-[400px] h-full mb-10 rounded overflow-y-scroll">
    <div class="w-full mx-auto p-4 bg-[#A9B2C3] shadow-md rounded-md border">
      <h1 class="text-2xl font-semibold mb-4 text-center">ຂໍ້ມູນການຈອງ</h1>

      <!-- Room Information Section -->
      <fieldset class="border-4 border-primary rounded-md p-4 mb-6 text-xl">
        <legend class="text-md font-semibold px-2">ຂໍ້ອມູນຫ້ອງ</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Check-in Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ວັນທີ່ເຂົ້າພັກ:</label>
            <div class="w-2/3">
              <CustomCalendar v-model="startDate"></CustomCalendar>
            </div>
          </div>
          <!-- Check-out Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ວັນທີ່ີ່ອອກ:</label>
            <div class="w-2/3">
              <CustomCalendar v-model="endDate"></CustomCalendar>
            </div>
          </div>
          <!-- Room Numbers -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ໝາຍເລກຫ້ອງ:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              :value="getListValJoin(showRoomSelected, 'room_no')"
              readonly
              @click.prevent="openSelectRoom()"
            />
          </div>
        </div>
      </fieldset>

      <!-- Customer Information Section -->
      <fieldset class="border-4 border-[#A94A4A] rounded-md p-4 mb-6 text-xl">
        <legend class="text-md font-semibold px-2">ຂໍ້ມູລນລູກຄ້າ</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Name -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຊື່:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              v-model="customerName"
            />
          </div>
          <!-- Phone Number -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ເບີໂທ:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              v-model="customerPhone"
            />
          </div>
          <!-- Customer ID Card -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ເລກບັດ ຫຼີ ພັດສະປອດ:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              placeholder="ກະລຸນາໃສ່ເລກບັດ ຫຼື ພັດສະປອດ"
              v-model="customerCardId"
            />
          </div>
          <!-- Customer Address -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ທີ່ຢູ່:</label>
            <textarea
              class="flex-1 border border-neutral p-2 rounded"
              rows="3"
              placeholder="ກະລຸນາ ໃສ່ທີ່ຢູ່"
              v-model="customerAddress"
            ></textarea>
          </div>
          <!-- Note -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ໝາຍເຫດ ເພີ່ມເຕີມ:</label>
            <textarea
              class="flex-1 border border-neutral p-2 rounded"
              rows="3"
              placeholder="ກະລຸນາໃສ່ໝາຍເຫດເພີ່ມເຕີມ"
              v-model="note"
            ></textarea>
          </div>
        </div>
      </fieldset>

      <!-- Additional Cost Section -->
      <fieldset class="border-4 border-warning rounded-md p-4 mb-6 text-xl">
        <legend class="text-md font-semibold px-2">ຂໍ້ມູນການຊໍາລະເງິນ</legend>
        <div class="grid grid-cols-1 gap-4">
          <!-- Additional Cost -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ລາຍລະອຽດຄ່າໃຊ້ຈ່າຍເພີມເຕີມ:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              placeholder="ລາຍລະອຽດຄ່າໃຊ້ຈ່າຍເພີມເຕີມ"
              v-model="extraChargeDetails"
            />
          </div>
          <!-- Additional Cost Quantity -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຄ່າໃຊ້ຈ່າຍເພີ່ມເຕີມ ຈໍານວນ :</label>
            <input
              type="number"
              class="flex-1 border border-neutral p-2 rounded"
              v-model="extraChargeAmt"
            />
          </div>
          <!-- Paid Checkbox -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຈ່າຍແລ້ວ <span class="text-sm">(200 ₭)</span>:</label>
            <input
              type="checkbox"
              class="h-5 w-5 rounded border-neutral text-green-600 focus:ring-green-500"
              v-model="paid"
            />
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຄ່າມັດຈຳຄີກາດ:</label>
            <textarea
              class="flex-1 border border-neutral p-2 rounded"
              rows="3"
              placeholder="ຄ່າມັດຈຳຄີກາດ"
              v-model="keycard"
            ></textarea>
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຈ່າຍຜ່ານຊ່ອງທາງ :</label>
            <div class="w-2/3 flex gap-4">
              <select
                id="status"
                class="flex-1 border border-neutral p-2 rounded"
                v-model="paidChannel"
              >
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
                placeholder="ເລືອກໄຟສ"
                :maxFileSize="10000000"
                :maxFiles="Number(10)"
                :uploadOnDrop="false"
                :multipleUpload="true"
                :parallelUpload="3"
                @addedFile="onFileAdd"
                @removedFile="onFileRemove"
              />
            </div>
          </div>
        </div>
      </fieldset>

      <!-- Total Payment -->
      <fieldset class="border-4 border-info rounded-md p-4 mb-6 text-xl">
        <legend class="text-md font-semibold px-2">ສະຫຼຸບ</legend>
        <div class="grid grid-cols-1 gap-4">
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ສະຖານະ ການຈອງ:</label>
            <div class="w-2/3 flex gap-4">
              <select
                id="status"
                class="flex-1 border border-neutral p-2 rounded"
                v-model="bookingStatus"
              >
                <option value="active">ຈອງ</option>
                <option value="check-in">ເຊັກອິນ</option>
                <option value="check-out">ເຊັກເອົ້າ</option>
                <option value="patial-checkout">ເຊັກອິນບາງຫ້ອງ</option>
                <option value="cancel">ຍົກເລີກ</option>
              </select>
            </div>
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຍອດຊໍາລະລວມ:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              :value="`${calculateNetAmount(showRoomSelected)} ₭`"
              readonly
              disabled
            />
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ຊື່ ພະນັກງານ:</label>
            <input
              type="text"
              class="flex-1 border border-neutral p-2 rounded"
              v-model="staffName"
            />
          </div>
        </div>
      </fieldset>

      <!-- Room Details Table -->
      <div class="w-full mx-auto p-4 bg-white shadow-md rounded-md mt-6 mb-6 text-xl">
        <h2 class="text-lg font-semibold mb-4 text-center">ລາຍລະອຽດຫ້ອງ</h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="border p-2 text-left">ປະເພດຫ້ອງ</th>
              <th class="border p-2 text-left">ໝາຍເລກຫ້ອງ</th>
              <th class="border p-2 text-left">ລາຄາ (₭)</th>
              <th class="border p-2 text-left">ຈໍານວນວັນ</th>
              <th class="border p-2 text-left">ລາຄາລວມ (₭) Net.</th>
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
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          @click="createBook"
        >
          ສ້າງ
        </button>
      </div>
    </div>
    <Teleport to="body">
      <RoomPick
        v-if="availableRoom.length > 0 && openRoomPick"
        :show="openRoomPick"
        :availableRoom="availableRoom"
        @onSelect="onSelectRoom"
        @close="openRoomPick = false"
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
import router from '@/router'

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
const staffName = ref(null)
const note = ref(null)
const extraChargeDetails = ref(null)
const extraChargeAmt = ref(null)
const paid = ref(false)
const files = ref<any>([])
const bookingStatus = ref('active')
const paidChannel = ref(null)
const keycard = ref(null)

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

const createBook = async () => {
  var price = 0
  const formData = new FormData()

  if (startDate.value && endDate.value) {
    const roomPrice = _.sumBy(showRoomSelected.value, (a) => a.price)
    price = dayCount(endDate.value, startDate.value) * roomPrice
    price += extraChargeAmt.value ?? 0
    setIfExist(formData, 'room_price_snapshort', roomPrice)
  } else {
    return
  }

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
  setIfExist(formData, 'keycard', keycard.value)
  if (paid.value) {
    const now = DateTime.now().toUTC().toFormat('yyyy-MM-dd hh:mm:ss')
    formData.append('paid_date', now)
    formData.append('paid', `${paid.value}`)
  }

  setIfExist(formData, 'paid_channel', paidChannel.value)

  if (files.value?.length > 0) {
    _.forEach(files.value, (f: any) => {
      formData.append('cus_documents', f.file)
    })
  }

  setIfExist(formData, 'status', bookingStatus.value)
  setIfExist(formData, 'price', price)
  setIfExist(formData, 'create_by', staffName.value)
  await pb.collection('bookings').create(formData)
  //clearCreateForm()

  router.push({ path: '/booking-list' })
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
  if (availableRoom.value?.length > 0) {
    openRoomPick.value = true
  }
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

<template>
  <div class="w-full h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="container mx-auto p-6">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">สถานะห้อง {{ allRooms.length }} ห้อง</h2>
      <div class="container mx-auto">
        <div class="mb-4 p-4 bg-primary border border-neutral text-green-700 rounded">
          <p class="font-semibold">
            ห้องเปิดใช้งาน : <span class="font-bold">{{ readyRoom.length }}</span>
          </p>
        </div>
        <div class="p-4 bg-error border border-neutral text-red-700 rounded">
          <p class="font-semibold">
            ห้องรอทำความสะอาด : <span class="font-bold">{{ needCleanRoom.length }}</span>
          </p>
        </div>
      </div>
      <!-- Floor 1 -->
      <div class="mt-4 mb-12" v-for="(value, name, index) in groupRoom" :key="index">
        <h3 class="text-2xl font-semibold mb-6 text-gray-700">ชั้น {{ name }}</h3>
        <div class="grid grid-cols-6 gap-2">
          <div
            class="p-4 border border-gray-300 text-gray-800 rounded-lg shadow-md relative"
            :class="{ 'bg-red-100': r.need_clean, 'opacity-30': !r.active }"
            v-for="r of value"
            :key="r.room_no"
          >
            <div
              :class="{
                'bg-[#FFDE4D]': r.room_type == 'family',
                'bg-[#96C9F4]': r.room_type == 'single_bed',
                'bg-[#FFC7ED]': r.room_type == 'twin_bed'
              }"
              class="min-h-full min-w-2 absolute left-0 top-0 rounded-tl-lg rounded-bl-lg"
            ></div>

            <div class="flex items-center justify-between">
              <h4 class="font-bold">ห้อง {{ padZero(r.room_no) }}</h4>
            </div>
            <button class="absolute right-1 top-2" @click="getBookingOfRoom(r.id)">
              <font-awesome-icon class="text-[#6C946F]" icon="bars-staggered" />
            </button>
            <div class="absolute right-1 bottom-2 dropdown dropdown-end">
              <DropDown
                :items="[
                  'ทำความสะอาดเรียบร้อย',
                  'ต้องการทำความสะอาด',
                  'ปิดการใช้งาน',
                  'เปิดการใช้งาน',
                  'ปรับราคา'
                ]"
                @clickMenu="markRoomClean($event, r.id)"
              >
                <template v-slot:default="{ onClick }">
                  <button @click="onClick" role="button" class="absolute right-1 bottom-2">
                    <font-awesome-icon class="text-[#FF4C4C]" icon="broom" />
                  </button>
                </template>
              </DropDown>
            </div>
            <div class="flex items-center space-x-2">
              <div class="flex gap-2 items-center" v-if="r.room_type == 'family'">
                <font-awesome-icon class="text-[#FFDE4D]" icon="crown" />
                <span class="text-sm">VIP ห้องครอบครัว</span>
              </div>
              <div class="flex gap-2 items-center" v-if="r.room_type == 'single_bed'">
                <font-awesome-icon class="text-[#96C9F4]" icon="bed" />
                <span class="text-sm">เตียงเดี่ยว</span>
              </div>
              <div class="flex gap-2 items-center" v-if="r.room_type == 'twin_bed'">
                <font-awesome-icon class="text-[#FFC7ED]" icon="bed" />
                <span class="text-sm">เตียงคู่</span>
              </div>
            </div>
            <p class="text-sm">ราคา : ${{ r.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <dialog :class="{ 'modal-open': showModal }" class="modal" v-if="viewRoomBooking">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">การจองห้อง</h1>
      <div class="flex items-center gap-2" v-for="vr of viewRoomBooking" :key="vr">
        <font-awesome-icon class="text-[#88D66C]" icon="right-from-bracket" />
        <h4 class="text-md font-bold">จองโดย {{ vr.cus_name }}</h4>
        <p class="text-sm text-gray-600">
          เข้าพัก {{ toDateStr(vr.check_in_date) }} ถึง {{ toDateStr(vr.check_out_date) }}
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

  <dialog :class="{ 'modal-open': openPriceAdjustModal }" class="modal" v-if="openPriceAdjustModal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">ปรับราคาห้อง {{ padZero(getRoomNo(adjustRoomId)) }}</h1>
      <div class="flex items-center">
        <label class="w-1/3 font-medium">ราคา:</label>
        <input
          type="number"
          class="flex-1 border border-neutral p-2 rounded"
          v-model="priceAdjust"
        />
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button, it will close the modal -->
          <button class="btn" @click="adjustPrice">ปรับราคา</button>
          <button class="btn" @click="openPriceAdjustModal = !openPriceAdjustModal">ปิด</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { pb } from '@/services/pb'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import DropDown from '@/components/DropDown.vue'

const allRooms = ref<any>([])
const showModal = ref(false)
const viewRoomBooking = ref<any>(null)
const openPriceAdjustModal = ref(false)
const priceAdjust = ref(0)
const adjustRoomId = ref('')

const getRoomNo = (roomId: string) => {
  if (!allRooms.value || allRooms.value.length == 0 || !roomId) {
    return ''
  }
  return _.find(allRooms.value, (r) => r.id == roomId)?.room_no
}

const adjustPrice = async () => {
  if (!adjustRoomId.value || priceAdjust.value == 0) {
    return
  }
  await pb.collection('rooms').update(adjustRoomId.value, { price: priceAdjust.value })
  openPriceAdjustModal.value = false
  await getRooms()
}

const needCleanRoom = computed(() => {
  return _.filter(allRooms.value, (r) => r.need_clean)
})

const padZero = (room: any) => {
  return String(room).padStart(3, '0')
}

const readyRoom = computed(() => {
  return _.filter(allRooms.value, (r) => r.active)
})

const markRoomClean = async (menuId: number, roomId: string) => {
  if (menuId == 0) {
    await pb.collection('rooms').update(roomId, { need_clean: false })
    await getRooms()
  }
  if (menuId == 1) {
    await pb.collection('rooms').update(roomId, { need_clean: true })
    await getRooms()
  }
  if (menuId == 2) {
    await pb.collection('rooms').update(roomId, { active: false })
    await getRooms()
  }
  if (menuId == 3) {
    await pb.collection('rooms').update(roomId, { active: true })
    await getRooms()
  }

  if (menuId == 4) {
    adjustRoomId.value = ''
    priceAdjust.value = 0

    openPriceAdjustModal.value = true
    adjustRoomId.value = roomId
    //await pb.collection('rooms').update(roomId, { active: true })
  }
}

const groupRoom = computed(() => {
  return _.groupBy(allRooms.value, (r) => {
    if (r.group_name == 'family') {
      return 0
    } else {
      return r.floor
    }
  })
})

const toDateStr = (s: string) => {
  var d = s.split(' ')
  return d[0]
}

const getRooms = async () => {
  const rooms = await pb.collection('rooms').getFullList({
    sort: 'room_no',
    // filter: 'active = true',
    fields: '*'
  })
  allRooms.value = rooms
}
const getBookingOfRoom = async (roomId: string) => {
  const resultList = await pb.collection('bookings').getList(1, 50, {
    sort: 'check_in_date',
    filter: `status = 'active' && room.id ?~ '${roomId}'`,
    fields: 'check_in_date,check_out_date,cus_name'
  })
  if (resultList.items.length > 0) {
    showModal.value = !showModal.value
    viewRoomBooking.value = resultList.items
  }
}
onMounted(async () => {
  getRooms()
})
</script>

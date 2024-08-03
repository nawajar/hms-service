<template>
  <div class="w-full h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="container mx-auto p-6">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">สถานะห้อง {{ allRooms.length }} ห้อง</h2>
      <!-- Floor 1 -->
      <div class="mb-12" v-for="(value, name, index) in groupRoom" :key="index">
        <h3 class="text-2xl font-semibold mb-6 text-gray-700">ชั้น {{ name }}</h3>
        <div class="grid grid-cols-6 gap-2">
          <div
            class="p-4 border border-gray-300 text-gray-800 rounded-lg shadow-md relative"
            :class="{ 'bg-red-100': r.need_clean }"
            v-for="r of value"
            :key="r.room_no"
          >
            <div
              :class="{
                'bg-[#FFDE4D]': r.room_type == 'family',
                'bg-[#96C9F4]': r.room_type == 'single_bed',
                'bg-[#FFC7ED]': r.room_type == 'twin_bed'
              }"
              class="bg-green-200 min-h-full min-w-2 absolute left-0 top-0 rounded-tl-lg rounded-bl-lg"
            ></div>

            <div class="flex items-center justify-between">
              <h4 class="font-bold">ห้อง {{ r.room_no }}</h4>
            </div>
            <button class="absolute right-1 top-2" @click="getBookingOfRoom(r.id)">
              <font-awesome-icon class="text-[#6C946F]" icon="bars-staggered" />
            </button>
            <div class="absolute right-1 bottom-2 dropdown dropdown-end">
              <DropDown
                :items="['ทำความสะอาดเรียบร้อย']"
                @clickMenu="markRoomClean(r.id)"
                v-if="r.need_clean"
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

const markRoomClean = async (roomId: string) => {
  await pb.collection('rooms').update(roomId, { need_clean: false })
  await getRooms()
}

const groupRoom = computed(() => {
  return _.groupBy(allRooms.value, (r) => r.floor)
})

const toDateStr = (s: string) => {
  var d = s.split(' ')
  return d[0]
}

const getRooms = async () => {
  const rooms = await pb.collection('rooms').getFullList({
    sort: 'room_no',
    filter: 'active = true',
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

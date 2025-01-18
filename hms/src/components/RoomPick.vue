<template>
  <dialog :class="{ 'modal-open': show }" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">ເລືອກຫ້ອງ</h1>
      <div class="flex flex-col gap-4">
        <div>
          <label class="font-bold text-xl mb-2 block">{{ roomTranslate['single'] }}</label>
          <div class="flex flex-wrap gap-4">
            <div
              class="gap-2 font-extrabold"
              v-for="(room, roomType) in roomByType['single']"
              :key="roomType"
            >
              <div class="">
                <button
                  @click="addRoom(room.id)"
                  :key="room.id"
                  :class="{
                    'p-4 rounded-lg flex items-center justify-between': true,
                    'border-2 border-blue-500': isSelected(room.id),
                    'bg-orange-400': room.color == 'bg-orange-400',
                    'bg-emerald-600': room.color == 'bg-emerald-600',
                    'bg-green-300': room.color == 'bg-green-300',
                    'bg-yellow-300': room.color == 'bg-yellow-300',
                    'bg-stone-400': room.color == 'bg-stone-400',
                    'bg-pink-400': room.color == 'bg-pink-400'
                  }"
                >
                  <div class="flex items-center gap-2">
                    <span>{{ padZero(room.room_no) }} </span>
                    <font-awesome-icon
                      class="text-primary"
                      icon="circle-check"
                      v-if="isSelected(room.id)"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label class="font-bold text-xl mb-2 block">{{ roomTranslate['twin'] }}</label>
          <div class="flex flex-wrap gap-4">
            <div
              class="gap-2 font-extrabold"
              v-for="(room, roomType) in roomByType['twin']"
              :key="roomType"
            >
              <div class="">
                <button
                  @click="addRoom(room.id)"
                  :key="room.id"
                  :class="{
                    'p-4 rounded-lg flex items-center justify-between': true,
                    'border-2 border-blue-500': isSelected(room.id),
                    'bg-orange-400': room.color == 'bg-orange-400',
                    'bg-emerald-600': room.color == 'bg-emerald-600',
                    'bg-green-300': room.color == 'bg-green-300',
                    'bg-yellow-300': room.color == 'bg-yellow-300',
                    'bg-stone-400': room.color == 'bg-stone-400',
                    'bg-pink-400': room.color == 'bg-pink-400'
                  }"
                >
                  <div class="flex items-center gap-2">
                    <span>{{ padZero(room.room_no) }} </span>
                    <font-awesome-icon
                      class="text-primary"
                      icon="circle-check"
                      v-if="isSelected(room.id)"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label class="font-bold text-xl mb-2 block">{{ roomTranslate['family'] }}</label>
          <div class="flex flex-wrap gap-4">
            <div
              class="gap-2 font-extrabold"
              v-for="(room, roomType) in roomByType['family']"
              :key="roomType"
            >
              <div class="">
                <button
                  @click="addRoom(room.id)"
                  :key="room.id"
                  :class="{
                    'p-4 rounded-lg flex items-center justify-between': true,
                    'border-2 border-blue-500': isSelected(room.id),
                    'bg-orange-400': room.color == 'bg-orange-400',
                    'bg-emerald-600': room.color == 'bg-emerald-600',
                    'bg-green-300': room.color == 'bg-green-300',
                    'bg-yellow-300': room.color == 'bg-yellow-300',
                    'bg-stone-400': room.color == 'bg-stone-400',
                    'bg-pink-400': room.color == 'bg-pink-400'
                  }"
                >
                  <div class="flex items-center gap-2">
                    <span>{{ padZero(room.room_no) }} </span>
                    <font-awesome-icon
                      class="text-primary"
                      icon="circle-check"
                      v-if="isSelected(room.id)"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-action">
        <form method="dialog" class="flex gap-2">
          <button class="btn" @click="closeModal()">ປິດ</button>
          <button class="btn btn-primary" @click="selectRoom()">ເລືອກ</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const roomTranslate: any = {
  single: 'ຕຽງດ່ຽວ',
  family: 'ຫ້ອງຄອບຄົວ/ພິເສດ',
  twin: 'ຕຽງຄູ່'
}

const emit = defineEmits(['close', 'onSelect'])
interface Props {
  show?: boolean
  availableRoom: any
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  availableRoom: []
})

const padZero = (room: any) => {
  return String(room).padStart(3, '0')
}

const selectedRoom = ref<string[]>([])

const roomByType = computed(() => {
  const items = _.clone(props.availableRoom).sort((a: any, b: any) =>
    a.room_no < b.room_no ? -1 : 1
  )
  const group = _.groupBy(items, (r) => r.group_name)
  return group
})

const isSelected = (roomId: any) => {
  return _.some(selectedRoom.value, (r) => r == roomId)
}

const addRoom = (roomId: string) => {
  if (isSelected(roomId)) {
    selectedRoom.value = _.remove(selectedRoom.value, (s) => s != roomId)
    return
  }
  selectedRoom.value?.push(roomId)
}

const selectRoom = () => {
  emit('onSelect', selectedRoom.value)
  emit('close', true)
}

const closeModal = () => {
  emit('close', true)
  selectedRoom.value = []
}

onMounted(() => {})
</script>
<style scope lang="scss">
.active {
  @apply bg-blue-400;
}
</style>

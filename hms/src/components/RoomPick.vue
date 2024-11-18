<template>
  <dialog :class="{ 'modal-open': show }" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">ເລືອກຫ້ອງ</h1>
      <div class="flex flex-col gap-4">
        <div v-for="(room, roomType) in roomByType" :key="roomType">
          <label class="font-bold text-xl mb-2 block">{{ roomTranslate[roomType] }}</label>
          <div class="flex flex-wrap gap-2 font-extrabold">
            <button
              @click="addRoom(r.id)"
              v-for="(r, i) of room"
              :key="i"
              :class="{
                'p-4 rounded-lg flex items-center justify-between': true,
                'border-2 border-blue-500': isSelected(r.id),
                'bg-orange-400': r.color == 'bg-orange-400',
                'bg-emerald-600': r.color == 'bg-emerald-600',
                'bg-green-300': r.color == 'bg-green-300',
                'bg-yellow-300': r.color == 'bg-yellow-300',
                'bg-stone-400': r.color == 'bg-stone-400',
                'bg-pink-400': r.color == 'bg-pink-400'
              }"
            >
              <div class="flex items-center gap-2">
                <span>{{ padZero(r.room_no) }} </span>
                <font-awesome-icon
                  class="text-primary"
                  icon="circle-check"
                  v-if="isSelected(r.id)"
                />
              </div>
            </button>
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
  single_bed: 'ຕຽງດ່ຽວ',
  family: 'ຫ້ອງຄອບຄົວ/ພິເສດ',
  twin_bed: 'ຕຽງຄູ່'
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
  return _.groupBy(props.availableRoom, (r) => r.room_type)
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

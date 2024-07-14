<template>
  <dialog :class="{ 'modal-open': show }" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">Select Room</h1>
      <div class="flex flex-col gap-4">
        <div v-for="(room, roomType) in roomByType" :key="roomType">
          <label class="font-bold text-xl mb-2 block">{{ roomType }}</label>
          <div class="flex flex-wrap gap-2">
            <button
              @click="addRoom(r.id)"
              v-for="(r, i) of room"
              :key="i"
              :class="{
                'bg-green-200 p-4 rounded-lg flex items-center justify-between': true,
                'border-2 border-blue-500': isSelected(r.id)
              }"
            >
              <div class="flex items-center gap-2">
                <span>{{ r.room_no }}</span>
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
          <button class="btn" @click="closeModal()">Close</button>
          <button class="btn btn-primary" @click="selectRoom()">Ok</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const emit = defineEmits(['close', 'onSelect'])
interface Props {
  show?: boolean
  availableRoom: any
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  availableRoom: []
})

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

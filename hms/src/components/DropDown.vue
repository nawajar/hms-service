<template>
  <div class="relative">
    <slot :onClick="onClick"></slot>
    <ul
      ref="target"
      tabindex="0"
      :class="{ hidden: !showMenu }"
      class="absolute bottom-0 right-0 translate-y-10 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
    >
      <li v-for="(item, idx) of items" :key="item">
        <button @click="selectItem(idx)">{{ item }}</button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const emits = defineEmits(['clickMenu'])
interface Props {
  items: string[]
}
const props = defineProps<Props>()

const target = ref(null)

onClickOutside(target, (event) => (showMenu.value = false))

const showMenu = ref(false)

const onClick = () => {
  showMenu.value = !showMenu.value
}

const selectItem = (idx: number) => {
  showMenu.value = !showMenu.value
  emits('clickMenu', idx)
}
</script>

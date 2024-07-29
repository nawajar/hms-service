<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-slate-200 bg-opacity-50 flex items-center justify-center z-50"
  >
    <img class="w-20 h-20" src="../assets/load.svg" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  visible?: Boolean
}>()
</script>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useLoaderStore } from '@/stores/loader'
import HMSLoader from '@/views/loader/HMSLoader.vue'

const store = useLoaderStore()
const isLoading = computed(() => store.isLoading)
</script>

<template>
  <div class="relative">
    <HMSLoader :visible="isLoading" />
    <RouterView />
  </div>
</template>

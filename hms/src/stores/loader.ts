import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useLoaderStore = defineStore('loader', () => {
  const loading = ref(false);
  const isLoading = computed(() => loading.value);
  const show = () => {
    loading.value = true;
  };
  const hide = () => {
    loading.value = false;
  };
  return { isLoading, show, hide };
});

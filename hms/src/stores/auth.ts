import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  const login = ref(false);
  const isLogin = computed(() => login.value);
  const loggedIn = () => {
    login.value = true;
  };
  const loggedOut = () => {
    login.value = false;
  };
  return { isLogin, loggedIn, loggedOut };
});

<template>
  <div class="flex justify-center items-center h-screen bg-[#DEE4EE]">
    <div
      class="bg-white-200 w-1/4 min-h-[60%] gap-2 flex flex-col rounded-xl bg-white items-center p-4 justify-center"
    >
      <div class="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Login
      </div>
      <form class="w-full">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> UserName </label>
          <input
            class="input input-bordered w-full"
            type="email"
            id="email"
            placeholder="Enter your email"
            v-model="userName"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="input input-bordered w-full"
            type="password"
            id="password"
            placeholder="Enter your password"
            v-model="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button @click.prevent="login()" class="btn btn-primary w-full" type="button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const userName = ref('')
const password = ref('')

const login = async () => {
  if (userName.value == '' || password.value == '') {
    return
  }
  const authData = await pb.collection('users').authWithPassword(userName.value, password.value)
  console.log('Logged in.', authData)
  if (authData) {
    console.log('Valid in.', pb.authStore.isValid)
    router.push({
      name: 'Booking List'
    })
  }
}
</script>

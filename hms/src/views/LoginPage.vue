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
          <button @click="login()" class="btn btn-primary w-full" type="button">Sign In</button>
        </div>
      </form>
      <!-- <div class="p-4 flex flex-col gap-4 w-full">
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
          <input type="text" class="grow" placeholder="Username" v-model="userName" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="password"
            class="grow border-0 "
            value="password"
            v-model="password"
          />
        </label>
        <button class="btn btn-accent" @click="login">Login</button>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { ref } from 'vue'

const userName = ref('')
const password = ref('')

const login = async () => {
  if (userName.value == '' || password.value == '') {
    return
  }
  const authData = await pb.collection('users').authWithPassword(userName.value, password.value)
  console.log('Logged in.', authData)
}
</script>

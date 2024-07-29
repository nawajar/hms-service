<template>
  <div class="w-full h-full text-black">
    <div class="p-4 bg-blue-100 text-blue-800 rounded-md">{{ toDayThai }}</div>
    <div class="stats shadow p-4 md:grid md:grid-cols-3 gap-4">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Active Room</div>
        <div class="stat-value text-primary">25</div>
        <div class="stat-desc">Available rooms</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Checked In</div>
        <div class="stat-value text-secondary">15</div>
        <div class="stat-desc">Number of all Checked in</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
        <div class="stat-value text-secondary">81</div>
        <div class="stat-title">Wait for clean</div>
        <div class="stat-desc">81 rooms waiting</div>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="text-xl font-semibold">Monthly Income</h2>
      <div class="w-full h-64">
        <IncomeChart />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { pb } from '@/services/pb'
import IncomeChart from '@/views/IncomeChart.vue'
const today = new Date()
const item = ref()

const toDayThai = computed(() => {
  const result = today.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return result
})

onMounted(async () => {
  console.log('Test', pb.authStore.isValid)
  const records = await pb.collection('rooms').getList(1, 50, {
    sort: '-created',
    filter: 'room_no ~ 101'
  })
  item.value = records
})
</script>

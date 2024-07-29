<template>
  <div v-if="bookings">
    <Bar v-if="chartData.labels.length" :data="chartData" :options="options" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

import { pb } from '@/services/pb'
import { onMounted, ref } from 'vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const bookings = ref<any>([])
const chartData = ref<any>({
  labels: [],
  datasets: [
    {
      label: 'Monthly Income',
      backgroundColor: '#42A5F5',
      data: []
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}

const processBookingData = (bookings: any) => {
  const incomeByMonth: any = {}

  bookings.forEach((booking: any) => {
    var checkInDate = booking.check_in_date.split(' ').join('T')
    const month = new Date(checkInDate).toLocaleString('default', {
      month: 'short',
      year: 'numeric'
    })

    if (!incomeByMonth[month]) {
      incomeByMonth[month] = 0
    }
    incomeByMonth[month] += booking.price
  })

  chartData.value.labels = Object.keys(incomeByMonth)
  chartData.value.datasets[0].data = Object.values(incomeByMonth)
  console.log('chart ', chartData.value)
}

const getBookings = async () => {
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    filter: `paid = true`,
    fields: 'check_in_date,price'
  })

  console.log('records ', records)
  bookings.value = records
}

onMounted(async () => {
  await getBookings()
  processBookingData(bookings.value)
})
</script>

<style></style>

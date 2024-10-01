<template>
  <div class="w-full h-full text-black">
    <div class="p-4 bg-blue-100 text-blue-800 rounded-md mb-4">{{ toDayThai }}</div>
    <div class="stats shadow p-4 md:grid md:grid-cols-3 gap-4">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <font-awesome-icon class="text-warning text-4xl" icon="fa-check-to-slot" />
        </div>
        <div class="stat-value text-warning">{{ availableRoom }}</div>
        <div class="stat-title text-warning">{{ $t('dashboard.available_room') }}</div>
        <div class="stat-desc"></div>
      </div>

      <div class="stat">
        <div class="stat-figure text-error">
          <font-awesome-icon class="text-error text-4xl" icon="fa-broom" />
        </div>
        <div class="stat-value text-error">{{ needCleanRoom }}</div>
        <div class="stat-title text-error">{{ $t('dashboard.need_clean_room') }}</div>
        <div class="stat-desc"></div>
      </div>
    </div>

    <!-- {{ availableRoom.length }} -->
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { pb } from '@/services/pb'
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const today = new Date()
const allRooms = ref<any>([])
const bookingsToday = ref<any>([])
import _ from 'lodash'

const toDayThai = computed(() => {
  const result = today.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return result
})

const availableRoom = computed(() => {
  const unavailableList = _.flatten(_.map(bookingsToday.value, (item: any) => item.room))
  return allRooms.value.filter((r: any) => !_.some(unavailableList, (u) => r.id == u)).length
})

const getBookingsToDay = async () => {
  const todayFilter = DateTime.fromJSDate(today)
  const todayFormat = todayFilter.toFormat('yyyy-MM-dd')
  const records = await pb.collection('bookings').getFullList({
    filter: `check_in_date >= '${todayFormat} 00:00:00' && check_in_date <= '${todayFormat} 23:59:59' `,
    fields: 'id,room,paid,price,extra_charge_amt'
  })

  bookingsToday.value = records
}

const needCleanRoom = computed(() => {
  return allRooms.value.filter((r: any) => r?.need_clean).length
})

const getRooms = async () => {
  const rooms = await pb.collection('rooms').getFullList({
    sort: 'room_no',
    filter: 'active = true',
    fields: 'id,need_clean'
  })
  allRooms.value = rooms
}

onMounted(async () => {
  getRooms()
  getBookingsToDay()
})
</script>

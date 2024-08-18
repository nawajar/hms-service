<template>
  <div class="w-[90%] h-full mb-10 rounded overflow-y-scroll relative overflow-x-scroll p-4">
    <Calendar
      ref="calendarRef"
      #default="{ calendar }"
      :init="{
        toggle: true,
        day: new Date()
      }"
    >
      <div class="calendar-containers">
        <div v-if="calendar.isOpenCalendar()">
          <div class="head flex items-center p-4 bg-gray-100 rounded-md shadow">
            <div class="text-lg font-semibold">{{ calendar.monthName }} {{ calendar.year }}</div>
            <div class="flex space-x-2">
              <button
                @click="prevMonth()"
                class="text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <font-awesome-icon class="text-blue-500" icon="fa-chevron-left" />
              </button>
              <button
                @click="nextMonth()"
                class="text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <font-awesome-icon class="text-blue-500" icon="fa-chevron-right" />
              </button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border-collapse border border-gray-300">
              <thead class="bg-gray-100">
                <tr>
                  <th class="text-left border border-gray-300 p-2">ห้อง</th>
                  <template v-for="day in calendar.days" :key="day">
                    <th
                      v-if="isThisMonth(day.month)"
                      class="text-center border border-gray-300 p-2"
                      :class="{ 'bg-blue-500': isToday(day.day, day.month, day.year) }"
                    >
                      {{ toThaiDate(day.day, day.month, day.year) }}
                    </th>
                  </template>
                </tr>
              </thead>
              <tbody>
                <template v-for="room in allRooms" :key="room.id">
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-2 text-center font-bold">
                      <p class="text-blue-500">{{ room.room_no }}</p>
                    </td>
                    <template
                      v-for="day in calendar.days.filter((d) => isThisMonth(d.month))"
                      :key="day"
                    >
                      <td
                        v-if="
                          getRoomSchedule(
                            getRoomNo(room.id),
                            toStringDate(day.year, day.month, day.day)
                          )?.isStart
                        "
                        class="relative text-center border border-gray-300 p-2"
                        :colspan="
                          getRoomSchedule(
                            getRoomNo(room.id),
                            toStringDate(day.year, day.month, day.day)
                          )
                            ? getRoomSchedule(
                                getRoomNo(room.id),
                                toStringDate(day.year, day.month, day.day)
                              ).span
                            : 1
                        "
                        :class="{
                          'bg-green-500 text-white':
                            getRoomSchedule(
                              getRoomNo(room.id),
                              toStringDate(day.year, day.month, day.day)
                            )?.status === 'active',
                          'bg-red-500 text-white':
                            getRoomSchedule(
                              getRoomNo(room.id),
                              toStringDate(day.year, day.month, day.day)
                            )?.status === 'cancel',
                          'bg-blue-500 text-white':
                            getRoomSchedule(
                              getRoomNo(room.id),
                              toStringDate(day.year, day.month, day.day)
                            )?.status === 'check-in',
                          'bg-red-500 text-black':
                            getRoomSchedule(
                              getRoomNo(room.id),
                              toStringDate(day.year, day.month, day.day)
                            )?.status === 'check-out'
                        }"
                      >
                        <!-- {{ `${toStringDate(day.year, day.month, day.day)}` }} -->
                        <button
                          @click="
                            showInfo(
                              getRoomSchedule(
                                getRoomNo(room.id),
                                toStringDate(day.year, day.month, day.day)
                              )
                            )
                          "
                          v-if="
                            getRoomSchedule(
                              getRoomNo(room.id),
                              toStringDate(day.year, day.month, day.day)
                            )
                          "
                        >
                          {{
                            getRoomSchedule(
                              getRoomNo(room.id),
                              toStringDate(day.year, day.month, day.day)
                            )?.cusName
                          }}
                        </button>
                      </td>
                      <span
                        v-else-if="
                          getRoomSchedule(
                            getRoomNo(room.id),
                            toStringDate(day.year, day.month, day.day)
                          )?.isStart == false
                        "
                        class="text-center border border-gray-300 p-2 hidden"
                      >
                        <!-- {{ `s${toStringDate(day.year, day.month, day.day)}` }} -->
                      </span>
                      <td v-else class="text-center border border-gray-300 p-2">
                        <!-- {{ `s${toStringDate(day.year, day.month, day.day)}` }} -->
                      </td>
                    </template>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Calendar>
    <dialog :class="{ 'modal-open': showModal }" class="modal" v-if="viewRoomBooking">
      <div class="modal-box w-11/12 max-w-5xl">
        <h1 class="text-3xl font-bold mb-8">การจองห้อง</h1>
        <div class="flex items-center gap-2">
          <font-awesome-icon class="text-[#88D66C]" icon="right-from-bracket" />
          <h4 class="text-md font-bold">จองโดย {{ viewRoomBooking.cusName }}</h4>
          <p class="text-sm text-gray-600">
            เข้าพัก {{ toThaiFromCheckDate(viewRoomBooking.checkIn) }} ถึง
            {{ toThaiFromCheckDate(viewRoomBooking.checkOut) }}
          </p>
          <p>เบอร์ {{ viewRoomBooking.cusPhone }}</p>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn" @click="showModal = !showModal">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
<script setup lang="ts">
import { Calendar, type Day } from 'normal-calendar'
import { pb } from '@/services/pb'
import { computed, onMounted, ref, watch } from 'vue'
import { DateTime } from 'luxon'
import _ from 'lodash'

const showModal = ref(false)
const viewRoomBooking = ref<any>(null)

const calendarRef = ref()
const allRooms = ref<any>([])
const bookings = ref<any>([])
const today = new Date()

const prevMonth = () => {
  calendarRef.value.context.trigger.prevMonth()
  var date = new Date(calendarRef.value.context.year, calendarRef.value.context.month, 1)
  getBookings(date)
  // console.log('m ', calendarRef.value.context.month)
}

const nextMonth = () => {
  calendarRef.value.context.trigger.nextMonth()
  var date = new Date(calendarRef.value.context.year, calendarRef.value.context.month, 1)
  getBookings(date)
  // console.log('m ', calendarRef.value.context.month)
}

const isToday = (d: number, m: number, y: number) => {
  var date = new Date(y, m, d)
  return today.setHours(0, 0, 0, 0) == date.setHours(0, 0, 0, 0)
}

interface RoomSchedules {
  [key: string]: any
}

const showInfo = (info: any) => {
  showModal.value = !showModal.value
  viewRoomBooking.value = info
}

const getRoomSchedule = (roomNo: string, day: string) => {
  if (!roomSchedules.value[roomNo]) {
    return null
  }
  return roomSchedules.value[roomNo][day]
}

const toThaiFromCheckDate = (date: string) => {
  var s = date.split(' ').join('T')
  const dateL = DateTime.fromISO(s)
  const lDate = dateL.toJSDate()

  const result = lDate.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return result
}

const roomSchedules = computed(() => {
  let schedules: RoomSchedules = {}
  allRooms.value.forEach((room: any) => {
    schedules[room.id] = {}
  })
  bookings.value.forEach((booking: any) => {
    var s = booking.check_in_date.split(' ').join('T')
    var e = booking.check_out_date.split(' ').join('T')

    let currentDate = DateTime.fromISO(s)
    const startDate = DateTime.fromISO(s)
    const endDate = DateTime.fromISO(e)
    const spanDay = calculateSpan(endDate, startDate)
    while (currentDate < endDate) {
      const dateString = currentDate.toISO()!.split('T')[0]

      booking.room.forEach((room: any) => {
        if (!schedules[getRoomNo(room)]) {
          schedules[getRoomNo(room)] = {}
        }

        schedules[getRoomNo(room)][dateString ?? ''] = {
          status: booking.status,
          cusName: booking.cus_name,
          cusPhone: booking.cus_phone_no,
          checkIn: booking.check_in_date,
          checkOut: booking.check_out_date,
          isStart: startDate.toFormat('dd-MM-yyyy') == currentDate.toFormat('dd-MM-yyyy'),
          span: spanDay
        }
      })

      currentDate = currentDate.plus({ days: 1 })
    }
  })
  return schedules
})

const calculateSpan = (startDate: DateTime, endDate: DateTime) => {
  return startDate.diff(endDate, ['days']).days
}

const getRoomNo = (id: string) => {
  return _.find(allRooms.value, (r: any) => r.id == id).room_no
}

const toStringDate = (y: number, m: number, d: number) => {
  const dd = new Date(y, m, d)
  const lDate = DateTime.fromJSDate(dd)
  return lDate.toFormat('yyyy-MM-dd')
}

const toThaiDate = (d: number, m: number, y: number) => {
  const date = new Date(y, m, d)
  const result = date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return result
}

const isThisMonth = (month: number) => {
  return calendarRef.value.context.month == month
}

const getBookings = async (focusDate: Date) => {
  const todayFilter = DateTime.fromJSDate(focusDate)
  const startDate = todayFilter.startOf('month')
  const endDate = todayFilter.endOf('month')

  const startDateFormat = startDate.toFormat('yyyy-MM-dd')
  const endDateFormat = endDate.toFormat('yyyy-MM-dd')
  const records = await pb.collection('bookings').getFullList({
    filter: `(status = 'active' || status ='check-out' || status='check-in') && (check_in_date >= '${startDateFormat} 00:00:00' && check_in_date <= '${endDateFormat} 23:59:59')`,
    fields: 'id,check_in_date,check_out_date,cus_name,room,status,cus_phone_no'
  })

  bookings.value = records
}

const getRooms = async () => {
  const rooms = await pb.collection('rooms').getFullList({
    sort: 'room_no',
    // filter: 'active = true',
    fields: '*'
  })
  allRooms.value = rooms
}

onMounted(async () => {
  await getRooms()
  await getBookings(new Date())
})
</script>

<template>
  <div class="min-w-[400px] min-h-full mb-10 rounded flex flex-col">
    <div class="flex gap-4 items-center justify-between"></div>
    <div class="mb-4 bg-white">
      <fieldset class="border border-gray-300 p-4 rounded-lg bg-white shadow-lg">
        <legend class="text-lg font-semibold text-gray-700 px-2">ສຮູປປຮະຂຳວິນ</legend>

        <div class="flex space-y-4 md:space-y-0 md:space-x-4">
          <!-- Date Filter: From -->
          <div class="flex flex-col w-1/2">
            <label for="from-date" class="block text-gray-700 text-sm font-medium mb-1"
              >From Date</label
            >
            <div class="" v-if="filterFromDate">
              <CustomCalendar v-model="filterFromDate"></CustomCalendar>
            </div>
          </div>
          <div class="flex flex-col w-1/2 items-end justify-end">
            <button class="btn btn-primary">ອອກເອກສາຮ</button>
          </div>
        </div>
      </fieldset>
      <div class="mt-2 bg-white border rounded">
        <div class="p-4 space-y-4">
          <!-- General Booking Stats Group -->
          <div class="bg-white p-3 rounded-md shadow-md">
            <h2 class="text-xl font-semibold text-gray-700 mb-3">ສະຫຼຸບປະຈໍາວັນ</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Booking Count -->
              <div class="bg-blue-50 p-4 rounded-md shadow-sm space-y-2">
                <i class="fas fa-calendar-check text-blue-600 text-2xl"></i>
                <div class="flex gap-2">
                  <h3 class="text-lg font-semibold text-blue-600">ລວມການຈອງ</h3>
                  <p class="text-xl font-bold text-blue-800">{{ summaryBook?.total }}</p>
                </div>
                <div class="text-sm text-blue-800">
                  <ul class="space-y-1 pl-7 list-disc">
                    <li><strong>ຍອດລວມ: </strong> ${{ summaryBook?.totalAmt }}</li>
                  </ul>
                </div>
              </div>

              <!-- Booking Paid Count with Summary -->
              <div class="bg-green-50 p-4 rounded-md shadow-sm space-y-2">
                <div class="flex items-center space-x-3">
                  <i class="fas fa-dollar-sign text-green-600 text-2xl"></i>
                  <div class="flex gap-2">
                    <h3 class="text-lg font-semibold text-green-600">ການຈອງທີ່ຈ່າຍແລ້ວ</h3>
                    <p class="text-xl font-bold text-green-800">{{ summaryBook?.paid }}</p>
                  </div>
                </div>
                <!-- Paid Booking Summary Details -->
                <div class="text-sm text-green-700">
                  <ul class="space-y-1 pl-7 list-disc">
                    <li><strong>ຍອດລວມ:</strong> ${{ summaryBook?.paidAmt }}</li>
                  </ul>
                </div>
              </div>

              <!-- Booking Unpaid Count with Summary -->
              <div class="bg-red-50 p-4 rounded-md shadow-sm space-y-2">
                <div class="flex items-center space-x-3">
                  <i class="fas fa-exclamation-circle text-red-600 text-2xl"></i>
                  <div class="flex gap-2">
                    <h3 class="text-lg font-semibold text-red-600">ການຈອງທີ່ຍັງບໍ່ໄດ້ຈ່າຍ</h3>
                    <p class="text-xl font-bold text-red-800">{{ summaryBook?.unPaid }}</p>
                  </div>
                </div>
                <!-- Unpaid Booking Summary Details -->
                <div class="text-sm text-red-700">
                  <ul class="space-y-1 pl-7 list-disc">
                    <li><strong>ຍອດລວມ:</strong> ${{ summaryBook?.unPaidAmt }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Deposit Summary Group -->
          <div class="bg-white p-3 rounded-md shadow-md">
            <h2 class="text-xl font-semibold text-gray-700 mb-3">ຍອດຍກມາ</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Bookings with Deposits -->
              <div class="bg-accent bg-opacity-35 p-4 rounded-md shadow-sm space-y-2">
                <div class="flex items-center space-x-3">
                  <i class="fas fa-exclamation-circle text-warning text-2xl"></i>
                  <div class="flex gap-2">
                    <h3 class="text-lg font-semibold text-warning">ຮາຍກາຮຍກມາ</h3>
                    <p class="text-xl font-bold text-warning">{{ summaryBook?.deposit }}</p>
                  </div>
                </div>
                <!-- Unpaid Booking Summary Details -->
                <div class="text-sm text-warning">
                  <ul class="space-y-1 pl-7 list-disc">
                    <li><strong>ຍອດລວມ:</strong> ${{ summaryBook?.depositAmt }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 bg-white mt-4">
        <label>ຮາຍກາຮທີ່າຮ້າງວິນນີ້</label>
        <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ລ/ດ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ເລກຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຊື່ຜູ້ເຊົາແຂກ
              </th>
              <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
                ຄ່າຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
                ວິນ
              </th>
              <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
                ຮວມ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂ່າຍແລ້ວ / ຍິງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂ່າຍທາງ
              </th>

              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ວັນທີມາ
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <template v-for="(booking, idx) in summaryToday" v-bind:key="booking.id">
              <tr class="hover:bg-gray-100 cursor-pointer" tabindex="0">
                <td class="px-6 py-4 text-center text-base text-gray-600">
                  {{ idx + 1 }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">
                  {{ booking?.room_no }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">{{ booking.cus_name }}</td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.room_price }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.days }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.net_amt }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.paid }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.paid_channel }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">
                  {{ toThaiFromCheckDate(booking?.check_in) }}
                </td>
              </tr>
            </template>
            <!-- Add more rows as needed based on the image -->
          </tbody>
        </table>
      </div>

      <div class="flex flex-col gap-2 bg-white mt-4">
        <label>ຮາຍກາຮທີ່າຍກມາ</label>
        <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ລ/ດ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ເລກຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຊື່ຜູ້ເຊົາແຂກ
              </th>
              <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
                ຄ່າຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
                ວິນ
              </th>
              <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
                ຮວມ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂ່າຍແລ້ວ / ຍິງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂ່າຍທາງ
              </th>

              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ວັນທີມາ
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <template v-for="(booking, idx) in summaryDepositToday" v-bind:key="booking.id">
              <tr class="hover:bg-gray-100 cursor-pointer" tabindex="0">
                <td class="px-6 py-4 text-center text-base text-gray-600">
                  {{ idx + 1 }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">
                  {{ booking?.room_no }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">{{ booking.cus_name }}</td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.room_price }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.days }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.net_amt }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.paid }}
                </td>
                <td class="px-6 py-4 text-base text-right text-gray-600">
                  {{ booking?.paid_channel }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">
                  {{ toThaiFromCheckDate(booking?.check_in) }}
                </td>
              </tr>
            </template>
            <!-- Add more rows as needed based on the image -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { computed, onMounted, ref, watch } from 'vue'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import _, { debounce } from 'lodash'
import 'dropzone-vue/dist/dropzone-vue.common.css'
import CustomCalendar from '@/components/CustomCalendar.vue'
import { useRoute, useRouter } from 'vue-router'

const today = new Date()
const todayL = DateTime.fromJSDate(today)
const filterFromDate = ref('')
const bookingsToday = ref<any>([])

const toThaiFromCheckDate = (date: string) => {
  if (!date) {
    return ''
  }
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
const summaryToday = computed(() => {
  if (!bookingsToday.value || bookingsToday.value.length == 0) {
    return
  }
  const all = bookingsToday.value.filter((b: any) => isToday(b.created))
  var bookingV = all?.map((book: any) => {
    return {
      id: book.id,
      room_no: getListValJoin(book.expand.room, 'room_no'),
      cus_name: book.cus_name,
      room_price: _.sumBy(book.expand.room, 'price'),
      days: dayCount(book.check_out_date, book.check_in_date),
      net_amt: `${numberWithCommas(book.price)} ເພຶ່ມ ${book.extra_charge_amt ?? 0}`,
      paid: book.paid ? 'ຂ່າຍແລ້ວ' : 'ຍິງ',
      paid_channel: book.paid_channel,
      create_by: book.create_by,
      check_in: book.check_in_date,
      check_out: book.check_out_date
    }
  })
  return bookingV
})

const summaryDepositToday = computed(() => {
  if (!bookingsToday.value || bookingsToday.value.length == 0) {
    return
  }
  const all = bookingsToday.value.filter((b: any) => !isToday(b.created))
  var bookingV = all?.map((book: any) => {
    return {
      id: book.id,
      room_no: getListValJoin(book.expand.room, 'room_no'),
      cus_name: book.cus_name,
      room_price: _.sumBy(book.expand.room, 'price'),
      days: dayCount(book.check_out_date, book.check_in_date),
      net_amt: `${numberWithCommas(book.price)} ເພຶ່ມ ${book.extra_charge_amt ?? 0}`,
      paid: book.paid ? 'ຂ່າຍແລ້ວ' : 'ຍິງ',
      paid_channel: book.paid_channel,
      create_by: book.create_by,
      check_in: book.check_in_date,
      check_out: book.check_out_date
    }
  })
  return bookingV
})

function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days
}
const getListValJoin = (list: any, key: string) => {
  return _.map(list, (l) => l[key]).join(',')
}

const summaryBook = computed(() => {
  if (!bookingsToday.value || bookingsToday.value.length == 0) {
    return
  }
  const all = bookingsToday.value.filter((b: any) => isToday(b.created))
  const totalAmt = _.sumBy(all, (b: any) => b.price)
  const paidItem = _.filter(all, (b: any) => b.paid)
  const paidAmt = _.sumBy(paidItem, (b: any) => b.price)
  const unPaidItem = _.filter(all, (b: any) => b.paid == false)
  const unPaidAmt = _.sumBy(unPaidItem, (b: any) => b.price)

  const deposit = bookingsToday.value.filter((b: any) => !isToday(b.created))
  const depositItem = _.filter(deposit, (b: any) => b.paid == true)
  const depositAmt = _.sumBy(depositItem, (b: any) => b.price)
  return {
    total: all.length,
    totalAmt: totalAmt,
    paid: paidItem.length,
    paidAmt: paidAmt,
    unPaid: unPaidItem.length,
    unPaidAmt: unPaidAmt,
    deposit: depositItem.length,
    depositAmt: depositAmt
  }
})

const isToday = (date: string) => {
  var s = date.split(' ').join('T')
  var created = DateTime.fromISO(s)
  return created.startOf('day').equals(todayL.startOf('day'))
}

const getBookingWithDate = async () => {
  const fromDate = filterFromDate.value
  var filters = ''
  if (fromDate) {
    filters = `(created >= '${fromDate} 00:00:00' && created <= '${fromDate} 23:59:59') 
    || (paid_date >= '${fromDate} 00:00:00' && paid_date <= '${fromDate} 23:59:59')`
  }
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    filter: filters,
    expand: 'room',
    fields: '*'
  })
  bookingsToday.value = records
}

onMounted(() => {
  filterFromDate.value = DateTime.fromJSDate(today).toFormat('yyyy-MM-dd')
  getBookingWithDate()
})
</script>

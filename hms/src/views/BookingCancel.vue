<template>
  <div class="min-w-[400px] min-h-full mb-10 rounded flex flex-col w-full px-10">
    <div class="flex gap-4 items-center justify-between"></div>
    <div class="mb-4">
      <fieldset class="border border-gray-300 p-4 rounded-lg bg-white shadow-lg">
        <legend class="text-lg font-semibold text-gray-700 px-2">
          ລາຍການຍົກເລີກ

          <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
            <font-awesome-icon icon="arrows-rotate" />
          </button>
        </legend>

        <div class="flex items-center space-y-4 md:space-y-0 md:space-x-4">
          <!-- Date Filter: From -->
          <div class="flex flex-col w-1/2">
            <label for="from-date" class="block text-gray-700 text-sm font-medium mb-1"
              >ວັນທີ່ເຂົ້າພັກ</label
            >
            <div class="" v-if="filterFromDate">
              <CustomCalendar v-model="filterFromDate"></CustomCalendar>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide"></th>
            <th class="px-6 py-3 text-gray-700 text-center text-lg font-semibold tracking-wide">
              ເວລາຍົກເລີກ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold">ເລກຫ້ອງ</th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ຊື່ຜູ້ເຊົາແຂກ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ວັນທີ່ເຂົ້າພັກ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ວັນທີໄປ
            </th>
            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ຈໍານວນວັນ
            </th>
            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ຄ່າຫ້ອງ
            </th>

            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ລາຍຈ່າຍເພີ່ມເຕີມ
            </th>

            <th class="px-6 py-3 text-gray-700 text-right text-lg font-semibold tracking-wide">
              ຈໍານວນເງິນທັງໝົດ
            </th>

            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ຂ່າຍແລ້ວ / ຍິງ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ເງິນສົດ / ໂອນເງິນ
            </th>

            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ພະນິກງານ
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <template v-for="(booking, idx) in bookingsView" v-bind:key="booking.id">
            <tr tabindex="0" :class="{ 'bg-blue-200': booking.isCheckToday }">
              <!-- Left Border (Status Indicator) -->
              <td
                class="px-6 py-4 text-center text-base text-gray-600"
                :class="{
                  'border-l-4 border-orange-400': booking?.status == 'active',
                  'border-l-4 border-[#0069ff]': booking?.status == 'check-in',
                  'border-l-4 border-green-300': booking?.status == 'check-out',
                  'border-l-4 border-red-400': booking?.status == 'cancel',
                  'border-l-4 border-yellow-300': booking?.status == 'patial-checkout'
                }"
              ></td>

              <!-- Booking No -->
              <td
                class="px-6 py-4 text-center text-base text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {{ booking.cancel_time }}
              </td>

              <!-- Room Number -->
              <td class="px-6 py-4 text-base text-gray-600">
                {{ padZero(booking.room_no) }}
              </td>

              <!-- Customer Name -->
              <td class="px-6 py-4 text-base text-gray-600">{{ booking.cus_name }}</td>

              <!-- Check-in Date (Moved after Customer Name) -->
              <td class="px-6 py-4 text-base text-gray-600 whitespace-nowrap">
                {{ toThaiFromCheckDate(booking.check_in) }}
              </td>

              <!-- Check-out Date (Moved after Check-in Date) -->
              <td class="px-6 py-4 text-base text-gray-600 whitespace-nowrap">
                {{ toThaiFromCheckDate(booking.check_out) }}
              </td>

              <!-- Number of Days -->
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.days }}
              </td>

              <!-- Room Price -->
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.room_price }}
              </td>

              <!-- Additional Charges -->
              <td
                class="px-6 py-4 text-base text-right text-gray-600"
                :class="{ 'text-blue-400': booking.paidFlag, 'text-red-400': !booking.paidFlag }"
              >
                {{ booking.extra_charge }}
              </td>

              <!-- Total Price -->
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.net_amt }}
              </td>

              <!-- Payment Status -->
              <td
                class="px-6 py-4 text-base text-right"
                :class="{
                  'bg-red-500 text-white': !booking.paid // Red background if not paid
                }"
              >
                {{ booking.paid ? 'ຈ່າຍແລ້ວ' : 'ຍັງຄ້າງ' }}
              </td>

              <!-- Payment Method -->
              <td
                class="px-6 py-4 text-base text-right text-gray-600"
                :class="{
                  'text-red-500': booking.paid_chanel_o == 'bank_transfer',
                  'text-blue-400': booking.paid_chanel_o == 'cash'
                }"
              >
                {{ booking.paid_channel }}
              </td>

              <!-- Booked By -->
              <td class="px-6 py-4 text-base text-gray-600">{{ booking.create_by }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-6">
      <div class="text-sm text-gray-600">
        <span class="font-medium"> ໜ້າ {{ bookings?.page }} / {{ bookings?.totalPages }}</span>
        ຈາກ <span class="font-medium">{{ bookings?.totalItems }}</span> ລາຍການ
      </div>
      <div>
        <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button
            @click="prevPage()"
            :disabled="bookings.page == 1"
            class="relative disabled:opacity-25 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            ໜ້າກ່ອນໜ້ານີ້
          </button>

          <button
            @click="nextPage()"
            :disabled="bookings.page == bookings.totalPages"
            href="#"
            class="relative disabled:opacity-25 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            ໜ້າຕໍ່ໄປ
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { pb } from '@/services/pb' // Adjust import based on your project setup
import { DateTime } from 'luxon'
import _ from 'lodash'
import CustomCalendar from '@/components/CustomCalendar.vue'

const bookings = ref<any>([])
const filterFromDate = ref('')
const today = new Date()

const currentPage = ref(1)
const perPage = ref(10)

const bookingsView = computed(() => {
  var bookingV = bookings.value?.items?.map((book: any) => {
    return {
      id: book.id,
      room_no: getListValJoin(book.expand.room, 'room_no'),
      cus_name: book.cus_name,
      cancel_time: formatDate(book.cancel_time),
      status: book.status,
      room_price: book.room_price_snapshort,
      days: dayCount(book.check_out_date, book.check_in_date),
      extra_charge: book.extra_charge_amt,
      net_amt: `${numberWithCommas(book.price)} `,
      paid: book.paid, //? 'ຈ່າຍແລ້ວ' : 'ຍັງຄ້າງ'
      paidFlag: book.paid,
      paid_chanel_o: book.paid_channel,
      paid_channel: getPayTranslate(book.paid_channel),
      create_by: book.create_by,
      check_in: book.check_in_date,
      check_out: book.check_out_date,
      isCheckToday: isToday(book.check_in_date, DateTime.now())
    }
  })
  return bookingV
})

function formatDate(dateString: string) {
  if (!dateString) {
    return ''
  }
  var s = dateString.split(' ').join('T')
  return DateTime.fromISO(s) // Parse as UTC
    .toFormat('dd-MM-yyyy HH:mm') // Format as dd-MM-yyyy HH:mm
}

const prevPage = () => {
  currentPage.value = currentPage.value - 1
  onSearch()
}
const nextPage = () => {
  currentPage.value = currentPage.value + 1
  onSearch()
}

watch(filterFromDate, (newDate, oldDate) => {
  if (newDate != oldDate) {
    onSearch()
  }
})

const onSearch = async () => {
  const fromDate = filterFromDate.value

  var filters = ''

  if (fromDate) {
    if (filters) {
      filters += ' && '
    }
    filters += `(created >= '${fromDate} 00:00:00' && created <= '${fromDate} 23:59:59' &&  status = 'cancel')`
  }

  const records = await pb.collection('bookings_view').getList(currentPage.value, perPage.value, {
    sort: '-cancel_time,cus_name',
    filter: filters,
    expand: 'room',
    fields: '*'
  })
  bookings.value = records
}

const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days
}

const getPayTranslate = (chan: string) => {
  if (chan == 'cash') {
    return 'ເງຶນສດ'
  }
  if (chan == 'bank_transfer') {
    return 'ໂອນຈ່າຍ'
  }
  return ''
}

const isToday = (date: string, filter: DateTime) => {
  var s = date.split(' ').join('T')
  var created = DateTime.fromISO(s)
  return created.startOf('day').equals(filter.startOf('day'))
}

const refresh = async () => {
  onSearch()
}

const getListValJoin = (list: any, key: string) => {
  return _.map(list, (l) => l[key]).join(',')
}

function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const padZero = (room: any) => {
  return String(room).padStart(3, '0')
}

const toThaiFromCheckDate = (date: string) => {
  var s = date.split(' ').join('T')
  const dateL = DateTime.fromISO(s).toFormat('dd-MM-yyyy')
  return dateL
}

onMounted(async () => {
  filterFromDate.value = DateTime.fromJSDate(today).toFormat('yyyy-MM-dd')
  //getBookings()
})
</script>

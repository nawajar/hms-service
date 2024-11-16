<template>
  <div class="min-w-[400px] min-h-full mb-10 rounded flex flex-col">
    <div class="flex gap-4 items-center justify-between"></div>
    <div class="mb-4">
      <fieldset class="border border-gray-300 p-4 rounded-lg bg-white shadow-lg">
        <legend class="text-lg font-semibold text-gray-700 px-2">
          ການຈອງ

          <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
            <font-awesome-icon icon="arrows-rotate" />
          </button>
        </legend>
        <div class="flex gap-2">
          <div class="flex flex-row items-center gap-4">
            <div class="bg-primary min-w-4 h-4 rounded"></div>
            ໄດ້ເຊັກອິນ
          </div>
          <div class="flex flex-row items-center gap-4">
            <div class="bg-[#0069ff] min-w-4 h-4 rounded"></div>
            ເຊັກອິນແລ້ວ
          </div>
          <div class="flex flex-row items-center gap-4">
            <div class="bg-error min-w-4 h-4 rounded"></div>
            ເຊັກອອກແລ້ວ
          </div>
          <div class="flex flex-row items-center gap-4">
            <div class="bg-warning min-w-4 h-4 rounded"></div>
            ຍກເລຶກ
          </div>
        </div>
        <div class="flex items-center space-y-4 md:space-y-0 md:space-x-4">
          <!-- Search text -->
          <div class="flex flex-col w-1/2">
            <label for="search" class="block text-gray-700 text-sm font-medium mb-1">ຄົ້ນຫາ</label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="ຄົ້ນຫາດ້ວຍຊື່ ຫຼື ໝາຍເລກຫ້ອງ"
              v-model="searchQuery"
              @input="onInputSearch"
              class="w-full p-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
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

    <div class="">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide"></th>
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
              เพิ่ม
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
              ພນິກງານ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ວັນທີມາ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ວັນທີໄປ
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <template v-for="(booking, idx) in bookingsView" v-bind:key="booking.id">
            <tr
              class="hover:bg-gray-100 cursor-pointer font-bold"
              tabindex="0"
              :class="{ 'bg-blue-200': booking.isCheckToday }"
            >
              <td
                class="px-6 py-4 text-center text-base text-gray-600"
                :class="{
                  'border-l-4 border-primary': booking?.status == 'active',
                  'border-l-4 border-[#0069ff]': booking?.status == 'check-in',
                  'border-l-4 border-error': booking?.status == 'check-out',
                  'border-l-4 border-warning': booking?.status == 'cancel'
                }"
              >
                <button @click="goToEdit(booking.id)">
                  <font-awesome-icon icon="pen-to-square"></font-awesome-icon>
                </button>
              </td>
              <td class="px-6 py-4 text-center text-base text-gray-600">
                {{ (currentPage - 1) * perPage + (idx + 1) }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">
                {{ padZero(booking.room_no) }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">{{ booking.cus_name }}</td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.room_price }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.days }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.extra_charge }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.net_amt }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.paid }}
              </td>
              <td class="px-6 py-4 text-base text-right text-gray-600">
                {{ booking.paid_channel }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">{{ booking.create_by }}</td>
              <td class="px-6 py-4 text-base text-gray-600 whitespace-nowrap">
                {{ toThaiFromCheckDate(booking.check_in) }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600 whitespace-nowrap">
                {{ toThaiFromCheckDate(booking.check_out) }}
              </td>
            </tr>
          </template>

          <!-- Add more rows as needed based on the image -->
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

const router = useRouter()
const route = useRoute()

const bookings = ref<any>([])
const searchQuery = ref('')
const filterFromDate = ref('')
const today = new Date()

const currentPage = ref(1)
const perPage = ref(10)

const goToEdit = (bookId: string) => {
  router.push({ name: 'Booking Edit', params: { id: bookId } })
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

const onInputSearch = debounce(() => {
  onSearch()
}, 500)

const onSearch = async () => {
  const queryText = searchQuery.value
  const fromDate = filterFromDate.value

  var filters = ''
  if (queryText) {
    filters += `(room.room_no ?= '${queryText}' || cus_name ~ '${queryText}')`
  }
  if (fromDate) {
    if (filters) {
      filters += ' && '
    }
    filters += `(created >= '${fromDate} 00:00:00' && created <= '${fromDate} 23:59:59')`
  }

  const records = await pb.collection('bookings_view').getList(currentPage.value, perPage.value, {
    sort: 'created',
    filter: filters,
    expand: 'room',
    fields: '*'
  })
  bookings.value = records
}

const bookingsView = computed(() => {
  var bookingV = bookings.value?.items?.map((book: any) => {
    return {
      id: book.id,
      room_no: getListValJoin(book.expand.room, 'room_no'),
      cus_name: book.cus_name,
      status: book.status,
      room_price: book.room_price_snapshort,
      days: dayCount(book.check_out_date, book.check_in_date),
      extra_charge: book.extra_charge_amt,
      net_amt: `${numberWithCommas(book.price)} `,
      paid: book.paid ? 'ຂ່າຍແລ້ວ' : 'ຍິງ',
      paid_channel: book.paid_channel,
      create_by: book.create_by,
      check_in: book.check_in_date,
      check_out: book.check_out_date,
      isCheckToday: isToday(book.check_in_date, DateTime.now())
    }
  })
  return bookingV
})

const isToday = (date: string, filter: DateTime) => {
  var s = date.split(' ').join('T')
  var created = DateTime.fromISO(s)
  return created.startOf('day').equals(filter.startOf('day'))
}

const refresh = async () => {
  onSearch()
}

const toDateFormat = (f: string) => {
  var s = f.split(' ').join('T')
  var dd = DateTime.fromISO(s).toFormat('dd-MM-yyyy')
  return dd
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

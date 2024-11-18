<template>
  <div class="min-w-[400px] min-h-full mb-10 rounded flex flex-col">
    <div class="flex gap-4 items-center justify-between"></div>
    <div class="mb-4">
      <fieldset class="border border-gray-300 p-4 rounded-lg bg-white shadow-lg">
        <legend class="text-lg font-semibold text-gray-700 px-2">
          ລາຍຈ່າຍ

          <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
            <font-awesome-icon icon="arrows-rotate" />
          </button>
        </legend>

        <div class="flex items-center space-y-4 md:space-y-0 md:space-x-4">
          <!-- Search text -->
          <div class="flex flex-col w-1/2">
            <label for="search" class="block text-gray-700 text-sm font-medium mb-1">ສ້າງ</label>
            <button @click="showModal = true" class="text-neutral bg-black px-4 py-2 rounded">
              ສ້າງ
            </button>
          </div>
          <!-- Date Filter: From -->
          <div class="flex flex-col w-1/2">
            <label for="from-date" class="block text-gray-700 text-sm font-medium mb-1"
              >ວັນທີ</label
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
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ລ/ດ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ລາຍລະອຽດ
            </th>
            <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
              ຍອດ
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <template v-for="(budget, idx) in budgetView" v-bind:key="budget.id">
            <tr class="hover:bg-gray-100 cursor-pointer" tabindex="0">
              <td class="px-6 py-4 text-center text-base text-gray-600">
                {{ (currentPage - 1) * perPage + (idx + 1) }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">
                {{ budget.details }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">{{ budget.amount }}</td>
            </tr>
          </template>

          <!-- Add more rows as needed based on the image -->
        </tbody>
      </table>
    </div>
    <div class="flex justify-between items-center mt-6">
      <div class="text-sm text-gray-600">
        <span class="font-medium"> ໜ້າ {{ budgets?.page }} / {{ budgets?.totalPages }}</span>
        ຈາກ <span class="font-medium">{{ budgets?.totalItems }}</span> ລາຍການ
      </div>
      <div>
        <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button
            @click="prevPage()"
            :disabled="budgets.page == 1"
            class="relative disabled:opacity-25 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            ໜ້າກ່ອນໜ້ານີ້
          </button>

          <button
            @click="nextPage()"
            :disabled="budgets.page == budgets.totalPages"
            href="#"
            class="relative disabled:opacity-25 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            ໜ້າຕໍ່ໄປ
          </button>
        </nav>
      </div>
    </div>
  </div>

  <dialog :class="{ 'modal-open': showModal }" class="modal">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">ສ້າງ ລາຍການຄ່າໃຊ້ຈ່າຍ</h1>
      <div class="grid grid-cols-1">
        <div>
          <h2 class="text-xl font-semibold mb-2"></h2>
        </div>
        <div></div>
      </div>

      <div class="modal-actions">
        <form method="dialog" class="flex flex-col gap-2">
          <div class="flex items-center">
            <label class="w-1/3 font-medium">วันที่:</label>
            <div class="w-2/3">
              <CustomCalendar v-model="formData.budgetDate"></CustomCalendar>
            </div>
          </div>
          <!-- Check-out Date -->
          <div class="flex items-center">
            <label class="w-1/3 font-medium">รายละเอียด:</label>
            <div class="w-2/3">
              <textarea
                class="resize rounded-md w-full border border-neutral"
                rows="8"
                v-model="formData.details"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center">
            <label class="w-1/3 font-medium">ยอด:</label>
            <div class="w-2/3">
              <input
                type="number"
                class="flex-1 border border-neutral p-2 rounded w-full"
                v-model="formData.amount"
              />
            </div>
          </div>
          <!-- if there is a button, it will close the modal -->
          <div class="flex gap-2 justify-end">
            <button class="btn btn-primary" @click="createBudget">ສ້າງ</button>
            <button class="btn" @click="showModal = !showModal">ປິດ</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { computed, onMounted, ref, watch } from 'vue'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'dropzone-vue/dist/dropzone-vue.common.css'
import CustomCalendar from '@/components/CustomCalendar.vue'

const budgets = ref<any>([])
const showModal = ref(false)
const filterFromDate = ref('')
const today = new Date()

const currentPage = ref(1)
const perPage = ref(10)

const formData = ref<{ budgetDate: string; details: string; amount: number }>({
  budgetDate: '',
  details: '',
  amount: 0
})

const createBudget = async () => {
  await pb.collection('budgets').create(formData.value)
  clearForm()
  showModal.value = false
  getBudget()
}

const clearForm = () => {
  formData.value = {
    budgetDate: '',
    details: '',
    amount: 0
  }
}

const prevPage = () => {
  currentPage.value = currentPage.value - 1
}
const nextPage = () => {
  currentPage.value = currentPage.value + 1
}

const budgetView = computed(() => {
  var budgetV = budgets.value?.items?.map((budget: any) => {
    return {
      id: budget.id,
      details: budget.details,
      amount: numberWithCommas(budget.amount)
    }
  })
  return budgetV
})

const refresh = async () => {
  getBudget()
}

function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const getBudget = async () => {
  const fromDate = filterFromDate.value
  var filters = ''
  if (fromDate) {
    filters += `(budgetDate >= '${fromDate} 00:00:00' && budgetDate <= '${fromDate} 23:59:59')`
  }

  const records = await pb.collection('budgets').getList(currentPage.value, perPage.value, {
    sort: '-created',
    filter: filters,
    fields: '*'
  })
  budgets.value = records
}

watch(filterFromDate, (newDate, oldDate) => {
  if (newDate != oldDate) {
    getBudget()
  }
})

onMounted(async () => {
  filterFromDate.value = DateTime.fromJSDate(today).toFormat('yyyy-MM-dd')
  //getBookings()
})
</script>

<template>
  <div class="min-w-[400px] min-h-full mb-10 rounded flex flex-col">
    <div class="mb-4 bg-white">
      <fieldset class="border border-gray-300 p-4 rounded-lg bg-white shadow-lg">
        <legend class="text-lg font-semibold text-gray-700 px-2">ສະຫລຸບລວມ</legend>

        <div class="flex space-y-4 md:space-y-0 md:space-x-4">
          <!-- Date Filter: From -->
          <div class="flex flex-col w-1/2">
            <label for="from-date" class="block text-gray-700 text-sm font-medium mb-1"
              >ວັນທີ
            </label>
            <div class="">
              <CustomCalendar v-model="filterFromDate"></CustomCalendar>
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <label for="from-date" class="block text-gray-700 text-sm font-medium mb-1"
              >to ວັນທີ</label
            >
            <div class="">
              <CustomCalendar v-model="filterToDate"></CustomCalendar>
            </div>
          </div>
          <!-- <div class="flex flex-col w-1/2 items-end justify-end">
            <button class="btn btn-primary">ອອກເອກະສານ</button>
          </div> -->
        </div>
      </fieldset>
      <div class="flex flex-col gap-2 bg-white mt-4">
        <label>ຮາຍກາຮເພຶ່ມ</label>
        <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-gray-700 text-center text-lg font-semibold tracking-wide"
              ></th>
              <th
                colspan="2"
                class="px-6 py-3 text-gray-700 text-center text-lg font-semibold tracking-wide"
              >
                ຍອດຊາຍ
              </th>
              <th
                colspan="2"
                class="px-6 py-3 text-gray-700 text-center text-lg font-semibold tracking-wide"
              >
                ຂ່າຍແລ້ວ
              </th>
              <th
                colspan="2"
                class="px-6 py-3 text-gray-700 text-center text-lg font-semibold tracking-wide"
              >
                ຕ້າງຂ່າຍ
              </th>
              <th
                colspan="2"
                class="text-center px-6 py-3 text-gray-700 text-lg font-semibold tracking-wide"
              >
                ຂ່າຍຍ້ອນຫລິງ
              </th>
              <th
                colspan="2"
                class="text-center px-6 py-3 text-gray-700 text-lg font-semibold tracking-wide"
              >
                ບຮຶກາຮເສຮຶມ
              </th>
            </tr>
            <tr>
              <th class="px-6 py-3 text-gray-700 text-center text-lg font-semibold tracking-wide">
                ວ/ດ/ປ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂຳນວນ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂຳນວນ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂຳນວນ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຫ້ອງ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂຳນວນ
              </th>
              <th class="px-6 py-3 text-gray-700 text-left text-lg font-semibold tracking-wide">
                ຂຳນວນ
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <template v-for="[key, val] in summaryBook" v-bind:key="key">
              <tr class="hover:bg-gray-100 cursor-pointer" tabindex="0">
                <td class="px-6 py-4 text-center text-base text-gray-600">
                  {{ key }}
                </td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.roomCount }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.saleAmount }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.paidRoom }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.paidAmount }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.unPaidRoom }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.unPaidAmount }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.deptPaidRoom }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.deptPaidAmount }}</td>
                <td class="px-6 py-4 text-base text-gray-600">{{ val.extraAmount }}</td>
              </tr>
            </template>
            <tr
              v-if="summaryBookCon"
              class="hover:bg-gray-100 cursor-pointer bg-primary"
              tabindex="0"
            >
              <td class="px-6 py-4 text-center text-base text-gray-600">
                {{ summaryBookCon.range }}
              </td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.roomCount }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.saleAmount }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.paidRoom }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.paidAmount }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.unPaidRoom }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.unPaidAmount }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.deptPaidRoom }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.deptPaidAmount }}</td>
              <td class="px-6 py-4 text-base text-gray-600">{{ summaryBookCon.extraAmount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import CustomCalendar from '@/components/CustomCalendar.vue'
import { DateTime } from 'luxon'
import { pb } from '@/services/pb'
import _ from 'lodash'

const filterFromDate = ref('')
const filterToDate = ref('')
const bookings = ref<any>([])
const summaryBook = ref<any>([])
const summaryBookCon = ref<any>()

const toDate = (s: string) => {
  var d = s.split(' ').join('T')
  return DateTime.fromISO(d).set({ hour: 0 })
}

const getBookingWithDate = async () => {
  const fromDate = filterFromDate.value
  const toDate = filterToDate.value
  var filters = ''
  if (fromDate) {
    filters = `((created >= '${fromDate} 00:00:00' && created <= '${toDate} 23:59:59')
    || (paid_date >= '${fromDate} 00:00:00' && paid_date <= '${toDate} 23:59:59')) && status != 'cancel'`
  }
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    filter: filters,
    expand: 'room',
    fields: '*'
  })
  bookings.value = records
  if (bookings.value) {
    summaryBook.value = _.reduce(
      bookings.value,
      (acc: Map<string, any>, cur: any) => {
        const keyCreated = cur.created.split(' ')[0]
        if (acc.has(keyCreated)) {
          let val = acc.get(keyCreated)
          val.roomCount += cur.room.length ?? 0
          val.saleAmount += cur.price - cur.extra_charge_amt
          val.extraAmount += cur.extra_charge_amt
          const isPaidInDay = getStringDate(cur.paid_date) == getStringDate(cur.created)
          if (cur.paid && isPaidInDay) {
            val.paidRoom += cur.room.length ?? 0
            val.paidAmount += cur.price - cur.extra_charge_amt
          }

          if (cur.paid && !isPaidInDay) {
            val.unPaidRoom += cur.room.length ?? 0
            val.unPaidAmount += cur.price - cur.extra_charge_amt

            const keyPaidDate = getStringDate(cur.paid_date)
            if (acc.has(keyPaidDate)) {
              let val = acc.get(keyPaidDate)
              val.deptPaidRoom += cur.room.length ?? 0
              val.deptPaidAmount += cur.price - cur.extra_charge_amt
              val.extraAmount += cur.extra_charge_amt
            } else {
              let val: any = {
                deptPaidRoom: 0,
                deptPaidAmount: 0
              }

              val.deptPaidRoom += cur.room.length ?? 0
              val.deptPaidAmount += cur.price - cur.extra_charge_amt
              acc.set(keyPaidDate, val)
            }
          }

          if (!cur.paid) {
            val.unPaidRoom += cur.room.length ?? 0
            val.unPaidAmount += cur.price - cur.extra_charge_amt
          }
        } else {
          let val: any = {
            roomCount: 0,
            saleAmount: 0,
            paidRoom: 0,
            paidAmount: 0,
            unPaidRoom: 0,
            unPaidAmount: 0,
            deptPaidRoom: 0,
            deptPaidAmount: 0,
            extraAmount: 0
          }

          val.roomCount += cur.room.length ?? 0
          val.saleAmount += cur.price - cur.extra_charge_amt
          val.extraAmount += cur.extra_charge_amt
          const isPaidInDay = getStringDate(cur.paid_date) == getStringDate(cur.created)
          if (cur.paid && isPaidInDay) {
            val.paidRoom += cur.room.length ?? 0
            val.paidAmount += cur.price - cur.extra_charge_amt
          }

          if (cur.paid && !isPaidInDay) {
            val.unPaidRoom += cur.room.length ?? 0
            val.unPaidAmount += cur.price - cur.extra_charge_amt

            const keyPaidDate = getStringDate(cur.paid_date)
            if (acc.has(keyPaidDate)) {
              let val = acc.get(keyPaidDate)
              val.deptPaidRoom += cur.room.length ?? 0
              val.deptPaidAmount += cur.price - cur.extra_charge_amt
              val.extraAmount += cur.extra_charge_amt
            } else {
              let val: any = {
                deptPaidRoom: 0,
                deptPaidAmount: 0
              }

              val.deptPaidRoom += cur.room.length ?? 0
              val.deptPaidAmount += cur.price - cur.extra_charge_amt
              acc.set(keyPaidDate, val)
            }
          }

          if (!cur.paid) {
            val.unPaidRoom += cur.room.length ?? 0
            val.unPaidAmount += cur.price - cur.extra_charge_amt
          }

          acc.set(keyCreated, val)
        }
        return acc
      },
      new Map()
    )
  }
  console.log('Data is ', summaryBook.value)

  if (summaryBook.value) {
    summaryBookCon.value = {
      range: `${getStringDate(fromDate)} - ${getStringDate(toDate)}`,
      roomCount: 0,
      saleAmount: 0,
      paidRoom: 0,
      paidAmount: 0,
      unPaidRoom: 0,
      unPaidAmount: 0,
      deptPaidRoom: 0,
      deptPaidAmount: 0,
      extraAmount: 0
    }
    for (let [key, value] of summaryBook.value) {
      summaryBookCon.value.roomCount += value.roomCount
      summaryBookCon.value.saleAmount += value.saleAmount
      summaryBookCon.value.paidRoom += value.paidRoom
      summaryBookCon.value.paidAmount += value.paidAmount
      summaryBookCon.value.unPaidRoom += value.unPaidRoom
      summaryBookCon.value.unPaidAmount += value.unPaidAmount
      summaryBookCon.value.deptPaidRoom += value.deptPaidRoom
      summaryBookCon.value.deptPaidAmount += value.deptPaidAmount
      summaryBookCon.value.extraAmount += value.extraAmount
    }

    console.log('Sum is ', summaryBookCon.value)
  }
}

const getStringDate = (date: string) => {
  return date.split(' ')[0]
}

watch([filterFromDate, filterToDate], () => {
  if (filterFromDate.value && filterToDate.value) {
    var selectedStart = toDate(filterFromDate.value ?? '')
    var selectedEnd = toDate(filterToDate.value ?? '')
    if (selectedStart <= selectedEnd) {
      getBookingWithDate()
      console.log('Get data with ', filterFromDate.value, filterToDate.value)
    }
  }
})
</script>

<script setup lang="ts">
import { Calendar, type Day } from 'normal-calendar'
import { onMounted, ref } from 'vue'
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onClickOutside } from '@vueuse/core'

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const pickDate = ref<any>()
const holdDayContext = ref<any>()
const target = ref()
const inputText = ref()
const onSelectDay = (day: Day) => {
  holdDayContext.value = day
  const jsD = new Date(day.year, day.month, day.day)
  pickDate.value = DateTime.fromJSDate(jsD).toFormat('yyyy-MM-dd')
  emits('update:modelValue', pickDate.value)
  //target.value.context.toggle()
}

const isThisMonth = (month: number) => {
  return target.value.context.month == month
}

const isToday = (day: Day) => {
  const testDay = DateTime.fromJSDate(new Date(day.year, day.month, day.day))
  return DateTime.now().startOf('day').equals(testDay.startOf('day'))
}

onMounted(() => {
  pickDate.value = props.modelValue
})

onClickOutside(inputText, (event) => {
  if (target.value.context.isOpenCalendar()) {
    target.value.context.toggle()
  }
})
</script>

<template>
  <Calendar ref="target" #default="{ calendar }">
    <div class="calendar-container">
      <input
        ref="inputText"
        type="text"
        class="flex-1 border p-2 rounded z-0 border-neutral"
        @click="calendar.toggle"
        v-model="pickDate"
      />
      <div class="absolute w-1/2 z-10" v-if="calendar.isOpenCalendar()">
        <div class="flex flex-col gap-2 p-4 bg-white rounded-md border-[1px]">
          <div class="flex justify-between">
            <button @click="calendar.trigger.prevMonth()">
              <font-awesome-icon class="text-blue-500" icon="fa-chevron-left" />
            </button>
            <div>
              {{ calendar.monthName }}
              {{ calendar.year }}
            </div>
            <button @click="calendar.trigger.nextMonth()">
              <font-awesome-icon class="text-blue-500" icon="fa-chevron-right" />
            </button>
          </div>
          <div class="calendar">
            <div class="text-center">อา</div>
            <div class="text-center">จ</div>
            <div class="text-center">อ</div>
            <div class="text-center">พ</div>
            <div class="text-center">พฤ</div>
            <div class="text-center">ศ</div>
            <div class="text-center">ส</div>
            <template v-for="day of calendar.days" :key="day">
              <button
                class="day text-center"
                :class="{
                  'opacity-50': !isThisMonth(day.month),
                  'bg-green-400': day == holdDayContext || (isToday(day) && !holdDayContext)
                }"
                @click="onSelectDay(day)"
              >
                {{ day.day }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Calendar>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  flex-direction: column;
}

.calendar-container {
  @apply w-full flex relative;
  input {
    @apply w-full;
  }
}

.calendar {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, auto);
  .day {
    @apply hover:bg-info rounded-full h-[40px];
  }
}
</style>

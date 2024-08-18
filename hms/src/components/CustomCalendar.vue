<script setup lang="ts">
import { Calendar, type Day } from 'normal-calendar'
import { onMounted, ref } from 'vue'
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const pickDate = ref<any>()
const target = ref()
const onSelectDay = (day: Day) => {
  const jsD = new Date(day.year, day.month, day.day)
  pickDate.value = DateTime.fromJSDate(jsD).toFormat('yyyy-MM-dd')
  emits('update:modelValue', pickDate.value)
  target.value.context.toggle()
}

const isThisMonth = (month: number) => {
  return target.value.context.month == month
}

onMounted(() => {
  pickDate.value = ''
})

//onClickOutside(target, (event) => target.value.context)
</script>

<template>
  <Calendar ref="target" #default="{ calendar }">
    <div class="calendar-container">
      <input
        type="text"
        class="flex-1 border p-2 rounded"
        @click="calendar.toggle"
        v-model="pickDate"
      />
      <div class="absolute w-1/2" v-if="calendar.isOpenCalendar()">
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
                :class="{ 'opacity-50': !isThisMonth(day.month) }"
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
  @apply w-full;
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

<template>
  <div class="w-full h-full mb-10 rounded overflow-y-scroll relative overflow-x-hidden">
    <div class="flex gap-4 items-center justify-between">
      <div class="flex gap-4">
        <legend class="text-secondary text-xl">Booking</legend>
        <button @click="refresh" class="hover:bg-neutral rounded-full w-8 h-8">
          <font-awesome-icon icon="arrows-rotate" />
        </button>
      </div>
      <button @click="openCreate" class="text-neutral bg-black px-4 py-2 rounded">Create</button>
    </div>
    <div
      class="page-body container"
      :class="[activeRightCreate || activeRightUpdate ? 'opacity-20' : '']"
    >
      <table class="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                View
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                In-Out
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Days
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Prices
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Paid
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Room
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Customer Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Phone No
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70"
              >
                Action
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" v-bind:key="booking.id">
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    <button @click="viewBookAt(booking)">
                      <font-awesome-icon icon="eye" />
                    </button>
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    {{ formatDate(booking.check_in_date) }} To
                    {{ formatDate(booking.check_out_date) }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    {{ dayCount(booking.check_out_date, booking.check_in_date) }}
                  </p>
                </div>
              </div>
            </td>

            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    {{
                      dayCount(booking.check_out_date, booking.check_in_date) *
                      booking.expand.room.price
                    }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    <!-- {{ booking.paid ? 'Yes' : 'No' }} -->

                    <span class="flex items-center">
                      <span class="badge badge-success mr-2" v-if="booking.paid">Paid</span>
                      <span class="badge badge-error mr-2" v-if="!booking.paid">Unpaid</span>
                    </span>
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                  >
                    {{ booking.expand.room.room_no }}
                  </p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex flex-col">
                <p
                  class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                >
                  {{ booking.cus_name }}
                </p>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="w-max">
                <p
                  class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                >
                  {{ booking.cus_phone_no }}
                </p>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div
                class="bg-green-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'active'"
              >
                <i class="fas fa-check-circle text-green-500 text-2xl"></i>
                <font-awesome-icon class="text-green-500" icon="check-circle" />
                <span class="ml-3 text-green-800 font-semibold">{{ booking.status }}</span>
              </div>
              <div
                class="bg-red-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'cancel'"
              >
                <font-awesome-icon class="text-red-500" icon="times-circle" />
                <span class="ml-3 text-red-800 font-semibold">Cancel</span>
              </div>
              <div
                class="bg-blue-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'check-in'"
              >
                <font-awesome-icon class="text-blue-500" icon="sign-in-alt" />
                <span class="ml-3 text-blue-800 font-semibold">Check-in</span>
              </div>
              <div
                class="bg-yellow-100 p-1 rounded-lg flex items-center justify-center text-center"
                v-if="booking.status == 'check-out'"
              >
                <font-awesome-icon class="text-yellow-500" icon="sign-out-alt" />
                <span class="ml-3 text-yellow-800 font-semibold">Check-out</span>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <button
                @click="editBook(booking)"
                class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
                    ></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <Teleport to="body">
    <RoomPick
      :show="openRoomPick"
      :availableRoom="availableRoom"
      @onSelect="onSelectRoom"
      @close="openRoomPick = !openRoomPick"
    ></RoomPick>
  </Teleport>

  <dialog :class="{ 'modal-open': showModal }" class="modal" v-if="viewBook">
    <div class="modal-box w-11/12 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">Booking Information</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h2 class="text-xl font-semibold mb-2">Booking Details</h2>
          <p><strong>Room:</strong> {{ viewBook?.expand?.room?.room_no }}</p>
          <p>
            <strong>Status:</strong>
            <span class="text-green-500" v-if="viewBook.status == 'active'">
              <font-awesome-icon class="text-green-500" icon="check-circle" />
              {{ viewBook.status }}
            </span>
            <span class="text-red-500" v-if="viewBook.status == 'cancel'">
              <span class="ml-3 text-red-800 font-semibold">Cancel</span>
              {{ viewBook.status }}
            </span>
            <span class="text-blue-500" v-if="viewBook.status == 'check-in'">
              <font-awesome-icon class="text-blue-500" icon="sign-in-alt" />{{ viewBook.status }}
            </span>
            <span class="text-yellow-500" v-if="viewBook.status == 'check-out'">
              <font-awesome-icon class="text-yellow-500" icon="sign-out-alt" />{{ viewBook.status }}
            </span>
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">Customer Details</h2>
          <p><strong>Name:</strong> {{ viewBook.cus_name }}</p>
          <p><strong>Phone No:</strong> {{ viewBook.cus_phone_no }}</p>
          <p><strong>ID Card:</strong> {{ viewBook.cus_id_card }}</p>
          <p><strong>Address:</strong> {{ viewBook.customer_address }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h2 class="text-xl font-semibold mb-2">Dates</h2>
          <p><strong>Check-in Date:</strong> {{ viewBook?.check_in_date }}</p>
          <p><strong>Check-out Date:</strong>{{ viewBook?.check_out_date }}</p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">Payment</h2>
          <p>
            <strong>Paid:</strong>
            <span class="text-green-500" v-if="viewBook.paid">Yes</span>
            <span class="text-red-500" v-if="!viewBook.paid">No</span>
          </p>
          <p>
            <strong>Amount:</strong>
            <a href="#" class="text-black-500">{{ viewBook.price }}</a>
          </p>
          <p class="flex flex-col">
            <strong>Payment Evidence:</strong>
            <a target="_blank" :href="fileUrl()" class="text-blue-500 underline overflow-auto">
              {{ viewBook.paid_evidance }}
            </a>
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Additional Notes</h2>
        <p>{{ viewBook.note }}</p>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button, it will close the modal -->
          <button class="btn" @click="showModal = !showModal">Close</button>
        </form>
      </div>
    </div>
  </dialog>

  <div
    ref="rightDrawerCreate"
    :class="[activeRightCreate ? '' : 'translate-x-full']"
    class="absolute inset-y-0 right-0 w-1/2 bg-white shadow-lg transform transition-transform ease-in-out duration-300"
  >
    <div class="flex items-center justify-between py-4 px-6 bg-white-500 h-[50px] border-b-[1px]">
      <h2 class="text-secondary text-lg font-semibold">Bookings</h2>
      <button
        id="closeRightDrawerBtn"
        class="text-secondary"
        @click="activeRightCreate = !activeRightCreate"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="h-[calc(100%-50px-100px)] overflow-y-scroll c-scrollbox">
      <div class="container mx-auto p-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">In</span>
          </label>
          <flat-pickr v-model="startDate" class="input input-bordered w-full" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Out</span>
          </label>
          <flat-pickr v-model="endDate" class="input input-bordered w-full" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Customer Name</span>
          </label>
          <input
            type="text"
            placeholder=""
            class="input input-bordered w-full"
            v-model="customerName"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder=""
            class="input input-bordered w-full"
            v-model="customerPhone"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <button class="btn btn-primary" @click="openSelectRoom()">Room</button>
          </label>
          <div class="flex flex-col gap-2">
            <div
              v-for="select of showRoomSelected"
              :key="select.room_no"
              class="flex items-center gap-2 p-2 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer text-sm"
            >
              <div>
                <h2 class="font-bold">{{ select.room_type }}</h2>
                <p class="text-gray-600">Room {{ select.room_no }}</p>
              </div>
              <div class="ml-auto">
                <p class="font-semibold text-gray-800">${{ select.price }}/night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-white absolute p-2 right-0 bottom-0 w-full border-t-[1px] justify-between">
      <button class="btn btn-error" @click="activeRightCreate = !activeRightCreate">Cancel</button>
      <button class="btn btn-primary" @click="createBook" :disabled="selectedRoom.length == 0">
        Create
      </button>
    </div>
  </div>

  <div
    ref="rightDrawerUpdate"
    v-if="selectedBook"
    :class="[activeRightUpdate ? '' : 'translate-x-full']"
    class="absolute inset-y-0 right-0 w-1/2 bg-white shadow-lg transform transition-transform ease-in-out duration-300"
  >
    <div class="flex items-center justify-between py-4 px-6 bg-white-500 h-[50px] border-b-[1px]">
      <h2 class="text-secondary text-lg font-semibold">
        Update Booking ({{ selectedBook?.cus_name }}) Room ({{ selectedBook?.expand.room.room_no }})
      </h2>
      <button
        id="closeRightDrawerBtn"
        class="text-secondary"
        @click="activeRightUpdate = !activeRightUpdate"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="h-[calc(100%-50px)] overflow-y-scroll c-scrollbox">
      <div class="container mx-auto p-4 overflow-y-scroll mb-18">
        <form class="space-y-4">
          <div class="flex">
            <div class="form-control">
              <label class="label" for="paid">
                <span class="label-text">Paid</span>
              </label>
              <input
                type="checkbox"
                id="paid"
                class="checkbox checkbox-primary"
                v-model="selectedBook.paid"
              />
            </div>
            <div class="form-control">
              <label class="label" for="paid">
                <span class="label-text font-bold">({{ selectedBook.price }})</span>
              </label>
            </div>
          </div>

          <div class="form-control">
            <label class="label" for="paid_evidance">
              <span class="label-text">Paid Evidence</span>
            </label>
            <input
              type="file"
              id="paid_evidance"
              class="file-input file-input-bordered file-input-primary w-full"
              @change="handleFileUpload($event)"
            />
          </div>
          <div class="form-control">
            <label class="label" for="note">
              <span class="label-text">Note</span>
            </label>
            <textarea
              id="note"
              class="textarea textarea-bordered w-full"
              v-model="selectedBook.note"
            ></textarea>
          </div>
          <div class="form-control">
            <label class="label" for="cus_id_card">
              <span class="label-text">Customer ID Card</span>
            </label>
            <input
              type="text"
              id="cus_id_card"
              class="input input-bordered w-full"
              v-model="selectedBook.cus_id_card"
            />
          </div>
          <div class="form-control">
            <label class="label" for="customer_address">
              <span class="label-text">Customer Address</span>
            </label>

            <textarea
              id="note"
              class="textarea textarea-bordered w-full"
              v-model="selectedBook.customer_address"
            ></textarea>
          </div>
          <div class="form-control">
            <label class="label" for="status">
              <span class="label-text">Status</span>
            </label>
            <select id="status" class="select select-bordered w-full" v-model="selectedBook.status">
              <option value="active">Active</option>
              <option value="cancel">Cancel</option>
              <option value="check-in">Check-in</option>
              <option value="check-out">Check-out</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div class="flex bg-white absolute right-0 bottom-0 p-3 w-full border-t-[1px] justify-between">
      <button class="btn btn-error" @click="activeRightUpdate = !activeRightUpdate">Cancel</button>
      <button class="btn btn-primary" @click="updateBook">UPDATE</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/services/pb'
import { computed, onMounted, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import type { RecordModel } from 'pocketbase'
import { DateTime, Interval } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import RoomPick from '@/components/RoomPick.vue'

const activeRightCreate = ref(false)
const activeRightUpdate = ref(false)
const bookings = ref<any>([])
const rightDrawerCreate = ref(null)
const startDate = ref(null)
const endDate = ref(null)
const selectedRoom = ref<string[]>([])
const customerName = ref(null)
const customerPhone = ref(null)
const availableRoom = ref<RecordModel[]>([])
const viewBook = ref<any>(null)

const showModal = ref(false)
const selectedBook = ref<any>(null)
const file = ref<any>(null)
const openRoomPick = ref<boolean>(false)
import _ from 'lodash'

const onSelectRoom = (rooms: string[]) => {
  selectedRoom.value = rooms
}

const handleFileUpload = async (event: any) => {
  selectedBook.value.file = event.target.files[0]
}

const formatDate = (s: string) => {
  var d = s.split(' ').join('T')
  return DateTime.fromISO(d).toFormat('yyyy-MM-dd')
}

const toDate = (s: string) => {
  var d = s.split(' ').join('T')
  return DateTime.fromISO(d).set({ hour: 0 })
}

const openSelectRoom = () => {
  selectedRoom.value = []
  openRoomPick.value = !openRoomPick.value
}

const showRoomSelected = computed(() => {
  return _.map(selectedRoom.value, (a: any) => {
    const roomDetails = _.find(availableRoom.value, (se) => se.id == a)
    return {
      room_type: roomDetails?.room_type,
      room_no: roomDetails?.room_no,
      price: roomDetails?.price
    }
  })
})

const dayCount = (f: string, t: string) => {
  var s = f.split(' ').join('T')
  var e = t.split(' ').join('T')
  var start = DateTime.fromISO(s)
  var end = DateTime.fromISO(e)
  const diff = start.diff(end, ['days'])
  return diff.days + 1
}

const fileUrl = () => {
  return `https://xayluedyhotel.com/pb/api/files/${viewBook.value.collectionId}/${viewBook.value.id}/${viewBook.value.paid_evidance}?token=`
}

const editBook = (book: any) => {
  selectedBook.value = book
  activeRightUpdate.value = !activeRightUpdate.value
}

const viewBookAt = (book: any) => {
  viewBook.value = book
  showModal.value = !showModal.value
}

const updateBook = async () => {
  const formData = new FormData()
  console.log(file.value)
  formData.append('paid', selectedBook.value.paid)
  formData.append('note', selectedBook.value.note)
  formData.append('cus_id_card', selectedBook.value.cus_id_card)
  formData.append('customer_address', selectedBook.value.customer_address)
  formData.append('status', selectedBook.value.status)

  if (selectedBook.value.file?.size > 0) {
    formData.append('paid_evidance', selectedBook.value.file)
  }

  await pb.collection('bookings').update(selectedBook?.value.id, formData)
  activeRightUpdate.value = !activeRightUpdate.value
  refresh()
}

const createBook = async () => {
  var price = 0
  if (startDate.value && endDate.value) {
    const roomPrice = availableRoom.value.find((i: any) => i.id == selectedRoom.value)
    price = dayCount(endDate.value, startDate.value) * roomPrice?.price
  }

  const data = {
    room: selectedRoom.value,
    cus_name: customerName.value,
    cus_phone_no: customerPhone.value,
    check_in_date: startDate.value,
    check_out_date: endDate.value,
    status: 'active',
    price: price
  }

  await pb.collection('bookings').create(data)
  activeRightCreate.value = !activeRightCreate.value
  refresh()

  selectedRoom.value = []
  customerName.value = null
  customerPhone.value = null
  startDate.value = null
  endDate.value = null
}

const openCreate = () => {
  activeRightCreate.value = !activeRightCreate.value
}

onClickOutside(rightDrawerCreate, (_) => {})

const refresh = async () => {
  getBookings()
}

const getBookings = async () => {
  const records = await pb.collection('bookings').getFullList({
    sort: '-created',
    expand: 'room',
    fields: '*'
  })

  console.log('records ', records)
  bookings.value = records
}

const getRooms = async () => {
  const rooms = await pb.collection('rooms').getFullList({
    sort: '-created',
    fields: '*'
  })

  const unavailableRoom = bookings.value.filter((book: any) => {
    var start = toDate(book.check_in_date)
    var end = toDate(book.check_out_date)
    var selectedStart = toDate(startDate.value ?? '')
    var selectedEnd = toDate(endDate.value ?? '')
    const interval = Interval.fromDateTimes(start, end)
    if (
      interval.contains(selectedStart) ||
      interval.contains(selectedEnd) ||
      interval.start?.equals(selectedStart) ||
      //interval.end?.equals(selectedStart) ||
      interval.start?.equals(selectedEnd) ||
      interval.end?.equals(selectedEnd)
    ) {
      return true
    }
    return false
  })

  availableRoom.value = rooms.filter((r) => {
    var isBook = unavailableRoom.some((un: any) => {
      return _.some(un.expand.room, (ex) => ex.id == r.id)
    })
    return !isBook
  })
}

onMounted(async () => {
  getBookings()
})

watch([startDate, endDate], () => {
  if ((startDate.value, endDate.value)) {
    getRooms()
  } else {
    availableRoom.value = []
  }
})
</script>
<style lang="scss">
.page-body {
  @apply mb-[10rem] bg-white;
}

.c-scrollbox {
  position: relative;
}

.c-scrollbox::before {
  content: '';
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: block;
  height: 5px;
  background: -webkit-linear-gradient(top, #fff, #fff 30%, rgba(255, 255, 255, 0));
  background: -moz-linear-gradient(top, #fff, #fff 30%, rgba(255, 255, 255, 0));
  background: linear-gradient(to bottom, #fff, #fff 30%, rgba(255, 255, 255, 0));
}

.c-scrollbox::after {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 1rem;
  background: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-8">Rooms by Floor</h1>

    <!-- Floor 1 -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Floor 1</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-2">
            <h3 class="text-xl font-semibold flex-grow">Room 101</h3>
            <span class="text-red-500"> <i class="fas fa-times-circle"></i> Unavailable </span>
          </div>
          <p class="text-gray-700">Description of Room 101.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-2">
            <h3 class="text-xl font-semibold flex-grow">Room 102</h3>
            <span class="text-yellow-500"> <i class="fas fa-broom"></i> Needs Cleaning </span>
          </div>
          <p class="text-gray-700">Description of Room 102.</p>
        </div>
        <!-- Add more rooms as needed -->
      </div>
    </div>

    <!-- Floor 2 -->
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Floor 2</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-2">
            <h3 class="text-xl font-semibold flex-grow">Room 201</h3>
            <span class="text-green-500"> <i class="fas fa-check-circle"></i> In Use </span>
          </div>
          <p class="text-gray-700">Description of Room 201.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-2">
            <h3 class="text-xl font-semibold flex-grow">Room 202</h3>
            <span class="text-yellow-500"> <i class="fas fa-broom"></i> Needs Cleaning </span>
          </div>
          <p class="text-gray-700">Description of Room 202.</p>
        </div>
        <!-- Add more rooms as needed -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

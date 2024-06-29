<template>
    <div class="w-full h-full bg-gray-200 text-black">
        <button class="btn btn-primary">Button</button> Hello {{ item }}
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://0.0.0.0:8080');
const item = ref()


onMounted(async () => {
    console.log('Test')
    const records = await pb.collection('rooms').getFullList({
    sort: '-created',
});
    item.value = records;
});


</script>
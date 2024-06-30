<template>
    <div class="w-full h-full  text-black">
        <button class="btn btn-primary">Button</button> Hello {{ item }}
        <button class="btn">
            Inbox
            
          </button>
       
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {pb} from '@/services/pb';

const item = ref()


onMounted(async () => {
    console.log('Test', pb.authStore.isValid)
    const records = await pb.collection('rooms').getList(1, 50,{
    sort: '-created',
    filter: 'room_no ~ 101'
});
    item.value = records;
});


</script>
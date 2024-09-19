<template>
    <base-layout page-title="All Memory">
           <memory-list :memories="memories" />
    </base-layout>
</template>

<script>
import {} from "@ionic/vue"
import BaseLayout from '@/components/base/BaseLayout.vue'
import MemoryList from '../components/memories/MemoryList.vue'

export default {
    components:{
        BaseLayout,
        MemoryList
    },
   computed:{
    memories(){
        return this.$store.getters.memories
    }
   }
}
</script>


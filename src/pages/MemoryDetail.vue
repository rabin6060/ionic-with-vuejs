<template>
    <base-layout :page-title="loadmemory ? loadmemory.title : 'loading...'" back-to-memory-page='/memories'>
        <h2 v-if="!loadmemory">There is no memory exist</h2>
        <memory-overview v-else :title="loadmemory.title" :image="loadmemory.image" :desc="loadmemory.desc" />
    </base-layout>
</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue'
import MemoryOverview from '../components/memories/MemoryOverview.vue'

export default {
    components:{
        BaseLayout,
        MemoryOverview
    },
    data(){
        return {
            currentId:this.$route.params.id || null,
        }
    },
    computed:{
        loadmemory(){
            return this.$store.getters.memory(this.currentId);
        }
    },
    watch: {
        '$route.params.id': {
            immediate: true, // Executes the handler when the component is mounted
            handler(newId) {
            this.currentId = newId;
            }
        }
    }
}
</script>
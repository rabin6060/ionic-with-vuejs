<template>
    <base-layout :pageTitle="'Add Memory'" :backToMemoryPage="'/memories'">
        <create-memory-form @submit="saveMemory"/>
    </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue'
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue'

export default {
    components:{
        BaseLayout,
        CreateMemoryForm
    },
    methods:{
        saveMemory(memoryData){
            this.$store.dispatch('addMemory',memoryData)
            this.$router.replace('/memories')
        }
        
    }
}
</script>
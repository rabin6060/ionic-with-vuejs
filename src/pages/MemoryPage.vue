<template>
    <base-layout page-title="All Memory">
            <template v-slot:actions-end>
                <ion-button size="large" router-link="/memories/add">
                    <ion-icon slot="icon-only" :icon="add"></ion-icon>
                </ion-button>
            </template>
           <memory-list :memories="memories" />
    </base-layout>
</template>

<script>
import {IonButton,IonIcon} from "@ionic/vue"
import BaseLayout from '@/components/base/BaseLayout.vue'
import MemoryList from '../components/memories/MemoryList.vue'
import {add} from "ionicons/icons"

export default {
    data(){
        return {add}
    },
    components:{
        BaseLayout,
        MemoryList,
        IonButton,
        IonIcon
    },
   computed:{
    memories(){
        return this.$store.getters.memories
    }
   }
}
</script>


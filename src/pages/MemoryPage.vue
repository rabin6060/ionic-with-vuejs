<template>
    <base-layout page-title="All Memory">
            <ion-list>
                <ion-item v-for="memory in memories" :key="memory.id" :router-link='`/memories/${memory.id}`'>
                 <ion-thumbnail slot="start">
                     <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                     
                 </ion-thumbnail>
                
                 
                 {{memory.title}}
                </ion-item>
                
            </ion-list>
    </base-layout>
</template>

<script>
import {IonList,IonItem,IonImg,IonThumbnail} from "@ionic/vue"
import BaseLayout from '@/components/base/BaseLayout.vue'
export default {
    components:{
        IonList,
        IonItem,
        BaseLayout,
        IonImg,
        IonThumbnail,
       
        
    },
   computed:{
    memories(){
        return this.$store.getters.memories
    }
   }
}
</script>


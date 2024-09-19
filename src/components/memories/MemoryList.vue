<template>
    <ion-list v-for="memory in memories" :key="memory.id">
        <!-- ion items component render from here -->
        <memory-items :memory="memory" />
    </ion-list>
</template>

<script>
import {IonList} from '@ionic/vue'
import MemoryItems from './MemoryItems.vue'
 export default {
    props:['memories'],
    components:{
        IonList,
        MemoryItems
    }
    
}
</script>
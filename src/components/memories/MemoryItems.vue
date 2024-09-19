<template>
    <ion-item :router-link='`/memories/${memory.id}`'>
                 <ion-thumbnail slot="start">
                     <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                     
                 </ion-thumbnail>
                
                 
                 {{memory.title}}
    </ion-item>
</template>
<script>
import {IonItem,IonThumbnail,IonImg} from '@ionic/vue'
export default {
    props:['memory'],
    components:{
            IonItem,
            IonImg,
            IonThumbnail
    }
}
</script>
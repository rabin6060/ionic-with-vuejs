<template>
    <ion-img :src = "image"  />
    <h2 class="ion-text-center">
        {{title}}
    </h2>
    <p class="ion-text-center">
     {{desc}}
    </p>
</template>

<script>
import {IonImg} from "@ionic/vue"
export default {
    props:["title","image","desc"],
  components:{
    IonImg,
 
  }
}
</script>
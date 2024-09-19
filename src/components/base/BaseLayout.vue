<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button :default-href="backToMemoryPage"></ion-back-button>
                </ion-buttons>
                
                <ion-title>
                    {{pageTitle}}
                </ion-title>
            </ion-toolbar>
            
        </ion-header>
        <ion-content>
            <slot/>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage,IonContent,IonToolbar,IonHeader,IonTitle,IonBackButton,IonButtons} from "@ionic/vue"
export default {
    props:['pageTitle','backToMemoryPage'],
    components:{
        IonPage,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonBackButton,
        IonButtons
    }
}
</script>


<template>
    <form class="ion-padding" @submit.prevent="handleSubmit">
                 <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input v-model="title" type="text" required />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image</ion-label>
                <ion-input v-model="image" type="url" required />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea v-model="desc" rows="5" required />
            </ion-item>
            <ion-button type="submit" expand="full">Save</ion-button>
        </ion-list>
        </form>
</template>

<script>
import {IonLabel,IonInput,IonTextarea,IonButton} from "@ionic/vue"
export default {
    emits:['submit'],
    data(){
        return {
            title:'',
            desc:'',
            image:''
        }
    },
    methods:{
        handleSubmit(){
            const memoryData = {
                title:this.title,
                desc:this.desc,
                image:this.image
            }
            this.$emit('submit',memoryData)
        }
    },
    components:{
        IonInput,
        IonLabel,
        IonTextarea,
        IonButton
    }
}
</script>
<template>
    <form class="ion-padding" @submit.prevent="handleSubmit">
                 <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input v-model="title" type="text" required />
            </ion-item>
            <ion-item>
                <ion-thumbnail slot="start">
                    <ion-img v-if="image" :src="image" alt="image" />
                    <ion-img else src="" />
                </ion-thumbnail>
                <ion-button type="button" fill="outline" @click="handleCamera">
                    <ion-icon slot="start" color="primary" :icon="camera" />
                    Take Photo
                </ion-button>
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
import {IonLabel,IonInput,IonTextarea,IonButton,IonIcon,IonThumbnail,IonImg} from "@ionic/vue"
import {camera} from "ionicons/icons"
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera"
export default {
    emits:['submit'],
    data(){
        return {
            title:'',
            desc:'',
            image:'',
            camera
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
        },
        async handleCamera(){
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri, // You can also use Base64 for the image result
                source: CameraSource.Camera, // You can use CameraSource.Prompt, .Photos, or .Camera
            });

            this.image = image.webPath; // Set the image path
                }
    },
    components:{
        IonInput,
        IonLabel,
        IonTextarea,
        IonButton,
        IonIcon,
        IonThumbnail,
        IonImg
    }
}
</script>
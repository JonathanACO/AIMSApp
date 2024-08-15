<script setup lang="ts">
import { IonContent } from '@ionic/vue';
import { IonPage } from '@ionic/vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth"

const auth = useAuthStore()
const router = useRouter()
const form = ref({
    email: '',
    password: ''
})

async function submit() {
    await auth.register(form)
    router.push({ name: 'home' })
}

</script>

<template>
    <IonPage>
        <IonContent>
            <form @submit.prevent="submit">
                <label>
                    <span>Email</span>
                    <input type="email" v-model="form.email"/>
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" v-model="form.password"/>
                </label>

                <button type="submit">Register</button>

            </form>
        </IonContent>
    </IonPage>
</template>
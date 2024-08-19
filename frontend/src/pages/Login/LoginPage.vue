<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth"
import azulImage from "@/assets/images/Azul.png"
import { authErrorHandler } from '@/helpers/authErrorsHandler';

const auth = useAuthStore()
const router = useRouter()
const isLoading = ref(false);

const form = ref({
    email: '',
    password: ''
})


const errorMessage = ref('');
const emailError = ref(false);
const passwordError = ref(false);

watch(form, (newForm) => {
    if (newForm.email && newForm.password) {
        errorMessage.value = '';
        emailError.value = false;
        passwordError.value = false;
    }
}, { deep: true });

async function submit() {

    try {
    isLoading.value = true;
    const result = await auth.login(form);
    if (result.errors) throw result;
    if (result.errors) return;
    router.push("/");
        } catch (error: any) {
    authErrorHandler(error);
        } finally {
    isLoading.value = false;
            }

    emailError.value = !form.value.email;
    passwordError.value = !form.value.password;

}

</script>

<template>
    <IonPage>
        <IonContent>
            <div class="flex flex-col w-full overflow-hidden relative min-h-screen backgroundcolor items-center justify-center g-0 px-4">
                <div class="justify-center items-center w-full card lg:flex max-w-md">
                    <div class="w-full card-body">
                        
                    
                        <form @submit.prevent="submit" class="m-8">
                            <div class="mb-4">
                                <label for="forUsername" class="block text-sm font-semibold mb-2 text-gray-600">Email</label>
                                <input type="email" placeholder="Correo Electrónico" id="forUsername" v-model="form.email" :class="{'border-red-500': emailError}"
                                    class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0"
                                    aria-describedby="hs-input-helper-text">
                            </div>
                            <div class="mb-6">
                                <label for="forPassword" class="block text-sm font-semibold mb-2 text-gray-600">Contraseña</label>
                                <input type="password" placeholder="Contraseña" id="forPassword" v-model="form.password" :class="{'border-red-500': passwordError}"
                                    class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-600 focus:ring-0"
                                    aria-describedby="hs-input-helper-text">
                            </div>
                            
                            <div class="grid my-6">
                                <button type="submit" class="btn py-[10px] text-base text-white font-medium hover:bg-blue-700">Iniciar Sesión</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
</template>

<style scoped>
/* Add any additional styles here if needed */
.backgroundcolor {
    background-color: #eff4ff;
}
.card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.btn {
    background-color: #3b82f6;
    border-radius: 0.375rem;
}
.custom-margin{
    margin-left: 124px;
}
template {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>

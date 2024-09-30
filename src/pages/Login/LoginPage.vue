<script setup lang="ts">
import { IonContent, IonPage, IonCard, IonButtons, IonTitle } from "@ionic/vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import VInput from "@/components/VInput.vue";
import { errorHandler } from "@/helpers/authErrorsHandler";
import VLoader from "@/components/VLoader.vue";

const auth = useAuthStore();
const router = useRouter();
const isLoading = ref(false);
const hasNameError = ref(false);
const hasPasswordError = ref(false);

const form = ref({
  name: "",
  password: "",
});

watch(
  form,
  (newForm) => {
    if (newForm.name && newForm.password) {
      hasNameError.value = false;
      hasPasswordError.value = false;
    }
  },
  { deep: true }
);

async function login() {
  try {
    isLoading.value = true;
    await auth.login(form.value);
    //TODO
    router.push({ name: "main-layout" });
  } catch (error) {
    errorHandler(error);
  } finally {
    isLoading.value = false;
  }

  hasNameError.value = !form.value.name;
  hasPasswordError.value = !form.value.password;
}
</script>

<template>
  <IonPage>
    <IonContent>
      <div
        class="flex flex-col w-full overflow-hidden relative min-h-screen items-center justify-center g-0 px-4 dfont"
      >
        <IonCard
          class="justify-center items-center w-full card lg:flex max-w-md border rounded-2xl border-blue-800 shadow-none bg-white"
        >
          <div class="w-full card-body center">
            <IonTitle
              class="font-semibold text-5xl pt-10 px-20 text-center text-blue-800"
              >AIMS</IonTitle
            >
            <form @submit.prevent="login()" class="m-8">
              <div class="mb-4">
                <VInput type="text" v-model="form.name" labelText="Nombre" />
              </div>
              <div class="mb-6">
                <VInput
                  type="password"
                  v-model="form.password"
                  labelText="Contraseña"
                  :hasEye="true"
                />
              </div>
              <div class="flex"></div>

              <div class="grid my-6">
                <IonButtons
                  type="submit"
                  class="flex justify-center py-3"
                  :disabled="isLoading"
                >
                  <button
                    class="w-full text-base text-white hover:bg-blue-700 mb-4 bg-blue-800 py-3 font-light rounded-2xl font-sans"
                  >
                    <template v-if="!isLoading"> Iniciar Sesión </template>
                    <VLoader v-show="isLoading" />
                  </button>
                </IonButtons>
              </div>
            </form>
          </div>
        </IonCard>
      </div>
    </IonContent>
  </IonPage>
</template>

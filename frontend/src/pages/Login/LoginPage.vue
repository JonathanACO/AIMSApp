<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import VLoader from "@/components/VLoader.vue";
import { authErrorHandler } from "@/helpers/authErrorsHandler";
import VInput from "@/components/VInput.vue";

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
    const result = await auth.login(form);
    if (result.errors) throw result;
    if (result.errors) return;
    router.push({ name: "home" });
  } catch (error: any) {
    authErrorHandler(error);
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
        <div
          class="justify-center items-center w-full card lg:flex max-w-md border"
        >
          <div class="w-full card-body">
            <img
              src="../../assets/images/rectangle.jpg"
              class="mx-auto py-3 mt-12"
            />
            <form @submit.prevent="login()" class="m-8">
              <div class="mb-4">
                <VInput type="text" v-model="form.name" labelText="Username" />
              </div>
              <div class="mb-6">
                <VInput
                  type="password"
                  v-model="form.password"
                  labelText="password"
                  :hasEye="true"
                />
              </div>
              <div class="flex">
                <input
                  type="checkbox"
                  class="shrink-0 mt-0.5 border-gray-200 rounded-[4px] text-blue-600 focus:ring-blue-500 btn"
                  id="hs-default-checkbox"
                  checked
                />
                <label
                  for="hs-default-checkbox"
                  class="text-sm text-gray-600 ms-3"
                  >Remember me</label
                >
              </div>

              <div class="grid my-6">
                <Button
                  type="submit"
                  class="btn py-[10px] text-base text-white font-medium hover:bg-blue-700 mb-4"
                  :disabled="isLoading"
                >
                  <template v-if="!isLoading"> Login </template>
                  <VLoader v-show="isLoading" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

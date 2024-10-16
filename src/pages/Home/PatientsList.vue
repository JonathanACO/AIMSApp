<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import PatientTable from "./components/PatientTable.vue";
import { PatientRepository } from "@/repositories/PatientRepository";
import { onMounted, ref } from "vue";
import { showErrorToast } from "@/helpers/swalFunctions";
import HeaderLoader from "@/components/HeaderLoader.vue";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();

const isLoading = ref(false);
const isError = ref(false);

const items = ref<
  {
    patient: number;
    room: string;
    lastAppointment: Date;
    isCompleted: boolean;
  }[]
>([]);

async function getPatients() {
  isLoading.value = true;
  try {
    const nurseId = authStore.nurse?.id;
    if (!nurseId) throw new Error("Cierre sesión y vuelva a intentarlo");
    items.value = await PatientRepository.getNursePatients(nurseId);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message == "Cierre sesión y vuelva a intentarlo"
    )
      showErrorToast(error.message);
    else showErrorToast("Ha ocurrido un error obteniendo los datos");
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => {
  await getPatients();
});
</script>
<template>
  <IonPage>
    <HeaderLoader v-if="isLoading" />
    <IonContent v-else class="ion-padding" :fullscreen="true">
      <div v-if="isError" class="text-center mt-5">
        <p class="font-medium text-lg">Deslice para recargar</p>
      </div>
      <div v-else>
        <div v-if="!items.length">
          <h1 class="title mb-6">Listado de pacientes</h1>
          <p class="text-center">No cuentas con pacientes actualmente</p>
        </div>
        <div v-else>
          <h1 v-if="items.length == 1" class="title mb-6 ml-1">
            Paciente actual
          </h1>
          <h1 v-else class="title mb-6 ml-1">Listado de pacientes</h1>
          <PatientTable :items="items" />
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

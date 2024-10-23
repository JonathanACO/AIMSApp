<script setup lang="ts">
import { IonButton, IonContent, IonPage } from "@ionic/vue";
import PersonalDetails from "./components/PersonalDetails.vue";
import PersonalBackground from "./components/PersonalBackground.vue";
import ConsciousnessState from "./components/ConsciousnessState.vue";
import OxygenationNeed from "./components/OxygenationNeed.vue";
import FeedingNeed from "./components/FeedingNeed.vue";
import EliminationNeed from "./components/EliminationNeed.vue";
import ThermoregulationNeed from "./components/ThermoregulationNeed.vue";
import HygienicNeed from "./components/HygienicNeed.vue";
import { ref } from "vue";
import {
  initialMedicalAssesment,
  MedicalAssesment,
} from "@/entities/MedicalAssesment";
import { useAppointmentStore } from "@/stores/useAppointmentStore";
import router from "@/router";

const appointmentStore = useAppointmentStore();
const medicalAssesment = ref<MedicalAssesment>({ ...initialMedicalAssesment });

function saveMedicalAssesment() {
  appointmentStore.medicalAssesment = medicalAssesment.value;
}

function handleContinue() {
  saveMedicalAssesment();
  router.push({ name: "suggestions" });
}
</script>
<template>
  <IonPage>
    <IonContent :fullscreen="true">
      <h1 class="font-medium text-2xl mx-4">
        Valoración Cardiovascular de Enfermería
      </h1>
      <PersonalDetails
        @update:datos-personales="medicalAssesment.datosPersonales = $event"
      />
      <PersonalBackground
        @update:antecedentes-personales="medicalAssesment.antecedentes = $event"
      />
      <ConsciousnessState
        @update:estado-de-conciencia="
          medicalAssesment.estadoDeConciencia = $event
        "
      />
      <OxygenationNeed
        @update:oxygenation-need="
          medicalAssesment.necesidadDeOxigenacion = $event
        "
      />
      <FeedingNeed
        @update:feeding-need="medicalAssesment.necesidadDeAlimentacion = $event"
      />
      <EliminationNeed
        @update:elimination-need="
          medicalAssesment.necesidadDeEliminacion = $event
        "
      />
      <ThermoregulationNeed
        @update:thermoregulation-need="
          medicalAssesment.necesidadDeTermorregulacion = $event
        "
      />
      <HygienicNeed
        @update:necesidad-de-higiene="
          medicalAssesment.necesidadDeHigiene = $event
        "
      />

      <div class="w-full flex justify-end mb-3">
        <IonButton
          @click="handleContinue"
          color="primary"
          fill="solid"
          shape="round"
        >
          Siguiente
        </IonButton>
      </div>
    </IonContent>
  </IonPage>
</template>
<style scoped>
* {
  content-visibility: auto;
}
</style>

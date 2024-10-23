<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
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

const medicalAssesment = ref<MedicalAssesment>({ ...initialMedicalAssesment });
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
      <OxygenationNeed />
      <FeedingNeed />
      <EliminationNeed />
      <ThermoregulationNeed />
      <HygienicNeed />
    </IonContent>
  </IonPage>
</template>
<style scoped>
* {
  content-visibility: auto;
}
</style>

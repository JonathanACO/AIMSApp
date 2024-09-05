<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import PatientTable from "./components/PatientTable.vue";

/* 
  1-Obtener los pacientes del enfermero
  2-Obtener la habitación del paciente/Obtener ultima consulta completada y meterlos en un objeto
*/
</script>
<template>
  <IonPage>
    <IonContent class="ion-padding" :fullscreen="true">
      <h1 class="title mb-10">Paciente actual</h1>
      <PatientTable />
    </IonContent>
  </IonPage>
</template>

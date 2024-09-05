<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import PatientTable from "./components/PatientTable.vue";
</script>
<template>
  <IonPage>
    <IonContent class="ion-padding" :fullscreen="true">
      <h1 class="title mb-10">Paciente actual</h1>
      <PatientTable />
    </IonContent>
  </IonPage>
</template>

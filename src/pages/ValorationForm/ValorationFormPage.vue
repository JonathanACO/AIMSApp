<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import PersonalDetails from "./components/PersonalDetails.vue";
import PersonalBackground from "./components/PersonalBackground.vue";
import ConsciousnessState from "./components/ConsciousnessState.vue";
import OxygenationNeed from "./components/OxygenationNeed.vue";
//TODO: juntar todos los objetos en uno( y hacer su entidad )
</script>
<template>
  <IonPage>
    <IonContent :fullscreen="true">
      <h1 class="font-medium text-2xl mx-4">
        Valoración Cardiovascular de Enfermería
      </h1>
      <PersonalDetails />
      <PersonalBackground />
      <ConsciousnessState />
      <OxygenationNeed />
    </IonContent>
  </IonPage>
</template>
<style scoped>
* {
  content-visibility: auto;
}
</style>

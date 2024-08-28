<script lang="ts" setup>
import { IonRouterOutlet, IonContent, IonPage } from "@ionic/vue";
</script>
<template>
  <IonPage>
    <div class="w-full h-16 bg-primary"></div>
    <IonContent>
      <IonRouterOutlet />
    </IonContent>
  </IonPage>
</template>

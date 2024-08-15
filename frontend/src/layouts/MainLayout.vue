<script lang="ts" setup>
import StaffDetails from "@/components/StaffDetails.vue";
import {
  IonRouterOutlet,
  IonContent,
  IonIcon,
  IonPage,
  IonHeader,
} from "@ionic/vue";
import { personCircleSharp } from "ionicons/icons";
import { ref } from "vue";

const areStaffDetailVisisble = ref(false);

function toggleStaffDetails() {
  areStaffDetailVisisble.value = !areStaffDetailVisisble.value;
}
</script>
<template>
  <IonPage>
    <IonContent>
      <IonHeader>
        <nav class="w-full h-16 bg-primary flex justify-center">
          <div
            class="h-full w-full max-w-5xl flex justify-between px-5 relative"
          >
            <div class="flex items-center">
              <img class="h-16" src="../assets/images/Blanco.png" alt="" />
              <h1>Hospital Angeles</h1>
            </div>
            <div class="flex items-center">
              <!-- TODO: poner nombre del enfermero -->
              <!-- TODO: al hacer click desplegar tarjeta con datos del enfermero -->
              <ion-icon
                @click="toggleStaffDetails()"
                class="h-12 w-12 text-white"
                :icon="personCircleSharp"
              ></ion-icon>
            </div>
            <div
              v-if="areStaffDetailVisisble"
              class="absolute right-0 top-full overflow-hidden"
            >
              <StaffDetails />
            </div>
          </div></nav
      ></IonHeader>

      <IonRouterOutlet /> </IonContent
  ></IonPage>
</template>

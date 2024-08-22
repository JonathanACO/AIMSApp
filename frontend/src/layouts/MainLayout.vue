<script lang="ts" setup>
import { Staff } from "@/entities/Staff";
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { chevronBackOutline, personCircleSharp } from "ionicons/icons";
import { ref } from "vue";

const nurse = ref<Staff>({
  id: 1,
  name: "J. Cano O.",
  sex: "Masculino",
  age: 19,
  shift: "Matutino",
  experience: "Nula",
  roomId: 1,
  createdAt: new Date(),
  modifiedAt: null,
});
</script>
<template>
  <IonMenu side="end" content-id="main-content">
    <IonHeader mode="md">
      <ion-toolbar>
        <IonMenuToggle class="flex items-center">
          <IonIcon
            class="h-8 w-8 text-black cursor-pointer"
            :icon="chevronBackOutline"
          ></IonIcon
        ></IonMenuToggle>
      </ion-toolbar>
    </IonHeader>
  </IonMenu>
  <ion-page id="main-content">
    <IonHeader mode="md">
      <IonToolbar color="primary">
        <IonTitle size="large">AIMS</IonTitle>
        <IonButtons slot="end">
          <IonMenuToggle class="flex items-center">
            <IonIcon
              class="h-12 w-12 text-white cursor-pointer"
              :icon="personCircleSharp"
            ></IonIcon>
          </IonMenuToggle>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonRouterOutlet />
  </ion-page>
</template>

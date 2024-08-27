<script lang="ts" setup>
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonContent,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { chevronBackOutline, personCircleSharp } from "ionicons/icons";
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
    <IonContent class="font-sans">
      <IonRouterOutlet />
    </IonContent>
  </ion-page>
</template>

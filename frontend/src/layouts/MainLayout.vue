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
import {
  chevronBackOutline,
  personCircleOutline,
  personCircleSharp,
} from "ionicons/icons";
</script>
<template>
  <IonMenu side="end" content-id="main-content">
    <IonHeader mode="md">
      <ion-toolbar color="light" class="h-16 flex items-center">
        <IonMenuToggle class="flex items-center">
          <IonIcon
            class="h-8 w-8 text-black cursor-pointer"
            :icon="chevronBackOutline"
          ></IonIcon
        ></IonMenuToggle>
      </ion-toolbar>
    </IonHeader>
    <IonContent color="light" class="relative">
      <div class="w-full flex flex-col text-center mt-10">
        <div>
          <IonIcon class="h-20 w-20" :icon="personCircleOutline"></IonIcon>
        </div>
        <div></div>
        <h1 class="-mt-2 text-xl">J. Cano O.</h1>
        <h2 class="text-xl mt-10 mb-3">Información</h2>
        <div class="flex w-full justify-center">
          <div class="text-left w-max">
            <div class="w-max my-1">
              <div class="w-36 inline-block font-semibold">ID:</div>
              <p class="inline-block">PF001</p>
            </div>
            <div class="w-max my-1">
              <div class="w-36 inline-block font-semibold">Turno:</div>
              <p class="inline-block">Matutino</p>
            </div>
            <div class="w-max my-1">
              <div class="w-36 inline-block font-semibold">Habitación:</div>
              <p class="inline-block">Cardiología</p>
            </div>
            <div class="w-max my-1">
              <div class="w-36 inline-block font-semibold">Paciente:</div>
              <p class="inline-block">P001</p>
            </div>
          </div>
        </div>
      </div>
      <IonButtons class="flex justify-center absolute bottom-0 inset-x-0 mb-10">
        <button class="text-white rounded-2xl bg-black py-3 px-16">
          Cerrar sesión
        </button>
      </IonButtons>
    </IonContent>
  </IonMenu>
  <ion-page id="main-content">
    <IonHeader mode="md">
      <IonToolbar class="h-16 flex items-center" color="primary">
        <IonTitle class="font-semibold text-2xl">AIMS</IonTitle>
        <IonButtons slot="end">
          <IonMenuToggle class="flex items-center">
            <IonIcon
              class="h-12 w-12 pr-2 text-white cursor-pointer"
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

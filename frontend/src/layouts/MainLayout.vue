<script lang="ts" setup>
import { ShiftEnum, RoleEnum, SexEnum, Staff } from "@/entities/Staff";
import { nameFormatter } from "@/helpers/nameFormatter";
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
import { ref } from "vue";

const nurse = ref<Staff>({
  id: 1,
  name: "Jonathan Andrés Cano Ornelas",
  password: "password",
  sex: SexEnum.masculino,
  ageInYears: 19,
  shift: ShiftEnum.morning,
  workExperienceInMonths: 10,
  role: RoleEnum.nurse,
  createdAt: new Date(),
  modifiedAt: new Date(),
  roomId: 1,
  patientId: 1,
});
const formattedName = nameFormatter(nurse.value.name);
</script>
<template>
  <IonMenu side="end" content-id="main-content">
    <IonHeader mode="md">
      <ion-toolbar color="light" class="h-16 flex items-center">
        <IonMenuToggle class="ml-2.5 flex items-center">
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
        <h1 class="-mt-2 text-xl mb-10">{{ formattedName }}</h1>
        <hr />
        <h2 class="text-xl font-semibold mt-8 mb-4">Información</h2>
        <div class="flex w-full justify-center">
          <div class="text-left w-max">
            <div class="w-max my-1.5">
              <div class="w-36 inline-block font-semibold">ID:</div>
              <p class="inline-block">{{ `PF00${nurse.id}` }}</p>
            </div>
            <div class="w-max my-1.5">
              <div class="w-36 inline-block font-semibold">Turno:</div>
              <p class="inline-block">{{ nurse.shift }}</p>
            </div>
            <div class="w-max my-1.5">
              <div class="w-36 inline-block font-semibold">Habitación:</div>
              <p class="inline-block">{{ nurse.roomId }}</p>
            </div>
            <div class="w-max my-1.5">
              <div class="w-36 inline-block font-semibold">Paciente:</div>
              <p class="inline-block">{{ `P00${nurse.patientId}` }}</p>
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
      <IonToolbar class="h-16 flex items-center pr-5" color="primary">
        <IonTitle class="font-semibold text-2xl">AIMS</IonTitle>
        <IonButtons slot="end">
          <h3 class="mr-2">{{ formattedName }}</h3>
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

<script lang="ts" setup>
import { generateNurseId } from "@/helpers/formatNurseId";
import { nameFormatter } from "@/helpers/nameFormatter";
import { useAuthStore } from "@/stores/useAuthStore";
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
  IonRefresher,
  IonRefresherContent,
} from "@ionic/vue";
import {
  chevronBackOutline,
  personCircleOutline,
  personCircleSharp,
} from "ionicons/icons";

const authStore = useAuthStore();

const nurse = authStore.nurse;

function handleRefresh() {
  location.reload();
}
</script>

<template>
  <IonPage>
    <IonMenu side="end" content-id="main-content">
      <IonHeader mode="md">
        <ion-toolbar color="light" class="h-16 flex items-center">
          <IonMenuToggle class="ml-2.5 flex w-max items-center">
            <IonIcon
              class="h-8 w-8 text-black cursor-pointer"
              :icon="chevronBackOutline"
            ></IonIcon
          ></IonMenuToggle>
        </ion-toolbar>
      </IonHeader>
      <IonContent color="light" class="relative font-sans">
        <div class="w-full flex flex-col text-center mt-10">
          <div>
            <IonIcon class="h-20 w-20" :icon="personCircleOutline"></IonIcon>
          </div>
          <h1 v-if="nurse" class="-mt-2 text-xl mb-10 font-semibold">
            {{ nameFormatter(nurse.name) }}
          </h1>
          <hr />
          <h2 class="text-xl font-bold mt-8 mb-4">Información</h2>
          <div class="flex w-full justify-center">
            <div v-if="nurse" class="text-left w-max">
              <div class="w-max my-1.5">
                <div class="w-36 inline-block font-bold">ID:</div>
                <p class="inline-block font-medium">
                  {{ generateNurseId(nurse.id.toString()) }}
                </p>
              </div>
              <div class="w-max my-1.5">
                <div class="w-36 inline-block font-bold">Turno:</div>
                <p class="inline-block font-medium">{{ nurse.workshift }}</p>
              </div>
            </div>
          </div>
        </div>
        <IonButtons
          class="flex justify-center absolute bottom-0 inset-x-0 mb-10"
        >
          <button
            class="text-white rounded-2xl bg-black py-3 px-16 font-semibold"
          >
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
            <h3 v-if="nurse" class="mr-2 -mb-0.5 font-medium">
              {{ nameFormatter(nurse.name) }}
            </h3>
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
        <IonRefresher slot="fixed" @ionRefresh="handleRefresh()">
          <IonRefresherContent />
        </IonRefresher>
        <IonRouterOutlet />
      </IonContent>
    </ion-page>
  </IonPage>
</template>

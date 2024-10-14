<script lang="ts" setup>
import { ShiftEnum, SexEnum, Nurse } from "@/entities/Nurse";
import { errorHandler } from "@/helpers/authErrorsHandler";
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
} from "@ionic/vue";
import {
  chevronBackOutline,
  personCircleOutline,
  personCircleSharp,
} from "ionicons/icons";
import { ref } from "vue";
import { useRouter } from "vue-router";

const nurse = ref<Nurse>({
  id: 1,
  name: "Jonathan Andrés Cano Ornelas",
  password: "password",
  sex: SexEnum.Masculino,
  ageInYears: 19,
  workshift: ShiftEnum.Morning,
  workExperienceInMonths: 10,
  createdAt: new Date(),
  modifiedAt: new Date(),
});
const formattedName = nameFormatter(nurse.value.name);
//TODO: Cambiar estos datos...
const auth = useAuthStore();
const router = useRouter();

async function logout() {
  try {
    await auth.logout();
  } catch (error) {
    errorHandler(error);
  } finally {
    router.push({ name: "login" });
  }
}
</script>
<template>
  <IonPage>
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
      <IonContent color="light" class="relative font-sans">
        <div class="w-full flex flex-col text-center mt-10">
          <div>
            <IonIcon class="h-20 w-20" :icon="personCircleOutline"></IonIcon>
          </div>
          <div></div>
          <h1 class="-mt-2 text-xl mb-10 font-semibold">{{ formattedName }}</h1>
          <hr />
          <h2 class="text-xl font-bold mt-8 mb-4">Información</h2>
          <div class="flex w-full justify-center">
            <div class="text-left w-max">
              <div class="w-max my-1.5">
                <div class="w-36 inline-block font-bold">ID:</div>
                <p class="inline-block font-medium">{{ `PF00${nurse.id}` }}</p>
              </div>
              <div class="w-max my-1.5">
                <div class="w-36 inline-block font-bold">Turno:</div>
                <p class="inline-block font-medium">{{ nurse.workshift }}</p>
              </div>
              <div class="w-max my-1.5">
                <div class="w-36 inline-block font-bold">Habitación:</div>
                <p class="inline-block font-medium">8</p>
              </div>
              <div class="w-max my-1.5">
                <div class="w-36 inline-block font-bold">Paciente:</div>
                <p class="inline-block font-medium">
                  {{ `P00 89` }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <IonButtons
          class="flex justify-center absolute bottom-0 inset-x-0 mb-10"
        >
          <form @submit.prevent="logout">
            <button
              type="submit"
              class="text-white rounded-2xl bg-black py-3 px-16 font-semibold"
            >
              Cerrar sesión
            </button>
          </form>
        </IonButtons>
      </IonContent>
    </IonMenu>
    <ion-page id="main-content">
      <IonHeader mode="md">
        <IonToolbar class="h-16 flex items-center pr-5" color="primary">
          <IonTitle class="font-semibold text-2xl">Software PCIE-CV</IonTitle>
          <IonButtons slot="end">
            <h3 class="mr-2 -mb-0.5 font-medium">{{ formattedName }}</h3>
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
  </IonPage>
</template>

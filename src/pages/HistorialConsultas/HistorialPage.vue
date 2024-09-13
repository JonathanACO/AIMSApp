<script lang="ts" setup>
import { ShiftEnum, RoleEnum, SexEnum, Staff } from "@/entities/Staff";
import { nameFormatter } from "@/helpers/nameFormatter";
import {
  IonLabel,
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
  heartOutline,
  bulbOutline,
  chevronBackOutline,
  clipboardOutline,
  personCircleOutline,
  personCircleSharp,
} from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
const appointments = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("/api/appointments");
    appointments.value = response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
});
</script>
<template>
  <IonMenu side="end" content-id="main-content">
    <IonHeader class="shadow-none" mode="md">
      <ion-toolbar color="light" class="h-16 flex items-cente">
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
              <p class="inline-block font-medium">{{ nurse.shift }}</p>
            </div>
            <div class="w-max my-1.5">
              <div class="w-36 inline-block font-bold">Habitación:</div>
              <p class="inline-block font-medium">{{ nurse.roomId }}</p>
            </div>
            <div class="w-max my-1.5">
              <div class="w-36 inline-block font-bold">Paciente:</div>
              <p class="inline-block font-medium">
                {{ `P00${nurse.patientId}` }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <IonButtons class="flex justify-center absolute bottom-0 inset-x-0 mb-10">
        <button
          class="text-white rounded-2xl bg-black py-3 px-16 font-semibold"
        >
          Cerrar sesión
        </button>
      </IonButtons>
    </IonContent>
  </IonMenu>
  <ion-page id="main-content">
    <IonHeader class="shadow-none" mode="md">
      <IonToolbar
        class="h-16 flex items-center pr-5 shadow-none"
        color="primary"
      >
        <IonTitle class="font-sans text-2xl">AIMS</IonTitle>
        <IonButtons class="font-sans" slot="end">
          <h3 class="mr-2 -mb-0.5">{{ formattedName }}</h3>
          <IonMenuToggle class="flex items-center">
            <IonIcon
              class="h-12 w-12 text-white cursor-pointer"
              :icon="personCircleSharp"
            ></IonIcon>
          </IonMenuToggle>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div class="px-10 py-10 font-sans">
        <div class="pb-10">
          <h1 class="font-sans text-2xl">Revisión de consulta anterior</h1>
        </div>
        <div class="px-10 py-5 items-center text-center bg-blue-50">
          <h3 class="text-xl">
            Fecha de la consulta: 9/11/2024<br />Enfermero(a):
            {{ formattedName }}
          </h3>
        </div>
        <Swiper>
          <SwiperSlide class="py-8 px-10 flex">
            <IonButtons class="flex flex-col items-center w-1/3 h-[160px]">
              <button
                class="w-24 h-24 rounded-full bg-sky-400 hover:bg-blue-400 flex items-center justify-center cursor-pointer"
              >
                <ion-icon
                  :icon="clipboardOutline"
                  class="text-white size-14"
                ></ion-icon>
              </button>
              <ion-label class="mt-2 text-sm text-center">Valoración</ion-label>
            </IonButtons>
            <IonButtons class="flex flex-col items-center w-1/3 h-[160px]">
              <button
                class="w-24 h-24 rounded-full bg-sky-400 hover:bg-blue-400 flex items-center justify-center cursor-pointer"
              >
                <ion-icon
                  :icon="bulbOutline"
                  class="text-white size-14"
                ></ion-icon>
              </button>
              <ion-label class="mt-2 text-sm text-center"
                >Sugerencias</ion-label
              >
            </IonButtons>
            <IonButtons class="flex flex-col items-center w-1/3 h-[160px]">
              <button
                class="w-24 h-24 rounded-full bg-sky-400 hover:bg-blue-400 flex items-center justify-center cursor-pointer"
              >
                <ion-icon
                  :icon="heartOutline"
                  class="text-white size-14"
                ></ion-icon>
              </button>
              <div class="h-[60px] flex items-start">
                <ion-label class="mt-2 text-sm text-center"
                  >Plan de cuidados individualizados</ion-label
                >
              </div>
            </IonButtons>
          </SwiperSlide>
        </Swiper>
      </div>
      <IonRouterOutlet />
    </IonContent>
  </ion-page>
</template>

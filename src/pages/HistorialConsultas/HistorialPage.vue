<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import { ShiftEnum, SexEnum, Nurse } from "@/entities/Nurse";
import { nameFormatter } from "@/helpers/nameFormatter";
import { errorHandler } from "@/helpers/authErrorsHandler";
import { AppointmentsRepository } from "@/repositories/appointmentRepository";
import { Appointment } from "@/entities/Appointment";
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
  IonSpinner,
} from "@ionic/vue";
import {
  chevronBackOutline,
  personCircleOutline,
  personCircleSharp,
  clipboardOutline,
  chatboxEllipsesOutline,
  heartOutline,
} from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
const appointments = ref<Appointment[]>([]);
const isLoading = ref(true);
const currentIndex = ref(0);

const loadAppointments = async () => {
  try {
    isLoading.value = true;
    const result = await AppointmentsRepository.getPatientAppointments();
    appointments.value = result;
  } catch (error) {
    errorHandler(error);
  } finally {
    isLoading.value = false;
  }
};

const handleSlideChange = (swiper: { realIndex: number }) => {
  currentIndex.value = swiper.realIndex;
};

onMounted(loadAppointments);

const formatDate = (date: string | Date) => {
  if (!date) return "Fecha no disponible";
  return new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
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
    <IonPage id="main-content">
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
          <div>
            <h1 class="font-sans text-2xl">Revisión de consulta anterior</h1>
          </div>
          <div
            v-show="isLoading"
            class="flex justify-center items-center h-full p-28"
          >
            <IonSpinner class="p-10" color="primary" />
          </div>

          <Swiper
            v-if="!isLoading"
            :modules="[Navigation, Pagination]"
            :a11y="true"
            :pagination="{
              type: 'bullets',
              el: '.swiper-pagination',
            }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            @slide-change="handleSlideChange"
            class="relative"
          >
            <SwiperSlide
              class="p-10 items-center text-center"
              v-for="appointment in appointments"
              :key="appointment.id"
            >
              <h3 class="text-xl py-4 bg-blue-50">
                Fecha de la consulta: {{ formatDate(appointment.createdAt)
                }}<br />Enfermero(a):
                {{ formattedName }}
              </h3>
              <div class="py-8 px-10 flex bg-white">
                <IonButtons class="flex flex-col items-center w-1/3 h-40">
                  <button
                    class="w-24 h-24 rounded-full bg-sky-300 hover:bg-blue-400 flex items-center justify-center cursor-pointer"
                  >
                    <IonIcon
                      :icon="clipboardOutline"
                      class="text-black size-14"
                    ></IonIcon>
                  </button>
                  <IonLabel class="mt-2 text-sm text-center"
                    >Valoración</IonLabel
                  >
                </IonButtons>
                <IonButtons class="flex flex-col items-center w-1/3 h-40">
                  <button
                    class="w-24 h-24 rounded-full bg-sky-300 hover:bg-blue-400 flex items-center justify-center cursor-pointer"
                  >
                    <IonIcon
                      :icon="chatboxEllipsesOutline"
                      class="text-black size-14"
                    ></IonIcon>
                  </button>
                  <IonLabel class="mt-2 text-sm text-center"
                    >Sugerencias</IonLabel
                  >
                </IonButtons>
                <IonButtons class="flex flex-col items-center w-1/3 h-40">
                  <button
                    class="w-24 h-24 rounded-full bg-sky-300 hover:bg-blue-400 flex items-center justify-center cursor-pointer"
                  >
                    <IonIcon
                      :icon="heartOutline"
                      class="text-black size-14"
                    ></IonIcon>
                  </button>
                  <div class="h-14 flex items-start">
                    <IonLabel class="mt-2 text-sm text-center"
                      >Plan de cuidados individualizados</IonLabel
                    >
                  </div>
                </IonButtons>
              </div>
              <div class="flex justify-between mt-4 px-2 text-lg">
                <span v-if="currentIndex > 0">
                  {{ formatDate(appointments[currentIndex - 1].createdAt) }}
                </span>

                <span v-else class="invisible">Placeholder</span>
                <span v-if="currentIndex < appointments.length - 1">
                  {{ formatDate(appointments[currentIndex + 1].createdAt) }}
                </span>

                <span v-else class="invisible">Placeholder</span>
              </div>
            </SwiperSlide>
            <div class="swiper-pagination !bottom-0 !top-auto"></div>

            <div class="swiper-button-prev !text-blue-800 !mt-36 !left-0"></div>
            <div
              class="swiper-button-next !text-blue-800 !mt-36 !right-0"
            ></div>
          </Swiper>
        </div>
        <IonRouterOutlet />
      </IonContent>
    </IonPage>
  </IonPage>
</template>

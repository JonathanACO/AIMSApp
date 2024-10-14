<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ShiftEnum, SexEnum, Nurse } from "@/entities/Nurse";
import { nameFormatter } from "@/helpers/nameFormatter";
import { errorHandler } from "@/helpers/authErrorsHandler";
import { AppointmentsRepository } from "@/repositories/AppointmentRepository";
import { Appointment } from "@/entities/Appointment";
import { IonButtons, IonIcon, IonRouterOutlet, IonSpinner } from "@ionic/vue";
import {
  clipboardOutline,
  chatboxEllipsesOutline,
  heartOutline,
} from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
const isLoading = ref(false);
const currentIndex = ref(0);

const fetchAppointments = async () => {
  try {
    isLoading.value = true;
    appointments.value = await AppointmentsRepository.getPatientAppointments();
  } catch (error) {
    errorHandler(error);
  } finally {
    isLoading.value = false;
  }
};

const handleSlideChange = (swiper: { realIndex: number }) => {
  currentIndex.value = swiper.realIndex;
};

onMounted(fetchAppointments);

const formatDate = (date: string | Date) => {
  if (!date) return "Fecha no disponible";
  return new Date(date).toLocaleString("es-MX", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
</script>
<template>
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
            <IonLabel class="mt-2 text-sm text-center">Valoración</IonLabel>
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
            <IonLabel class="mt-2 text-sm text-center">Sugerencias</IonLabel>
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
      <div class="swiper-button-next !text-blue-800 !mt-36 !right-0"></div>
    </Swiper>
  </div>
  <IonRouterOutlet />
</template>

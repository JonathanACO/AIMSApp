<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { IonButton, IonContent, IonIcon } from "@ionic/vue";
import {
  starOutline,
  chatboxEllipsesOutline,
  readerOutline,
} from "ionicons/icons";
import { PatientRespository } from "../../repositories/PatientRepository";
import { AppointmetsRespository } from "../../repositories/AppointmentsRepository";
import { RoomsRespository } from "@/repositories/RoomsRepository";
import { generateId } from "../../helpers/formatPatientId";
import { dateFormat } from "../../utilities/dateFormat";
import { type Patient } from "../../entities/Patient";
import { type Appointment } from "../../entities/Appointment";
import { type Room } from "@/entities/Room";
import { getDaysDifference } from "@/utilities/getDaysDifference";

const patientRepository = new PatientRespository();
const appointmentsRepository = new AppointmetsRespository();
const roomsRepository = new RoomsRespository();
const route = useRoute();
const patientId: number = Number(route.params.id);
const patientDetails = ref<Patient[] | null>(null);
const appointmentsHistory = ref<Appointment[] | null>(null);
const formattedPatientId: string = generateId(patientId.toString());
const roomDetails = ref<Room[] | null>(null);

async function getPatientDetails() {
  try {
    patientDetails.value = await patientRepository.getDetails(patientId ?? 0);
  } catch (e) {
    console.error(e);
  }
}

async function getAppointmentsHistory() {
  try {
    appointmentsHistory.value =
      await appointmentsRepository.getAppointmentsHistory(Number(patientId));
  } catch (e) {
    console.error(e);
  }
}

async function getRoomDetails() {
  try {
    if (!patientDetails.value) return;
    const roomId = patientDetails.value.find((value) => value.roomId)?.roomId;
    if (roomId) {
      roomDetails.value = await roomsRepository.find(roomId);
    }
  } catch (e) {
    console.error(e);
  }
}

onMounted(async () => {
  await getPatientDetails();
  await getAppointmentsHistory();
  await getRoomDetails();
});
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding" :fullscreen="true">
      <h1 class="title">Detalles de paciente</h1>
      <div class="grid grid-cols-2 gap-4 my-8">
        <section
          v-for="patientDetails in patientDetails"
          class="bg-secondary grid rounded-md min-h-64 p-3 text-lg"
        >
          <p class="text-center font-semibold text-2xl">
            {{ formattedPatientId }}
          </p>
          <span>
            <p class="font-semibold">Fecha de entrada</p>
            <p>
              {{ dateFormat(patientDetails.createdAt) }}
            </p>
          </span>
          <span v-for="room in roomDetails">
            <p class="font-semibold">Habitación:</p>
            <p>
              {{ room.name }}
            </p>
          </span>
          <span>
            <p class="font-semibold">Número de consultas:</p>
            <p>{{ appointmentsHistory?.length }}</p>
          </span>
          <span>
            <p class="font-semibold">Días en el hospital</p>
            <p>
              {{ getDaysDifference(patientDetails.createdAt) }}
            </p>
          </span>
        </section>
        <section class="h-full">
          <article class="bg-secondary rounded-md min-h-28 p-3">
            <p>
              Estamos realizando una consulta para recopilar tus opiniones. Tu
              participación es muy valiosa para ayudarnos a mejorar y tomar
              decisiones más acertadas.
            </p>
            <p>Cómo participar:</p>
            <ul class="ml-4 list-disc">
              <li class="list-item">Lee cada pregunta detenidamente.</li>
              <li class="list-item">Responde con sinceridad.</li>
              <li class="list-item">Tus respuestas son confidenciales.</li>
            </ul>
          </article>
          <div class="grid gap-4 mt-4">
            <button
              class="text-white bg-primary rounded-2xl p-4 hover:bg-tertiary transition-all"
            >
              Iniciar consulta
            </button>
            <button
              class="text-white rounded-2xl bg-black p-4 hover:bg-tertiary transition-all"
            >
              Ver última consulta
            </button>
          </div>
        </section>
      </div>
      <div class="">
        <h2 class="title">Historial de consultas</h2>
        <!-- TODO: Agregar v-for y lógica de mostrarlos -->
        <section
          v-if="appointmentsHistory"
          class="grid gap-4 mt-8 border overflow-y-auto"
        >
          <div
            v-for="appointments in appointmentsHistory"
            :key="appointments.id"
            class="border border-tertiary p-1 flex justify-between items-center"
          >
            <p class="font-semibold">
              {{ dateFormat(appointments.createdAt) }}
            </p>
            <div class="flex gap-x-1">
              <IonButton
                size="small"
                class="text-white"
                aria-label="valoracion"
              >
                <IonIcon slot="icon-only" :icon="starOutline"></IonIcon>
              </IonButton>
              <IonButton
                size="small"
                class="text-white"
                aria-label="sugerencias"
              >
                <IonIcon
                  slot="icon-only"
                  :icon="chatboxEllipsesOutline"
                ></IonIcon>
              </IonButton>
              <IonButton
                size="small"
                class="text-white"
                aria-label="plan-de-cuidados"
              >
                <IonIcon slot="icon-only" :icon="readerOutline"></IonIcon>
              </IonButton>
            </div>
          </div>
        </section>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
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
import { formatPatientId } from "../../helpers/formatPatientId";
import { formatDateToLong } from "../../utils/formatDates";
import { type Patient } from "../../entities/Patient";
import { type Appointment } from "../../entities/Appointment";
import { type Room } from "@/entities/Room";
import { getDaysDifference } from "@/utils/getDaysDifference";
import { showErrorToast } from "@/helpers/swalFunctions";

const patientRepository = new PatientRespository();
const appointmentsRepository = new AppointmetsRespository();
const roomsRepository = new RoomsRespository();
const route = useRoute();
const patientId = Number(route.params.id);
const patient = ref<Patient | null>(null);
const appointments = ref<Appointment[] | null>(null);
const patientIdentifier = formatPatientId(patientId.toString());
const room = ref<Room | null>(null);
const daysInHospital = computed(() => {
  if (!patient.value) return;
  const days = getDaysDifference(patient.value.createdAt);
  return `${days} días`;
});

async function getPatient() {
  if (!patientId) return null;
  try {
    patient.value = await patientRepository.getDetails(patientId);
  } catch (e) {
    showErrorToast("Error al obtener paciente.");
  }
}

async function getAppointmentsHistory() {
  try {
    appointments.value = await appointmentsRepository.getAppointmentsHistory(
      patientId
    );

    if (!appointments.value) return;
  } catch (e) {
    showErrorToast("Error al obtener consultas previas.");
  }
}

async function getRoom() {
  try {
    if (!patient.value) return;
    const roomId = patient.value.roomId;
    if (roomId) {
      room.value = await roomsRepository.find(roomId);
    }
  } catch (e) {
    showErrorToast("Error al obtener habitación.");
  }
}

onMounted(async () => {
  await getPatient();
  await getAppointmentsHistory();
  await getRoom();
});
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding" :fullscreen="true">
      <h1 class="title">Detalles de paciente</h1>
      <div class="grid grid-cols-2 gap-4 my-8">
        <section
          v-if="patient"
          class="bg-secondary grid rounded-md min-h-64 p-3 text-lg"
        >
          <p class="text-center font-semibold text-2xl">
            {{
              patientIdentifier ??
              "Error al obtener identificador del paciente."
            }}
          </p>
          <span>
            <p class="font-semibold">Fecha de entrada</p>
            <p>
              {{
                formatDateToLong(patient.createdAt) ??
                "Error al obtener fecha de entrada."
              }}
            </p>
          </span>
          <span v-if="room">
            <p class="font-semibold">Habitación:</p>
            <p>
              {{ room.name ?? "Error al obtener nombre de habitación." }}
            </p>
          </span>
          <span v-if="appointments">
            <p class="font-semibold">Número de consultas:</p>
            <p>
              {{ appointments?.length ?? "Error al obtener consultas" }}
            </p>
          </span>
          <span>
            <p class="font-semibold">Días en el hospital</p>
            <p>
              {{ daysInHospital ?? "Error al obtener días en hospital." }}
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
        <section
          v-if="appointments"
          class="grid gap-4 mt-8 border overflow-y-auto"
        >
          <div
            v-for="appointments in appointments"
            :key="appointments.id"
            class="border border-tertiary p-1 flex justify-between items-center"
          >
            <p class="font-semibold">
              {{ formatDateToLong(appointments.createdAt) }}
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

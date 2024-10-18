<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { IonContent, IonSpinner, IonPage } from "@ionic/vue";
import { RoomsRepository } from "@/repositories/RoomsRepository";
import { formatPatientId } from "../../helpers/formatPatientId";
import { formatDateToLong } from "../../utils/formatDates";
import { type Patient } from "../../entities/Patient";
import { type Appointment } from "../../entities/Appointment";
import { type Room } from "@/entities/Room";
import { getDaysDifference } from "@/utils/getDaysDifference";
import { showErrorToast } from "@/helpers/swalFunctions";
import { PatientsRepository } from "../../repositories/PatientsRepository";
import { AppointmentsRepository } from "../../repositories/AppointmentsRepository";
import PatientAppointmentsTable from "./components/PatientAppointmentsTable.vue";

const route = useRoute();
const isLoading = ref(false);

const patientId = Number(route.params.id);
const patient = ref<Patient | null>(null);
const patientIdentifier = formatPatientId(patientId.toString());

const appointments = ref<Appointment[]>([]);
const room = ref<Room | null>(null);
const daysInHospital = computed(() => {
  if (!patient.value) return;
  const days = getDaysDifference(patient.value.createdAt);
  return `${days} días`;
});

async function getPatient() {
  try {
    if (!patientId) return;
    isLoading.value = true;
    patient.value = await PatientsRepository.fetchById(patientId);
  } catch (e) {
    showErrorToast("Error al obtener paciente.");
  } finally {
    isLoading.value = false;
  }
}

async function getPatientAppointments() {
  try {
    if (!patient.value) return;
    isLoading.value = true;
    appointments.value = await AppointmentsRepository.fetchByPatientId(
      patient.value.id
    );
  } catch (e) {
    showErrorToast("Error al obtener consultas previas.");
  } finally {
    isLoading.value = false;
  }
}

async function getPatientRoom() {
  try {
    if (!patient.value) return;
    isLoading.value = true;
    const roomId = patient.value.roomId;
    room.value = await RoomsRepository.fetchById(roomId);
  } catch (e) {
    showErrorToast("Error al obtener habitación.");
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => {
  await getPatient();
  await getPatientAppointments();
  await getPatientRoom();
});
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding" :fullscreen="true">
      <div
        v-show="isLoading"
        class="flex justify-center items-center h-full p-28"
      >
        <IonSpinner class="p-10" color="primary" />
      </div>
      <h1 class="title">Detalles de paciente</h1>
      <div class="grid grid-cols-2 gap-4 my-8">
        <section
          v-if="patient"
          class="bg-secondary grid rounded-md min-h-64 p-3 text-lg"
        >
          <p class="text-start mb-2 font-semibold text-2xl">
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
            <p class="font-semibold">Habitación</p>
            <p>
              {{ room.name ?? "Error al obtener nombre de habitación." }}
            </p>
          </span>
          <span v-if="appointments">
            <p class="font-semibold">Número de consultas</p>
            <p>
              {{ appointments.length ?? "Error al obtener consultas" }}
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
          <div class="grid gap-4">
            <button
              class="text-white bg-primary rounded-lg p-4 hover:bg-tertiary transition-all"
            >
              Iniciar consulta
            </button>
            <button
              class="text-white rounded-lg bg-black p-4 hover:bg-tertiary transition-all"
            >
              Ver última consulta
            </button>
          </div>
        </section>
      </div>
      <div class="overflow-y-auto h-3/5">
        <h2 class="title mb-5">Historial de consultas</h2>
        <PatientAppointmentsTable :appointments="appointments" />
      </div>
    </IonContent>
  </IonPage>
</template>

<template>
  <IonPage>
    <ion-content>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide v-for="appointment in appointments" :key="appointment.id">
          <ion-card>
            <ion-card-header>
              <ion-card-title>{{ appointment.patient.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>
                Estado: {{ appointment.isSigned ? "Firmado" : "No firmado" }}
              </p>
              <p v-if="appointment.medicalAssesment">
                Evaluación médica: Disponible
              </p>
              <p v-if="appointment.indidividualizedCarePlan">
                Plan de cuidado individualizado: Disponible
              </p>
            </ion-card-content>
          </ion-card>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonPage,
} from "@ionic/vue";
import { api } from "../../../services/api";

interface Appointment {
  id: number;
  isSigned: boolean;
  createdAt: string;
  completedAt: string | null;
  patient: {
    name: string;
  };
  medicalAssesment: any;
  indidividualizedCarePlan: any;
}

export default defineComponent({
  name: "AppointmentCarousel",
  components: {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonPage,
  },
  props: {
    nurseId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const appointments = ref<Appointment[]>([]);
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };

    const fetchAppointments = async () => {
      try {
        const data = await api("GET", `/nurse/${props.nurseId}/appointments`);
        appointments.value = data;
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    onMounted(() => {
      fetchAppointments();
    });

    return {
      appointments,
      slideOpts,
    };
  },
});
</script>

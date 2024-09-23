<script setup lang="ts">
import { IonRow, IonCol, IonLabel, IonGrid, IonSpinner } from "@ionic/vue";
import { useRouter } from "vue-router";
import { generatePatientId } from "@/helpers/formatPatientId";

defineProps<{
  items: {
    patient: number;
    room: string;
    lastAppointment: Date;
    isCompleted: boolean;
  }[];
}>();

const router = useRouter();

const dateFormat = Intl.DateTimeFormat("es-MX", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
</script>
<template>
  <IonGrid>
    <ion-row class="border border-black p-2 rounded-t-md">
      <ion-col size="4">
        <ion-label class="text-stone-500">PACIENTE</ion-label>
      </ion-col>
      <ion-col size="3">
        <ion-label class="text-stone-500">HABITACIÓN</ion-label>
      </ion-col>
      <ion-col size="5">
        <ion-label class="text-stone-500">ULTIMA FECHA DE CONSULTA </ion-label>
      </ion-col>
    </ion-row>
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="
        router.push({
          name: 'patient-details',
          params: { property: item.patient },
        })
      "
    >
      <ion-row
        class="border border-black border-t-transparent p-2 cursor-pointer"
        :class="{ 'rounded-b-md': index === items.length - 1 }"
      >
        <ion-col size="4">
          <ion-label>{{
            generatePatientId(item.patient.toString())
          }}</ion-label>
        </ion-col>
        <ion-col size="3">
          <ion-label>{{ item.room }}</ion-label>
        </ion-col>
        <ion-col size="5">
          <div class="flex justify-between items-end max-w-[230px]">
            <ion-label
              >{{
                item.lastAppointment
                  ? dateFormat.format(new Date(item.lastAppointment))
                  : null
              }}
            </ion-label>
            <div
              v-if="!item.isCompleted && item.lastAppointment"
              class="text-xs text-blue-600 h-max pb-0.5"
            >
              En progreso
            </div>
          </div>
        </ion-col>
      </ion-row>
    </div>
  </IonGrid>
</template>

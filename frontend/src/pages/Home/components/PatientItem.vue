<script setup lang="ts">
import { IonRow, IonCol, IonLabel } from "@ionic/vue";

defineProps<{
  item: {
    patient: string;
    room: string;
    lastAppointment: Date;
  };
}>();
const dateFormat = Intl.DateTimeFormat("es-MX", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
</script>
<template>
  <ion-row class="border border-black border-t-transparent p-2">
    <ion-col size="4">
      <ion-label>{{ item.patient }}</ion-label>
    </ion-col>
    <ion-col size="3">
      <ion-label>{{ item.room }}</ion-label>
    </ion-col>
    <ion-col size="5">
      <ion-label>{{ dateFormat.format(item.lastAppointment) }}</ion-label>
    </ion-col>
  </ion-row>
</template>

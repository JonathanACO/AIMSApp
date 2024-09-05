<script setup lang="ts">
import { IonRow, IonCol, IonLabel, IonGrid } from "@ionic/vue";
import PatientItem from "./PatientItem.vue";

const items = <
  | {
      patient: string;
      room: string;
      lastAppointment: Date;
    }[]
>[];

const item = {
  patient: "P001",
  room: "Cardiología",
  lastAppointment: new Date(),
};

items.push(item);
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
    <div v-for="(item, index) in items" :key="index">
      <PatientItem
        :item="item"
        :class="{ 'rounded-b-md': index === items.length - 1 }"
      /></div
  ></IonGrid>
</template>

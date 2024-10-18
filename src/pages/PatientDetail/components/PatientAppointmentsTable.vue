<script setup lang="ts">
import { Appointment } from "../../../entities/Appointment";
import {
  clipboardOutline,
  chatbubbleOutline,
  heartOutline,
} from "ionicons/icons";
import { formatDateToLong } from "@/utils/formatDates";
import { IonButton, IonIcon } from "@ionic/vue";

defineProps<{
  appointments: Appointment[];
}>();
</script>

<template>
  <section v-if="appointments.length" class="grid gap-3 border overflow-y-auto">
    <div
      v-for="appointment in appointments"
      :key="appointment.id"
      class="border border-tertiary p-1 px-4 flex justify-between items-center"
    >
      <p class="font-medium">
        {{ formatDateToLong(appointment.createdAt) }}
      </p>
      <!-- TODO: Add routes push to the correspondent patient registries -->
      <div class="flex gap-x-1">
        <IonButton size="small" class="text-white" aria-label="valoracion">
          <IonIcon slot="icon-only" :icon="clipboardOutline"></IonIcon>
        </IonButton>
        <IonButton size="small" class="text-white" aria-label="sugerencias">
          <IonIcon slot="icon-only" :icon="chatbubbleOutline"></IonIcon>
        </IonButton>
        <IonButton
          size="small"
          class="text-white"
          aria-label="plan-de-cuidados"
        >
          <IonIcon slot="icon-only" :icon="heartOutline"></IonIcon>
        </IonButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonIcon } from "@ionic/vue";
import {
  starOutline,
  chatboxEllipsesOutline,
  readerOutline,
} from "ionicons/icons";
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding" :fullscreen="true">
      <h1 class="title">Detalles de paciente</h1>
      <div class="grid grid-cols-2 gap-4 my-8">
        <section class="bg-secondary rounded-md min-h-64 p-3">
          <p>Información completa del paciente, habitación, fechas, etc.</p>
        </section>
        <section class="h-full">
          <article class="bg-secondary rounded-md min-h-28 p-3">
            <p>Texto informativo para iniciar el proceso de consulta.</p>
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
        <section class="grid gap-4 mt-8 border overflow-y-auto">
          <div
            class="border border-tertiary p-1 flex justify-between items-center"
          >
            <p>INFO DE CONSULTA</p>
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
          <div
            class="border border-tertiary p-1 flex justify-between items-center"
          >
            <p>INFO DE CONSULTA</p>
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

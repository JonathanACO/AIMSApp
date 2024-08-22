<script setup lang="ts">
import { IonContent } from "@ionic/vue";
</script>

<template>
  <IonContent class="w-full">
    <h1 class="title">Detalles de paciente</h1>
    <div class="grid grid-cols-2 gap-4 my-8">
      <section class="bg-secondary rounded-md min-h-64">
        <p>Información completa del paciente, habitación, fechas, etc.</p>
      </section>
      <section class="h-full">
        <article class="bg-secondary rounded-md min-h-28">
          <p>Texto informativo para iniciar el proceso de consulta.</p>
        </article>
        <div class="grid gap-4 mt-4">
          <button class="text-white bg-primary rounded-2xl p-4">
            Iniciar consulta
          </button>
          <button class="text-white rounded-2xl bg-black p-4">
            Ver última consulta
          </button>
        </div>
      </section>
    </div>
    <div class="">
      <h2 class="title">Historial de consultas</h2>

      <!-- TODO: Agregar v-for y lógica de mostrarlos -->
      <section class="grid gap-4 mt-8">
        <div class="border border-tertiary p-3 flex justify-between">
          <p>INFO DE CONSULTA</p>
          <div class="flex">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
        <div class="border border-tertiary p-3 flex justify-between">
          <p>INFO DE CONSULTA</p>
          <div class="flex">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </section>
    </div>
  </IonContent>
</template>

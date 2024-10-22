<script setup lang="ts">
import { ref } from "vue";

const bradenScaleFactors = ref([
  {
    factor: "Percepción sensorial",
    options: [
      { value: "Completamente limitada", points: 1 },
      { value: "Muy limitada", points: 2 },
      { value: "Ligeramente limitada", points: 3 },
      { value: "Sin limitación", points: 4 },
    ],
  },
  {
    factor: "Exposición a la humedad",
    options: [
      { value: "Constante humedad", points: 1 },
      { value: "A menudo humedad", points: 2 },
      { value: "Ocasionalmente humedad", points: 3 },
      { value: "Raramente humedad", points: 4 },
    ],
  },
  {
    factor: "Actividad",
    options: [
      { value: "Encamado/a", points: 1 },
      { value: "En silla", points: 2 },
      { value: "Deambula ocasionalmente", points: 3 },
      { value: "Deambula frecuentemente", points: 4 },
    ],
  },
  {
    factor: "Movilidad",
    options: [
      { value: "Completamente inmóvil", points: 1 },
      { value: "Muy limitada", points: 2 },
      { value: "Ligeramente limitada", points: 3 },
      { value: "Sin limitaciones", points: 4 },
    ],
  },
  {
    factor: "Nutrición",
    options: [
      { value: "Muy pobre", points: 1 },
      { value: "Probablemente inadecuada", points: 2 },
      { value: "Adecuada", points: 3 },
      { value: "Excelente", points: 4 },
    ],
  },
  {
    factor: "Roce y peligro de lesiones",
    options: [
      { value: "Problema: Requiere moderada y máxima asistencia", points: 1 },
      {
        value:
          "Potencial problema: Se mueve muy débilmente o requiere de mínima asistencia",
        points: 2,
      },
      { value: "Sin problema: Deambula ocasionalmente", points: 3 },
    ],
  },
]);
</script>

<template>
  <div class="flex justify-center">
    <table class="border-collapse border border-black w-full table-fixed">
      <tr>
        <th colspan="5" class="bg-black text-white text-2xl font-medium p-1">
          Escala de valoración riesgo: Escala de Braden
        </th>
      </tr>
      <tr v-for="scaleSegment in bradenScaleFactors" :key="scaleSegment.factor">
        <th>{{ scaleSegment.factor }}</th>
        <td
          v-for="(option, index) in scaleSegment.options"
          :key="index"
          :colspan="scaleSegment.options.length < 4 && index === 1 ? 2 : 1"
        >
          {{ option.value }}
          {{ `(${option.points})` }}
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped lang="postcss">
tr,
th,
td {
  @apply border border-black text-center py-1;
}
</style>

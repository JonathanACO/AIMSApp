<script setup lang="ts">
import {ref} from "vue";

const emits = defineEmits<{
  (e: "update:puntuacionRiesgoUPP", value: { factor: string; opcion: { valor: string; puntuacion: number } }[]): void;
}>();

const bradenScaleFactors = ref([
  {
    factor: "Percepción sensorial",
    opciones: [
      {valor: "Completamente limitada", puntuacion: 1},
      {valor: "Muy limitada", puntuacion: 2},
      {valor: "Ligeramente limitada", puntuacion: 3},
      {valor: "Sin limitación", puntuacion: 4},
    ],
  },
  {
    factor: "Exposición a la humedad",
    opciones: [
      {valor: "Constante humedad", puntuacion: 1},
      {valor: "A menudo humedad", puntuacion: 2},
      {valor: "Ocasionalmente humedad", puntuacion: 3},
      {valor: "Raramente humedad", puntuacion: 4},
    ],
  },
  {
    factor: "Actividad",
    opciones: [
      {valor: "Encamado/a", puntuacion: 1},
      {valor: "En silla", puntuacion: 2},
      {valor: "Deambula ocasionalmente", puntuacion: 3},
      {valor: "Deambula frecuentemente", puntuacion: 4},
    ],
  },
  {
    factor: "Movilidad",
    opciones: [
      {valor: "Completamente inmóvil", puntuacion: 1},
      {valor: "Muy limitada", puntuacion: 2},
      {valor: "Ligeramente limitada", puntuacion: 3},
      {valor: "Sin limitaciones", puntuacion: 4},
    ],
  },
  {
    factor: "Nutrición",
    opciones: [
      {valor: "Muy pobre", puntuacion: 1},
      {valor: "Probablemente inadecuada", puntuacion: 2},
      {valor: "Adecuada", puntuacion: 3},
      {valor: "Excelente", puntuacion: 4},
    ],
  },
  {
    factor: "Roce y peligro de lesiones",
    opciones: [
      {valor: "Problema: Requiere moderada y máxima asistencia", puntuacion: 1},
      {
        valor:
            "Potencial problema: Se mueve muy débilmente o requiere de mínima asistencia",
        puntuacion: 2,
      },
      {valor: "Sin problema: Deambula ocasionalmente", puntuacion: 3},
    ],
  },
]);

const selectedBradenScaleOptions = ref<{
  factor: string;
  opcion: { valor: string; puntuacion: number };
}[]>([]);

function updateBradenScaleValue(factor: string, opcion: { valor: string; puntuacion: number }) {
  const index = selectedBradenScaleOptions.value.findIndex(
      (option) => option.factor === factor)

  if (index !== -1) {
    selectedBradenScaleOptions.value.splice(index, 1);
  } else {
    selectedBradenScaleOptions.value.push({factor, opcion});
  }

  emits("update:puntuacionRiesgoUPP", selectedBradenScaleOptions.value);
}
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
            v-for="(option, index) in scaleSegment.opciones"
            :key="index"
            :colspan="scaleSegment.opciones.length < 4 && index === 1 ? 2 : 1"
            :class="{
              'bg-blue-100 transition-colors duration-300 ease-in-out': selectedBradenScaleOptions.some(
                  (selectedOption) =>
                      selectedOption.factor === scaleSegment.factor &&
                      selectedOption.opcion.valor === option.valor
              ),

            }"
            @click="updateBradenScaleValue(scaleSegment.factor, option)"
        >
          {{ option.valor }}
          {{ `(${option.puntuacion})` }}
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

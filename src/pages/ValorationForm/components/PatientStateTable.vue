<script setup lang="ts">
import {ref} from "vue";

const emits = defineEmits<{
  (
      e: "update:puntuacionRiesgoCaidas",
      factors: { factor: string; puntuacion: number }[]
  ): void;
}>();

const patientStateValorationOptions = ref([
  {factor: "Paciente sin factores de riesgo evidentes", puntuacion: 1},
  {factor: "Problemas de idioma o socioculturales", puntuacion: 2},
  {factor: "Tratamiento farmacológico que implica riesgos", puntuacion: 2},
  {factor: "Limitación fisica", puntuacion: 2},
  {factor: "Estado mental alterado", puntuacion: 3},
]);

const selectedPatientStateValorationOptions = ref<{
  factor: string;
  puntuacion: number;
}[]>([]);

function updatePatientStateValue(factor: string, puntuacion: number) {
  const index = selectedPatientStateValorationOptions.value.findIndex(
      (option) => option.factor === factor
  );

  if (index !== -1) {
    selectedPatientStateValorationOptions.value.splice(index, 1);
  } else {
    selectedPatientStateValorationOptions.value.push({factor, puntuacion});
  }

  emits("update:puntuacionRiesgoCaidas", selectedPatientStateValorationOptions.value);
}
</script>

<template>
  <div class="flex justify-center">
    <table class="border-collapse border border-black w-3/4">
      <tr>
        <th colspan="3" class="bg-black text-white text-2xl font-medium p-1">
          Valoracion del estado del paciente
        </th>
      </tr>
      <tr>
        <th class="w-3/5">Factores de riesgo</th>
        <th class="w-2/5">Puntos</th>
      </tr>
      <tbody>
      <tr
          v-for="option in patientStateValorationOptions"
          :key="option.factor"
          @click="updatePatientStateValue(option.factor, option.puntuacion)"
          :class="{
            'bg-blue-100 transition-colors duration-300 ease-in-out': selectedPatientStateValorationOptions.some(
              (selectedOption) => selectedOption.factor === option.factor
            ),

          }"
      >
        <td>{{ option.factor }}</td>
        <td>{{ option.puntuacion }}</td>
      </tr>
      <tr>
        <th>Total</th>
        <th>
          {{
            patientStateValorationOptions.reduce(
                (acc, curr) => acc + curr.puntuacion,
                0
            )
          }}
        </th>
      </tr>
      </tbody>
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

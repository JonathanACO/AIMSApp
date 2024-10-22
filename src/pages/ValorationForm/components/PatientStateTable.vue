<script setup lang="ts">
import { ref } from "vue";

const patientStateValorationOptions = ref([
  { factor: "Paciente sin factores de riesgo evidentes", points: 1 },
  { factor: "Problemas de idioma o socioculturales", points: 2 },
  { factor: "Tratamiento farmacológico que implica riesgos", points: 2 },
  { factor: "Limitación fisica", points: 2 },
  { factor: "Estado mental alterado", points: 3 },
]);
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
        >
          <td>{{ option.factor }}</td>
          <td>{{ option.points }}</td>
        </tr>
        <tr>
          <th>Total</th>
          <th>
            {{
              patientStateValorationOptions.reduce(
                (acc, curr) => acc + curr.points,
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

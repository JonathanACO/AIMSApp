<script setup lang="ts">
import { ref } from "vue";

const faillingRiskScale = ref([
  {
    level: "Alto riesgo",
    points: "4-10",
    code: "Rojo",
  },
  {
    level: "Mediano riesgo",
    points: "2-3",
    code: "Amarillo",
  },
  { level: "Bajo riesgo", points: "0-1", code: "Verde" },
]);
</script>

<template>
  <div class="flex justify-center">
    <table class="border-collapse border border-black table-fixed w-3/4">
      <tr>
        <th colspan="3" class="bg-black text-white text-2xl font-medium p-1">
          Determinación del grado de riesgo de caídas
        </th>
      </tr>
      <tr>
        <th>Nivel</th>
        <th>Puntos</th>
        <th>Codigo</th>
      </tr>
      <tbody>
        <tr v-for="option in faillingRiskScale" :key="option.level">
          <td>{{ option.level }}</td>
          <td>{{ option.points }}</td>
          <td
            :class="{
              'bg-red-500': option.code === 'Rojo',
              'bg-yellow-500': option.code === 'Amarillo',
              'bg-green-500': option.code === 'Verde',
            }"
          >
            {{ option.code }}
          </td>
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

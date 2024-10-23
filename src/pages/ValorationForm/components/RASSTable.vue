<script setup lang="ts"></script>
<template>
  <div class="flex justify-center">
    <table class="border-collapse text-center">
      <tr>
        <th class="bg-black text-white font-medium text-xl" colspan="3">
          Escala de RASS
        </th>
      </tr>
      <tr>
        <td class="bg-red-600 text-white px-12">+4</td>
        <td class="bg-red-600 text-white">Combativo</td>
        <td class="py-4">
          Violento, representa un riesgo<br />
          inmediato para el personal
        </td>
      </tr>
      <tr>
        <td class="bg-amber-500 text-white">+3</td>
        <td class="bg-amber-500 text-white">Muy agitado</td>
        <td class="py-4">
          Agresivo, se intenta arrancar<br />
          tubos y catéteres
        </td>
      </tr>
      <tr>
        <td class="bg-yellow-400 text-white">+2</td>
        <td class="bg-yellow-400 text-white">Agitado</td>
        <td class="py-4">
          Se mueve de forma desordenada,<br />
          lucha con el respirador
        </td>
      </tr>
      <tr>
        <td class="bg-green-600 text-white">+1</td>
        <td class="bg-green-600 text-white">Inquieto</td>
        <td class="px-4 py-4">
          Ansioso, sin movimientos desordenados,<br />
          agresivos ni violentos
        </td>
      </tr>
      <tr class="text-white bg-sky-900">
        <td class="py-2">0</td>
        <td colspan="2">Despierto y tranquilo</td>
      </tr>
      <tr>
        <td class="bg-green-600 text-white">-1</td>
        <td class="bg-green-600 text-white">Somnolencia</td>
        <td class="py-4">
          No completamente alerta, se mantiene<br />
          despierto más de 10 segundos
        </td>
      </tr>
      <tr>
        <td class="bg-yellow-400 text-white">-2</td>
        <td class="bg-yellow-400 text-white">Sedación ligera</td>
        <td class="py-4">
          Despierta a la voz, mantiene contacto<br />
          visual menos de 10 segundos
        </td>
      </tr>
      <tr>
        <td class="bg-amber-500 text-white">-3</td>
        <td class="bg-amber-500 text-white px-4">Sedación moderada</td>
        <td class="py-4">
          Movimientos de apertura ocular<br />
          a la voz, no dirige la mirada
        </td>
      </tr>
      <tr>
        <td class="bg-red-600 text-white">-4</td>
        <td class="bg-red-600 text-white">Sedación profunda</td>
        <td class="py-4">
          Se mueve o abre lo ojos a<br />
          estimulación física, no a la voz
        </td>
      </tr>
      <tr>
        <td class="bg-red-800 text-white">-5</td>
        <td class="bg-red-800 text-white">No despertable</td>
        <td class="py-4">No responde a voz ni a estímulos</td>
      </tr>
    </table>
  </div>
</template>
<style scoped lang="postcss">
td,
tr {
  @apply border border-black;
}
</style>

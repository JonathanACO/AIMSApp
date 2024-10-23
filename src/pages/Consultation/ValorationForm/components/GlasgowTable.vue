<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  aberturaOcular: number | null;
  respuestaVerbal: number | null;
  respuestaMotoral: number | null;
}>();
const emits = defineEmits<{
  (e: "update:aberturaOcular", AO: number | null): void;
  (e: "update:respuestaVerbal", RV: number | null): void;
  (e: "update:respuestaMotoral", RM: number | null): void;
}>();

const traumaType = computed(() => {
  if (
    props.aberturaOcular == null ||
    props.respuestaVerbal == null ||
    props.respuestaMotoral == null
  )
    return 0;
  const suma =
    props.aberturaOcular + props.respuestaMotoral + props.respuestaVerbal;
  return suma;
});

function updateGlasgowValue(section: "AO" | "RV" | "RM", value: number) {
  if (section == "AO")
    emits("update:aberturaOcular", newValue(props.aberturaOcular, value));
  else if (section == "RV")
    emits("update:respuestaVerbal", newValue(props.respuestaVerbal, value));
  else
    emits("update:respuestaMotoral", newValue(props.respuestaMotoral, value));
}

function newValue(actualValue: number | null, value: number) {
  const newValue = ref<number | null>(value);
  if (actualValue === value) newValue.value = null;
  return newValue.value;
}

const aberturaOcularOpciones = [
  { respuesta: "Espontánea", valor: 4 },
  { respuesta: "Al estímulo verbal", valor: 3 },
  { respuesta: "Al estímulo doloroso", valor: 2 },
  { respuesta: "Ninguna", valor: 1 },
];

const respuestaVerbalOpciones = [
  { respuesta: "Orientada", valor: 5 },
  { respuesta: "Confusa", valor: 4 },
  { respuesta: "Palabras inadecuadas", valor: 3 },
  { respuesta: "Sonidos incomprensibles", valor: 2 },
  { respuesta: "Ninguna", valor: 1 },
];

const respuestaMotoralOpciones = [
  { respuesta: "Obedece órdenes", valor: 6 },
  { respuesta: "Localiza el dolor", valor: 5 },
  { respuesta: "Movimiento de retirada", valor: 4 },
  { respuesta: "Flexión hipertónica (decorticación)", valor: 3 },
  { respuesta: "Extensión hipertónica (descerebación)", valor: 2 },
  { respuesta: "Ninguna", valor: 1 },
];
</script>
<template>
  <div class="flex justify-center">
    <table class="border-collapse border border-black">
      <tr>
        <th colspan="3" class="bg-black text-white text-2xl font-medium">
          Escala de Glasgow
        </th>
      </tr>
      <tr>
        <th class="w-40">Parámetros</th>
        <th class="w-56">Respuesta observada</th>
        <th class="w-40">Puntuación</th>
      </tr>
      <tr>
        <th rowspan="5" class="bg-sky-100">Abertura ocular</th>
      </tr>
      <tr
        @click="updateGlasgowValue('AO', option.valor)"
        v-for="option in aberturaOcularOpciones"
        :key="option.valor"
        :class="aberturaOcular === option.valor ? 'bg-blue-100' : ''"
      >
        <td>{{ option.respuesta }}</td>
        <td>{{ option.valor }}</td>
      </tr>
      <tr>
        <th rowspan="6" class="bg-blue-300">Respuesta verbal</th>
      </tr>
      <tr
        @click="updateGlasgowValue('RV', option.valor)"
        v-for="option in respuestaVerbalOpciones"
        :key="option.valor"
        :class="respuestaVerbal === option.valor ? 'bg-blue-100' : ''"
      >
        <td>{{ option.respuesta }}</td>
        <td>{{ option.valor }}</td>
      </tr>
      <tr>
        <th rowspan="7" class="bg-sky-700">Respuesta motoral</th>
      </tr>
      <tr
        @click="updateGlasgowValue('RM', option.valor)"
        v-for="option in respuestaMotoralOpciones"
        :key="option.valor"
        :class="respuestaMotoral === option.valor ? 'bg-blue-100' : ''"
      >
        <td class="max-w-56">{{ option.respuesta }}</td>
        <td>{{ option.valor }}</td>
      </tr>

      <tr class="bg-black text-white">
        <th>Trauma leve</th>
        <th>Trauma moderado</th>
        <th>Trauma grave</th>
      </tr>
      <tr>
        <td :class="traumaType >= 13 ? 'bg-blue-100' : ''">13 - 15</td>
        <td :class="traumaType < 13 && traumaType >= 9 ? 'bg-blue-100' : ''">
          9 - 12
        </td>
        <td :class="traumaType < 9 && traumaType !== 0 ? 'bg-blue-100' : ''">
          3 - 8
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped lang="postcss">
tr,
th,
td {
  @apply border border-black text-center py-2;
}
</style>

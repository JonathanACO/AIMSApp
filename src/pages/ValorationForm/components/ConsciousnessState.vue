<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { computed, ref, watch } from "vue";
import GlasgowTable from "./GlasgowTable.vue";
import PupillaryReflex from "./PupillaryReflex.vue";
import RASSTable from "./RASSTable.vue";
import VSelect from "@/components/VSelect.vue";

const estadoDeConciencia = ref<{
  estado: "Consciente" | "Inconsciente" | "Sedado" | null;
  aberturaOcular: number | null;
  respuestaVerbal: number | null;
  respuestaMotoral: number | null;
  escalaDeRASS: number | null;
  reflejoPupilar: "Isocoria" | "Miosis" | "Midriasis" | "Anisocoria" | null;
  datosSubjetivoEstadoDeConciencia: string | null;
}>({
  estado: null,
  aberturaOcular: null,
  respuestaVerbal: null,
  respuestaMotoral: null,
  escalaDeRASS: null,
  reflejoPupilar: null,
  datosSubjetivoEstadoDeConciencia: null,
});

const datosSubjetivos = computed({
  get() {
    return hasSubjectiveData.value === false ? null : subjectiveData.value;
  },
  set(value) {
    subjectiveData.value = !value ? null : value;
  },
});

const hasSubjectiveData = ref<boolean | null>(null);
const subjectiveData = ref<string | null>(null);

const glasgowScaleTotal = computed(() => {
  if (
    estadoDeConciencia.value.aberturaOcular == null ||
    estadoDeConciencia.value.respuestaVerbal == null ||
    estadoDeConciencia.value.respuestaMotoral == null
  )
    return null;
  let suma =
    estadoDeConciencia.value.aberturaOcular +
    estadoDeConciencia.value.respuestaVerbal +
    estadoDeConciencia.value.respuestaMotoral;
  return suma > 12
    ? `${suma} - Trauma leve`
    : suma > 8
    ? `${suma} - Trauma moderado`
    : `${suma} - Trauma grave`;
});

const RASSScaleOptions = [
  { value: 4, label: "+4 - Combativo" },
  { value: 3, label: "+3 - Muy agitado" },
  { value: 2, label: "+2 - Agitado" },
  { value: 1, label: "+1 - Inquieto" },
  { value: 0, label: " 0 - Despierto y tranquilo" },
  { value: -1, label: "-1 - Somnolencia" },
  { value: -2, label: "-2 - Sedación ligera" },
  { value: -3, label: "-3 - Sedación moderada" },
  { value: -4, label: "-4 - Sedación profunda" },
  { value: -5, label: "-5 - No despertable" },
];

const pupillaryReflexOptions = [
  { value: "Isocoria", label: "Isocoria - Pupilas de igual tamaño" },
  { value: "Miosis", label: "Miosis - Contracción excesiva de pupilas" },
  {
    value: "Midriasis",
    label: "Midriasis - Dilatación excesiva de las pupilas",
  },
  { value: "Anisocoria", label: "Anisocoria - Pupilas de tamaños desiguales" },
];

watch(datosSubjetivos, (value) => {
  estadoDeConciencia.value.datosSubjetivoEstadoDeConciencia = value;
});
watch(estadoDeConciencia.value, (value) => {
  console.log(value);
});
</script>
<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">Estado de Conciencia</h1>
    <img
      class="h-8 w-8"
      src="../../../assets/icons/0a73802f3638b714c2f130f3f2b34e4c.png"
      alt=""
    />
  </div>
  <div class="mx-4 my-6">
    <div class="flex gap-x-12 mb-3">
      <VInputRadio
        v-model="estadoDeConciencia.estado"
        label="Consciente"
        value="Consciente"
        identifier="EstadoDeConciencia"
      />
      <VInputRadio
        v-model="estadoDeConciencia.estado"
        label="Inconsciente"
        value="Inconsciente"
        identifier="EstadoDeConciencia"
      />
      <VInputRadio
        v-model="estadoDeConciencia.estado"
        label="Sedado"
        value="Sedado"
        identifier="EstadoDeConciencia"
      />
    </div>
    <p class="text-stone-500 h-max mb-1.5">Escala de Glasgow</p>
    <p class="text-stone-500 h-max text-sm mb-1.5">
      Seleccione las opciones en la tabla
    </p>

    <GlasgowTable
      v-model:abertura-ocular="estadoDeConciencia.aberturaOcular"
      v-model:respuesta-verbal="estadoDeConciencia.respuestaVerbal"
      v-model:respuesta-motoral="estadoDeConciencia.respuestaMotoral"
      class="mb-3"
    />
    <div class="flex text-stone-500 items-center mb-3 w-56">
      <label class="min-w-max mr-3">Total</label>
      <div class="relative inline-flex items-center w-full">
        <div class="relative flex-grow">
          <input
            disabled
            :value="glasgowScaleTotal"
            type="text"
            class="w-full text-center p-1 h-9 outline-none border bg-white border-stone-500 rounded-md"
          />
        </div>
      </div>
    </div>
    <VSelect
      v-model="estadoDeConciencia.escalaDeRASS"
      :options="RASSScaleOptions"
      label="Escala de RASS"
      label-position="top"
      class="w-56 mb-3"
    />

    <RASSTable class="mb-3" />

    <VSelect
      v-model="estadoDeConciencia.reflejoPupilar"
      :options="pupillaryReflexOptions"
      label="Reflejo pupilar"
      label-position="top"
      class="mb-3 w-96"
    />
    <PupillaryReflex />

    <div class="flex items-end">
      <VInputText
        v-model="datosSubjetivos"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        class="w-full mr-8"
        :disabled="hasSubjectiveData === false"
      />
      <VInputRadio
        v-model="hasSubjectiveData"
        :value="false"
        label="N/A"
        identifier="datosSubjetivos"
      />
    </div>
  </div>
</template>

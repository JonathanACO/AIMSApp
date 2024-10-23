<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { computed, ref, watch } from "vue";

const emits = defineEmits<{
  (
    e: "update:thermoregulation-need",
    value: typeof necesidadDeTermorregulacion.value
  ): void;
}>();

const necesidadDeTermorregulacion = ref<{
  clasificacionTemperatura:
    | "Nomotermia"
    | "Hipotermia"
    | "Hipertermia"
    | "Fiebre"
    | null;
  temperatura: number | null;
  diaforesis: boolean | null;
  datosSubjetivosTermorregulacion: string | null;
}>({
  clasificacionTemperatura: null,
  temperatura: null,
  diaforesis: null,
  datosSubjetivosTermorregulacion: null,
});

const datoSubjetivo = ref<string | null>(null);
const tieneDatosSubjetivos = ref<false | null>(null);

const datosSubjetivosTermorregulacion = computed({
  get() {
    return !datoSubjetivo.value || tieneDatosSubjetivos.value == false
      ? null
      : datoSubjetivo.value;
  },
  set(value) {
    datoSubjetivo.value = !value ? null : value;
  },
});

watch(datosSubjetivosTermorregulacion, (value) => {
  necesidadDeTermorregulacion.value.datosSubjetivosTermorregulacion = value;
});

function updateThermoregulationNeed() {
  emits("update:thermoregulation-need", necesidadDeTermorregulacion.value);
}
</script>
<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">
      4. Necesidad de Termorregulación
    </h1>
    <img class="h-8 w-8" src="../../../assets/icons/thermoregulation.png" />
  </div>

  <div class="mx-4 my-6">
    <p class="text-stone-500 h-max mb-1.5">Temperatura</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="necesidadDeTermorregulacion.clasificacionTemperatura"
        value="Normotermia"
        label="Normotermia"
        class="w-max"
        @input="updateThermoregulationNeed"
      />
      <VInputRadio
        v-model="necesidadDeTermorregulacion.clasificacionTemperatura"
        value="Hipotermia"
        label="Hipotermia"
        class="w-max"
        @input="updateThermoregulationNeed"
      />
      <VInputRadio
        v-model="necesidadDeTermorregulacion.clasificacionTemperatura"
        value="Hipertermia"
        label="Hipertermia"
        class="w-max"
        @input="updateThermoregulationNeed"
      />
      <VInputRadio
        v-model="necesidadDeTermorregulacion.clasificacionTemperatura"
        value="Fiebre"
        label="Fiebre"
        class="w-max"
        @input="updateThermoregulationNeed"
      />
    </div>

    <VInputText
      v-model="necesidadDeTermorregulacion.temperatura"
      type="number"
      label="Cifra de T"
      label-position="side"
      after-text="°"
      class="w-52 mb-3"
      :center-text="true"
      @input="updateThermoregulationNeed"
    />

    <p class="text-stone-500 h-max min-w-max">Diaforesis</p>
    <div class="flex gap-x-10 flex-wrap w-56 mb-3">
      <VInputRadio
        v-model="necesidadDeTermorregulacion.diaforesis"
        :value="true"
        label="Sí"
        @input="updateThermoregulationNeed"
      />
      <VInputRadio
        v-model="necesidadDeTermorregulacion.diaforesis"
        :value="false"
        label="No"
        @input="updateThermoregulationNeed"
      />
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="datosSubjetivosTermorregulacion"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        @input="updateThermoregulationNeed"
      />
      <VInputRadio
        v-model="tieneDatosSubjetivos"
        :value="false"
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="updateThermoregulationNeed"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { ref } from "vue";
const variable = ref<any>(null);
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
        v-model="variable"
        value="Normotermia"
        label="Normotermia"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Hipotermia"
        label="Hipotermia"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Hipertermia"
        label="Hipertermia"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Fiebre"
        label="Fiebre"
        class="w-max"
      />
    </div>

    <VInputText
      v-model="variable"
      type="text"
      label="Cifra de T"
      label-position="side"
      after-text="°"
      class="w-52 mb-3"
      :center-text="true"
    />

    <p class="text-stone-500 h-max min-w-max">Diaforesis</p>
    <div class="flex gap-x-10 flex-wrap w-56 mb-3">
      <VInputRadio v-model="variable" :value="true" label="Sí" />
      <VInputRadio v-model="variable" :value="false" label="No" />
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="variable"
        type="text"
        label="Datos subjetivos"
        label-position="top"
      />
      <VInputRadio
        v-model="variable"
        value=""
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
      />
    </div>
  </div>
</template>

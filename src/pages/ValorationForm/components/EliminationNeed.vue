<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { ref } from "vue";
const variable = ref<any>(null);
</script>
<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">
      3. Necesidad de Eliminación
    </h1>
    <img class="h-8 w-8" src="../../../assets/icons/eliminationNeedIcon.png" />
  </div>
  <div class="mx-4 my-6">
    <p class="text-stone-500 h-max min-w-max mb-1.5">Patrón urinario</p>
    <VInputText
      v-model="variable"
      type="text"
      label="Frecuencias"
      label-position="side"
      after-text="veces al día"
      class="w-64 mb-3"
      :center-text="true"
    />
    <p class="text-stone-500 h-max min-w-max mb-1.5">
      Características normales
    </p>
    <div class="flex">
      <div class="w-2/3">
        <div class="grid grid-cols-3 mb-1.5">
          <VInputRadio v-model="variable" :value="true" label="Sí" />
          <VInputRadio v-model="variable" :value="false" label="No" />
        </div>
        <div class="grid grid-cols-3">
          <div>
            <VInputRadio v-model="variable" value="Oliguria" />
          </div>
          <div class="col-start-2">
            <VInputRadio v-model="variable" value="Anuria" class="mb-1.5" />
            <VInputRadio v-model="variable" value="Poliuria" class="mb-1.5" />
            <VInputRadio v-model="variable" value="Disuria" />
          </div>
          <div class="col-start-3">
            <VInputRadio v-model="variable" value="Nicturia" class="mb-1.5" />
            <VInputRadio v-model="variable" value="Tenesmo" class="mb-1.5" />
            <VInputRadio v-model="variable" value="Incontinencia" />
          </div>
        </div>
      </div>
      <VInputText
        v-model="variable"
        type="text"
        label="Características de la orina"
        label-position="top"
        class="w-1/3"
      />
    </div>
    <p class="text-stone-500 h-max min-w-max mb-1.5">Coloración</p>
    <div class="mb-3">
      <div class="grid grid-cols-5">
        <VInputRadio v-model="variable" value="Normal" />
        <VInputRadio v-model="variable" value="Anormal" />
      </div>
      <div class="grid grid-cols-5">
        <div class="col-start-2 flex gap-x-10 col-span-4 my-1.5">
          <VInputRadio
            v-model="variable"
            value="Hematurica"
            label="Hematúrica"
          />
          <VInputRadio v-model="variable" value="Colurica" label="Colúrica" />
          <VInputRadio v-model="variable" value="Otro" />
        </div>
      </div>
      <div class="flex justify-end">
        <VInputText
          v-model="variable"
          type="text"
          label="Especificar"
          label-position="side"
        />
      </div>
    </div>
    <div class="flex mb-3">
      <div class="flex items-center h-9 mr-10">
        <p class="text-stone-500 h-max min-w-max">Sonda vesical</p>
      </div>
      <div class="flex gap-x-28 flex-wrap">
        <VInputRadio v-model="variable" :value="true" label="Sí" />
        <VInputRadio v-model="variable" :value="false" label="No" />
        <div class="w-full">
          <VInputText
            v-model="variable"
            type="number"
            label="Calibre"
            label-position="side"
            after-text="Fr"
            class="w-36 my-3"
            :center-text="true"
          />
          <VInputText
            v-model="variable"
            type="number"
            label="Llenada con"
            label-position="side"
            after-text="ml H2O"
            class="w-56"
          />
        </div>
      </div>
    </div>
    <VInputText
      v-model="variable"
      type="date"
      :center-text="true"
      label="Fecha de colocación"
      label-position="side"
      class="w-max mb-3"
    />
    <div class="flex gap-x-10 mb-3">
      <div class="flex items-center h-9">
        <p class="text-stone-500 h-max min-w-max">Uso de diuréticos</p>
      </div>
      <div class="flex gap-x-10 flex-wrap w-56">
        <VInputRadio v-model="variable" :value="true" label="Sí" />
        <VInputRadio v-model="variable" :value="false" label="No" />
        <VInputText
          v-model="variable"
          type="text"
          label="Especificar"
          label-position="side"
          class="w-56 mt-3"
        />
      </div>
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">Apoyo parcial</p>
    <div class="flex flex-wrap gap-x-10 gap-y-3">
      <VInputRadio
        v-model="variable"
        value="Acompanamiento al sanitario"
        label="Acompañamiento al sanitario"
      />
      <VInputRadio
        v-model="variable"
        value="Proporcionar comodo/orinal"
        label="Proporcionar cómodo/orinal"
        class="mr-12"
      />
      <VInputRadio
        v-model="variable"
        value="Cambio de panal"
        label="Cambio de pañal"
      />
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">Apoyo total</p>
    <div class="flex flex-wrap gap-x-10 gap-y-3">
      <VInputRadio v-model="variable" :value="true" label="Sí" />
      <VInputRadio v-model="variable" :value="false" label="No" />
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">
      Tratamiento Sustitutivo Renal
    </p>
    <div class="flex">
      <div class="w-2/3">
        <div class="grid grid-cols-2 mb-1.5">
          <VInputRadio
            v-model="variable"
            :value="true"
            label="Sí"
            class="mb-1.5"
          />
          <VInputRadio v-model="variable" :value="false" label="No" />
          <div>
            <VInputRadio
              v-model="variable"
              value="Diálisis peritoneal"
              label="Diálisis peritoneal"
              class="mb-1.5"
            />
            <VInputRadio
              v-model="variable"
              value="Hemodiálisis"
              label="Hemodiálisis"
              class="mb-1.5"
            />
          </div>
        </div>
      </div>
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

    <p class="text-stone-500 h-max min-w-max mb-1.5">Patrón intestinal</p>
    <VInputText
      v-model="variable"
      type="text"
      label="Frecuencias"
      label-position="side"
      after-text="veces al día"
      class="w-64 mb-3"
      :center-text="true"
    />

    <p class="text-stone-500 h-max min-w-max mb-1.5">Características</p>
    <div class="grid grid-cols-3 mb-1.5">
      <VInputRadio v-model="variable" value="Normal" label="Normal" />
      <VInputRadio v-model="variable" value="Anormal" label="Anormal" />
    </div>
    <div class="grid grid-cols-3">
      <div class="col-start-2">
        <VInputRadio v-model="variable" value="Estreñimiento" class="mb-1.5" />
        <VInputRadio v-model="variable" value="Diarrea" class="mb-1.5" />
        <VInputRadio v-model="variable" value="Incontinencia" />
      </div>
    </div>

    <p class="text-stone-500 h-max mb-1.5">Características</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="variable"
        value="Acolia"
        label="Acolia"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Melena"
        label="Melena"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Mucoide"
        label="Mucoide"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Pastosa"
        label="Pastosa"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Fétida"
        label="Fétida"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Líquida con sangre fresca"
        label="Líquida con sangre fresca"
        class="w-max"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Suplencia intestinal</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="variable"
        value="Sin suplencia"
        label="Sin suplencia"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Suplencia parcial"
        label="Suplencia parcial"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Suplencia total"
        label="Suplencia total"
        class="w-max"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Ostomías</p>
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="variable"
      type="text"
      label="Especificar"
      label-position="side"
    />

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

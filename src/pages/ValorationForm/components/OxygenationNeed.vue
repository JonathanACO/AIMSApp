<script setup lang="ts">
import CardiovascularArea from "./CardiovascularArea.vue";
import PulmonaryArea from "./PulmonaryArea.vue";
//TODO: juntar los objetos de los componentes
</script>
<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">Necesidad de Oxigenación</h1>
    <img
      class="h-8 w-8"
      src="../../../assets/icons/oxygenationNeedIcon.png"
      alt=""
    />
  </div>
  <div class="mx-4 my-6">
    <PulmonaryArea />
    <CardiovascularArea />
  </div>
</template>

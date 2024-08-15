<script setup lang="ts">
import { Staff } from "@/entities/Staff";
import { ref } from "vue";

const user = ref<Staff>({
  id: 2,
  nombre: "Jonathan Cano",
  correo: "jonathan@gmail.com",
  telefono: null,
  habitacionId: 1,
  rol: "Enfermero",
});
</script>
<template>
  <div class="bg-gray-50 rounded-sm mr-5">
    <h2 class="text-gray-600 text-center bg-gray-100 py-1">
      Información de usuario
    </h2>
    <div class="p-3 text-sm flex flex-col w-max">
      <div class="flex">
        <div class="text-gray-500">ID:</div>
        <p class="pb-1 px-2 inline-block text-black">{{ user.id }}</p>
      </div>

      <div class="w-20 text-gray-500">Nombre:</div>
      <p class="pb-1 px-2 inline-block text-black">{{ user.nombre }}</p>
      <div class="w-20 text-gray-500">Correo:</div>
      <p class="pb-1 px-2 inline-block text-black">{{ user.correo }}</p>
      <div v-if="user.telefono">
        <div class="w-20 text-gray-500">Teléfono:</div>
        <p class="pb-1 px-2 inline-block text-black">{{ user.telefono }}</p>
      </div>
      <div v-if="user.habitacionId">
        <div class="w-20 text-gray-500">Habitación:</div>
        <p class="pb-1 px-2 inline-block text-black">{{ user.habitacionId }}</p>
      </div>
      <div class="flex">
        <div class="text-gray-500">Rol:</div>
        <p class="capitalize px-2 inline-block text-black">{{ user.rol }}</p>
      </div>
    </div>
    <button @click="" class="w-full bg-green-700 text-white py-1">
      Cerrar Sesión
    </button>
  </div>
</template>

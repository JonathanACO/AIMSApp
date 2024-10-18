<script setup lang="ts"></script>
<template>
  <div class="flex flex-col w-full items-center">
    <h3 class="font-semibold">Reflejo pupilar</h3>
    <table class="text-left border-collapse">
      <tr>
        <td class="pr-2 flex items-start w-64">
          <p>
            <label class="font-medium">Isocoria</label><br />Pupilas de igual
            tamaño
          </p>
        </td>
        <td class="h-20 w-56">
          <img
            class="max-w-56"
            src="../../../assets/images/Isocoria.png"
            alt=""
          />
        </td>
        <td class="pl-2"><p>Normales de 2 mm de diámetro</p></td>
      </tr>
      <tr>
        <td class="pr-2 flex items-start w-64">
          <p>
            <label class="font-medium">Miosis</label><br />Contracción excesiva
            de pupilas
          </p>
        </td>
        <td class="h-20 w-56">
          <img
            class="max-w-56"
            src="../../../assets/images/Miosis.png"
            alt=""
          />
        </td>
        <td class="pl-2">Intoxicación por insecticida y drogas</td>
      </tr>
      <tr>
        <td class="pr-2 flex items-start">
          <p>
            <label class="font-medium">Midriasis</label><br />Dilatación
            excesiva de las pupilas
          </p>
        </td>
        <td class="h-20 w-56">
          <img
            class="max-w-56"
            src="../../../assets/images/Midriasis.png"
            alt=""
          />
        </td>
        <td class="pl-2">
          <p>Falta de oxígeno<br />Intoxicación por alcohol industrial</p>
        </td>
      </tr>
      <tr>
        <td class="pr-2 flex items-start">
          <p>
            <label class="font-medium">Anisocoria</label><br />Pupilas de
            tamaños desiguales
          </p>
        </td>
        <td class="h-20 w-56">
          <img
            class="max-w-56"
            src="../../../assets/images/Anisocoria.png"
            alt=""
          />
        </td>
        <td class="pl-2">
          <p>
            Daño cerebral<br />
            TCE o ECV
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

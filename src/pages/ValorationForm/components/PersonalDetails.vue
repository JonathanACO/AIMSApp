<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import VSelect from "@/components/VSelect.vue";
import {computed, ref, watch} from "vue";

const emits = defineEmits<
    { (e: "update:datosPersonales", value: typeof datosPersonales.value): void }
>();

const datosPersonales = ref<{
  edad: number | null;
  sexo: "Masculino" | "Femenino" | null;
  tallaEnCm: number | null;
  pesoEnKg: number | null;
  diagnosticoMedico: string | null;
  datoSocial: "Vive solo" | "Con familia" | null;
  datoSocialEspecificado: string | null;
  escolaridad: string | null;
  religion: string | null;
  estadoCivil:
      | "Soltero"
      | "Casado"
      | "Viudo"
      | "Separado"
      | "Unión libre"
      | "Sin datos"
      | null;
}>({
  edad: null,
  sexo: null,
  tallaEnCm: null,
  pesoEnKg: null,
  diagnosticoMedico: null,
  datoSocial: null,
  datoSocialEspecificado: null,
  escolaridad: null,
  religion: null,
  estadoCivil: null,
});

const datosSocialesEspecificosInternal = ref<string | null>(null);

const civilStatementOptions = [
  "Soltero",
  "Casado",
  "Viudo",
  "Separado",
  "Unión libre",
  "Sin datos",
];
const sexOptions = ["Masculino", "Femenino"];
const escolaridadOpciones = [
  "Primaria",
  "Secundaria",
  "Bachillerato",
  "Licenciatura",
  "Postgrado",
];

const datosSocialesEspecificos = computed({
  get() {
    return datosPersonales.value.datoSocial === "Con familia"
        ? datosSocialesEspecificosInternal.value
        : null;
  },
  set(value) {
    datosSocialesEspecificosInternal.value = !value ? null : value;
  },
});

watch(datosSocialesEspecificos, (value) => {
  datosPersonales.value.datoSocialEspecificado = value;
});

function emitDatosPersonales() {
  emits("update:datosPersonales", datosPersonales.value);
}
</script>

<template>
  <div class="mx-4 my-6">
    <div class="grid gap-x-6 gap-y-3 h-fit grid-cols-4 grid-rows-2 mb-3">
      <VInputText
          class=""
          v-model="datosPersonales.edad"
          type="number"
          label="Edad"
          label-position="top"
          @input="emitDatosPersonales"
      />
      <VSelect
          class=""
          :options="sexOptions"
          v-model="datosPersonales.sexo"
          label="Sexo"
          label-position="top"
          @input="emitDatosPersonales"
      />
      <VInputText
          class=""
          v-model="datosPersonales.tallaEnCm"
          type="number"
          label="Talla"
          label-position="top"
          unit="cm"
          @input="emitDatosPersonales"
      />
      <VInputText
          class=""
          v-model="datosPersonales.pesoEnKg"
          type="number"
          label="Peso"
          label-position="top"
          unit="kg"
          @input="emitDatosPersonales"
      />
      <VInputText
          class="col-span-4"
          v-model="datosPersonales.diagnosticoMedico"
          type="text"
          label="Diagnóstico médico"
          label-position="top"
          @input="emitDatosPersonales"
      />
    </div>
    <p class="col-span-4 text-stone-500 h-max mb-1.5">Datos sociales</p>
    <div class="grid gap-x-6 min-h-8 h-fit grid-cols-5 grid-rows-1 mb-3">
      <VInputRadio
          v-model="datosPersonales.datoSocial"
          value="Vive solo"
          label="Vive solo"
          identifier="DatosSociales"
          class="w-max"
          @input="emitDatosPersonales"
      />
      <VInputRadio
          v-model="datosPersonales.datoSocial"
          value="Con familia"
          label="Con familia"
          identifier="DatosSociales"
          class="w-max"
          @input="emitDatosPersonales"
      />
      <VInputText
          :disabled="datosPersonales.datoSocial !== 'Con familia'"
          class="w-full col-span-3"
          v-model="datosSocialesEspecificos"
          type="text"
          label="Especificar"
          label-position="side"
          @input="emitDatosPersonales"
      />
    </div>
    <div class="grid gap-x-6 min-h-8 h-fit grid-cols-3 grid-rows-1">
      <VSelect
          class=""
          v-model="datosPersonales.escolaridad"
          :options="escolaridadOpciones"
          type="text"
          label="Escolaridad"
          label-position="top"
          @input="emitDatosPersonales"
      />
      <VInputText
          class=""
          v-model="datosPersonales.religion"
          type="text"
          label="Religión"
          label-position="top"
          @input="emitDatosPersonales"
      />
      <VSelect
          v-model="datosPersonales.estadoCivil"
          :options="civilStatementOptions"
          label="Estado civil"
          label-position="top"
          @input="emitDatosPersonales"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import VSelect from "@/components/VSelect.vue";

const emits = defineEmits<{
  (
    e: "update:antecedentesPersonales",
    value: typeof antecedentesPersonales.value
  ): void;
}>();

const antecedentesPersonales = ref<{
  habitosToxicos: "Alcohol" | "Tabaco" | "Otras drogas" | "Negadas" | null;
  habitoToxicoEspecificado: string | null;
  hospitalizacionesPrevias: boolean | null;
  cronicoDegenerativas:
    | "Diabetes Mellitus"
    | "Otras enfermedades"
    | "Hipertension arterial"
    | null;
  otrasEnfermedades: string | null;
  tiempoPadeciendolaEnAnos: number | null;
  antecedentesQuirurgicosTransfusionales:
    | "Quirurgico"
    | "Transfusionales"
    | null;
  tiempoQuirurgicosTransfusionales: Date | null;
  medicamentoEnCasa: string | null;
  dosisEnCasa: string | null;
  horarioEnCasa: string | null;
  administradoEnCasaPor: "Enfermero" | "Paciente" | null;
  medicamentoEnHospital: string | null;
  dosisEnHospital: string | null;
  horarioEnHospital: string | null;
  administradoEnHospitalPor: "Enfermero" | "Paciente" | null;
  alergias: boolean | null;
  tipoDeAlergia: "Medicamentosa" | "Alimenticia" | "Material" | string | null;
}>({
  habitosToxicos: null,
  habitoToxicoEspecificado: null,
  hospitalizacionesPrevias: null,
  cronicoDegenerativas: null,
  otrasEnfermedades: null,
  tiempoPadeciendolaEnAnos: null,
  antecedentesQuirurgicosTransfusionales: null,
  tiempoQuirurgicosTransfusionales: null,
  medicamentoEnCasa: null,
  dosisEnCasa: null,
  horarioEnCasa: null,
  administradoEnCasaPor: null,
  medicamentoEnHospital: null,
  dosisEnHospital: null,
  horarioEnHospital: null,
  administradoEnHospitalPor: null,
  alergias: null,
  tipoDeAlergia: null,
});

const fechaDeRealizacion = ref<Date | null>(null);
const alergiaSeleccionada = ref<string | null>(null);
const alergiaEspecifica = ref<string | null>(null);
const otrasEnfermedadesInternal = ref<string | null>(null);

const antecedentesQuirurgicosOTransfusionalesOptions = [
  "Quirurgico",
  "Transfusionales",
];

const tipoDeAlergiaSeleccionado = computed(() => {
  if (alergiaSeleccionada.value && antecedentesPersonales.value.alergias) {
    if (alergiaSeleccionada.value !== "Otro" || !alergiaEspecifica.value)
      return alergiaSeleccionada.value;
    else return alergiaEspecifica.value;
  }
  return null;
});

const fechaQuirurgicoTransfusionales = computed({
  get() {
    return !antecedentesPersonales.value.antecedentesQuirurgicosTransfusionales
      ? null
      : fechaDeRealizacion.value;
  },
  set(value) {
    fechaDeRealizacion.value = !value ? null : value;
  },
});

const otrasEnfermedades = computed({
  get() {
    return antecedentesPersonales.value.cronicoDegenerativas ===
      "Otras enfermedades"
      ? otrasEnfermedadesInternal.value
      : null;
  },
  set(value) {
    otrasEnfermedadesInternal.value = !value ? null : value;
  },
});

const otraAlergia = computed({
  get() {
    if (alergiaSeleccionada.value == "Otro") return alergiaEspecifica.value;
    else return null;
  },
  set(value) {
    alergiaEspecifica.value = !value ? null : value;
  },
});

watch(
  [
    fechaQuirurgicoTransfusionales,
    otrasEnfermedades,
    tipoDeAlergiaSeleccionado,
  ],
  ([fechaValue, enfermedadesValue, alergiaValue]) => {
    antecedentesPersonales.value.tiempoQuirurgicosTransfusionales = fechaValue;
    antecedentesPersonales.value.otrasEnfermedades = enfermedadesValue;
    antecedentesPersonales.value.tipoDeAlergia = alergiaValue;
  }
);

function updateAntecedentesPersonales() {
  emits("update:antecedentesPersonales", antecedentesPersonales.value);
}
</script>

<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">Antecedentes Personales</h1>
    <img
      class="h-8 w-8"
      src="../../../assets/icons/documentoConLupa.png"
      alt=""
    />
  </div>
  <div class="mx-4 my-6">
    <p class="col-span-4 text-stone-500 h-max mb-1.5">Habitos tóxicos</p>
    <div class="flex gap-x-12 mb-3">
      <VInputRadio
        v-model="antecedentesPersonales.habitosToxicos"
        value="Tabaco"
        label="Tabaco"
        identifier="HabitosToxicos"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
      <VInputRadio
        v-model="antecedentesPersonales.habitosToxicos"
        value="Alcohol"
        label="Alcohol"
        identifier="HabitosToxicos"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
      <VInputRadio
        v-model="antecedentesPersonales.habitosToxicos"
        value="Otras drogas"
        label="Otras drogas"
        identifier="HabitosToxicos"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
      <VInputRadio
        v-model="antecedentesPersonales.habitosToxicos"
        value="Negadas"
        label="Negadas"
        identifier="HabitosToxicos"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
    </div>
    <VInputText
      class="block mb-3"
      v-model="antecedentesPersonales.habitoToxicoEspecificado"
      type="text"
      label="Especificar (años de duración del hábito)"
      label-position="side"
      @input="updateAntecedentesPersonales"
    />
    <p class="col-span-4 text-stone-500 h-max mb-1.5">
      Hospitalizaciones previas
    </p>
    <div class="flex gap-x-12 mb-3">
      <VInputRadio
        v-model="antecedentesPersonales.hospitalizacionesPrevias"
        :value="true"
        label="Sí"
        identifier="Hospitalizaciones"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
      <VInputRadio
        v-model="antecedentesPersonales.hospitalizacionesPrevias"
        :value="false"
        label="No"
        identifier="Hospitalizaciones"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
    </div>
    <p class="col-span-4 text-stone-500 h-max mb-1.5">
      Enfermedades crónico degenerativas
    </p>
    <div class="grid grid-cols-3 grid-rows-2 gap-y-3 mb-3">
      <VInputRadio
        v-model="antecedentesPersonales.cronicoDegenerativas"
        value="Diabetes Mellitus"
        label="Diabetes Mellitus"
        identifier="Hospitalizaciones"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
      <div class="col-span-2 flex">
        <VInputRadio
          v-model="antecedentesPersonales.cronicoDegenerativas"
          value="Otras enfermedades"
          label="Otras enfermedades"
          identifier="Hospitalizaciones"
          class="min-w-max mr-2 block"
          @input="updateAntecedentesPersonales"
        />
        <VInputText
          class="w-full"
          v-model="otrasEnfermedades"
          type="text"
          :disabled="
            antecedentesPersonales.cronicoDegenerativas !== 'Otras enfermedades'
          "
          @input="updateAntecedentesPersonales"
        />
      </div>
      <VInputRadio
        v-model="antecedentesPersonales.cronicoDegenerativas"
        value="Hipertension arterial"
        label="Hipertensión arterial"
        identifier="Hospitalizaciones"
        class="w-max"
        @input="updateAntecedentesPersonales"
      />
    </div>
    <div class="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-3 mb-3">
      <VInputText
        v-model="antecedentesPersonales.tiempoPadeciendolaEnAnos"
        label="Tiempo de padecerla"
        label-position="top"
        type="text"
        unit="años"
        @input="updateAntecedentesPersonales"
      />
      <VSelect
        v-model="antecedentesPersonales.antecedentesQuirurgicosTransfusionales"
        :options="antecedentesQuirurgicosOTransfusionalesOptions"
        label="Antecedentes quirúrgicos/transfusionales"
        label-position="top"
        type="text"
        class="col-span-2"
        @input="updateAntecedentesPersonales"
      />
      <div class="col-start-2">
        <p
          class="h-max mb-1.5"
          :class="
            !antecedentesPersonales.antecedentesQuirurgicosTransfusionales
              ? 'text-stone-300'
              : 'text-stone-500'
          "
        >
          Fecha de realización
        </p>
        <VInputText
          v-model="fechaQuirurgicoTransfusionales"
          :disabled="
            !antecedentesPersonales.antecedentesQuirurgicosTransfusionales
          "
          type="date"
          :center-text="true"
          class="w-max"
          @input="updateAntecedentesPersonales"
        />
      </div>
    </div>

    <p class="text-stone-500 h-max mb-1.5">
      Tratamiento farmacológico habitual en casa
    </p>
    <div class="grid items-center grid-rows-3 grid-cols-5 gap-y-3 mb-3">
      <p class="text-stone-500 h-max">Medicamento:</p>
      <VInputText
        class="col-span-4"
        type="text"
        v-model="antecedentesPersonales.medicamentoEnCasa"
        @input="updateAntecedentesPersonales"
      />
      <p class="text-stone-500 h-max">Dosis:</p>
      <VInputText
        class="col-span-4"
        type="text"
        v-model="antecedentesPersonales.dosisEnCasa"
        @input="updateAntecedentesPersonales"
      />
      <p class="text-stone-500 h-max">Horario:</p>
      <VInputText
        class="col-span-4"
        type="text"
        v-model="antecedentesPersonales.horarioEnCasa"
        @input="updateAntecedentesPersonales"
      />
    </div>
    <p class="text-stone-500 h-max mb-1.5">Administrado por:</p>
    <VInputRadio
      class="w-fit mb-3"
      v-model="antecedentesPersonales.administradoEnCasaPor"
      value="Enfermero"
      label="Enfermero(a)"
      identifier="administradoPor"
      @input="updateAntecedentesPersonales"
    />
    <VInputRadio
      class="w-fit mb-3"
      v-model="antecedentesPersonales.administradoEnCasaPor"
      value="Paciente"
      label="Paciente"
      identifier="administradoPor"
      @input="updateAntecedentesPersonales"
    />
    <p class="text-stone-500 h-max mb-1.5">
      Tratamiento farmacológico hospitalario
    </p>
    <div class="grid items-center grid-rows-3 grid-cols-5 gap-y-3 mb-3">
      <p class="text-stone-500 h-max">Medicamento:</p>
      <VInputText
        class="col-span-4"
        type="text"
        v-model="antecedentesPersonales.medicamentoEnHospital"
        @input="updateAntecedentesPersonales"
      />
      <p class="text-stone-500 h-max">Dosis:</p>
      <VInputText
        class="col-span-4"
        type="text"
        v-model="antecedentesPersonales.dosisEnHospital"
        @input="updateAntecedentesPersonales"
      />
      <p class="text-stone-500 h-max">Horario:</p>
      <VInputText
        class="col-span-4"
        type="text"
        v-model="antecedentesPersonales.horarioEnHospital"
        @input="updateAntecedentesPersonales"
      />
    </div>
    <p class="text-stone-500 h-max mb-1.5">Administrado por:</p>
    <VInputRadio
      class="w-fit mb-3"
      v-model="antecedentesPersonales.administradoEnHospitalPor"
      value="Enfermero"
      label="Enfermero(a)"
      identifier="administradoPor"
      @input="updateAntecedentesPersonales"
    />
    <VInputRadio
      class="w-fit mb-3"
      v-model="antecedentesPersonales.administradoEnHospitalPor"
      value="Paciente"
      label="Paciente"
      identifier="administradoPor"
      @input="updateAntecedentesPersonales"
    />
    <p class="text-stone-500 h-max mb-1.5">Alergias</p>
    <div class="flex gap-x-32 mb-3">
      <VInputRadio
        v-model="antecedentesPersonales.alergias"
        :value="true"
        label="Si"
        identifier="tieneAlergias"
        @input="updateAntecedentesPersonales"
      />
      <VInputRadio
        v-model="antecedentesPersonales.alergias"
        :value="false"
        label="No"
        identifier="tieneAlergias"
        @input="updateAntecedentesPersonales"
      />
    </div>
    <Transition name="expand">
      <div v-if="antecedentesPersonales.alergias">
        <VInputRadio
          class="mb-3"
          v-model="alergiaSeleccionada"
          value="Medicamentosa"
          label="Medicamentosa"
          identifier="opcionesDeAlergia"
          @input="updateAntecedentesPersonales"
        />
        <VInputRadio
          class="mb-3"
          v-model="alergiaSeleccionada"
          value="Alimenticia"
          label="Alimenticia"
          identifier="opcionesDeAlergia"
          @input="updateAntecedentesPersonales"
        />
        <VInputRadio
          class="mb-3"
          v-model="alergiaSeleccionada"
          value="Material"
          label="Material"
          identifier="opcionesDeAlergia"
          @input="updateAntecedentesPersonales"
        />
        <div class="flex gap-x-9">
          <VInputRadio
            v-model="alergiaSeleccionada"
            value="Otro"
            label="Otro"
            identifier="opcionesDeAlergia"
            @input="updateAntecedentesPersonales"
          />
          <VInputText
            class="w-full"
            label="Especificar"
            label-position="side"
            v-model="otraAlergia"
            type="text"
            :disabled="alergiaSeleccionada !== 'Otro'"
            @input="updateAntecedentesPersonales"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

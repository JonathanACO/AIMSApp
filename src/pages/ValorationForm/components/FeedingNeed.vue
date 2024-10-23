<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import VInputText from "@/components/VInputText.vue";
import VInputRadio from "@/components/VInputRadio.vue";

const emits = defineEmits<{
  (e: "update:feeding-need", value: typeof necesidadAlimentacion.value): void;
}>();

const necesidadAlimentacion = ref<{
  tipoDeDieta:
    | "Normal"
    | "Liquida"
    | "Blanda"
    | "Vegana"
    | "Ayuno"
    | "Libre de gluten"
    | "Ayuno"
    | "NPT"
    | "Otra"
    | string
    | null;
  dietaHabitualCarnes: boolean;
  dietaHabitualVerduras: boolean;
  dietaHabitualFrutas: boolean;
  dietaHabitualHarinas: boolean;
  dietaHabitualLeguminosas: boolean;
  dietaHabitualLacteos: boolean;
  dietaHabitualRefresco: boolean;
  dietaHabitualCafe: boolean;
  dietaHabitualAgua: boolean;
  dietaNoApegadaAEnfermedad: boolean;
  dietaHabitualOtros: boolean;
  otraDietaHabitual: string | null;
  ingestaDeLiquidos:
    | "Menos de 1 lt."
    | "De 1 a 2 lts."
    | "Mayor a 2 lts."
    | null;
  apetito: "Conservado" | "Aumentado" | "Disminuido" | null;
  suplementoAlimenticio: boolean | null;
  especificarSuplemento: string | null;
  estadoCavidadOral: "Sin caries" | "Con caries" | null;
  protesisDental: boolean | null;
  siprotesisDental: "Fija" | "Movil" | null;
  mucosasOrales: "Hidratadas" | "Deshidratadas" | null;
  adoncia: "Total" | "Parcial" | null;
  problemasDeMasticacion:
    | "Masticacion"
    | "Deglucion"
    | "Intolerancia"
    | "Nauseas"
    | "Vomito"
    | "No aplica"
    | null;
  datosSubjetivosDeProblemasDeMasticacion: string | null;
  sondaDeAlimentacion: boolean | null;
  calibreSonda: "12" | "14" | "16" | "18" | "20" | "22" | null;
  alteracionesDePeso: boolean | null;
  siAlteracionesDePeso: "Sobrepeso" | "Obesidad" | "Obesidad morbida" | null;
  solucionBase: number | null;
  sf: "1000" | "500" | null;
  sg: "5" | "10" | "Otro" | null;
  otroSg: string | null;
  infusiones: string | null;
  accesosVenosos:
    | "CVPC"
    | "CVC"
    | "C. Swan Ganz"
    | "C. Tenckhoff"
    | "C. HD"
    | null;
  calibreAccesoVenoso: number | null;
  fechaDeColocacion: Date | null;
  fechaDeCuracion: Date | null;
  balanceParcial: "Neutro" | string | null;
  datosSubjetivosBalanceParcial: string | null;
}>({
  tipoDeDieta: null,
  dietaHabitualCarnes: false,
  dietaHabitualVerduras: false,
  dietaHabitualFrutas: false,
  dietaHabitualHarinas: false,
  dietaHabitualLeguminosas: false,
  dietaHabitualLacteos: false,
  dietaHabitualRefresco: false,
  dietaHabitualCafe: false,
  dietaHabitualAgua: false,
  dietaNoApegadaAEnfermedad: false,
  dietaHabitualOtros: false,
  otraDietaHabitual: null,
  ingestaDeLiquidos: null,
  apetito: null,
  suplementoAlimenticio: null,
  especificarSuplemento: null,
  estadoCavidadOral: null,
  protesisDental: null,
  siprotesisDental: null,
  mucosasOrales: null,
  adoncia: null,
  problemasDeMasticacion: null,
  datosSubjetivosDeProblemasDeMasticacion: null,
  sondaDeAlimentacion: null,
  calibreSonda: null,
  alteracionesDePeso: null,
  siAlteracionesDePeso: null,
  solucionBase: null,
  sf: null,
  sg: null,
  otroSg: null,
  infusiones: null,
  accesosVenosos: null,
  calibreAccesoVenoso: null,
  fechaDeColocacion: null,
  fechaDeCuracion: null,
  balanceParcial: null,
  datosSubjetivosBalanceParcial: null,
});

const dietaHabitualEspecifica = ref<string | null>(null);
const tipoDeDietaSeleccionada = ref<
  | "Normal"
  | "Liquida"
  | "Blanda"
  | "Vegana"
  | "Ayuno"
  | "Libre de gluten"
  | "Ayuno"
  | "NPT"
  | "Otra"
  | null
>(null);
const dietaEspecifica = ref<string | null>(null);
const suplementoAlimenticioEspecifico = ref<string | null>(null);
const protesisDentalSeleccionada = ref<"Movil" | "Fija" | null>(null);
const calibreSeleccionado = ref<"12" | "14" | "16" | "18" | "20" | "22" | null>(
  null
);
const alteracionDePesoSeleccionado = ref<
  "Sobrepeso" | "Obesidad" | "Obesidad morbida" | null
>(null);
const otroSg = ref<string | null>(null);
const tieneDatosSubjetivosProblemasDeMasticacion = ref<false | null>(null);
const tipoDeDieta = computed(() => {
  if (tipoDeDietaSeleccionada.value) {
    if (tipoDeDietaSeleccionada.value !== "Otra" || !otraDieta.value)
      return tipoDeDietaSeleccionada.value;
    else return otraDieta.value;
  } else return null;
});

const otraDieta = computed({
  get() {
    if (tipoDeDietaSeleccionada.value == "Otra") return dietaEspecifica.value;
    return null;
  },
  set(value) {
    dietaEspecifica.value = !value ? null : value;
  },
});

const otraDietaHabitual = computed({
  get() {
    if (
      !necesidadAlimentacion.value.dietaHabitualOtros ||
      !dietaHabitualEspecifica.value
    )
      return null;
    else {
      return dietaHabitualEspecifica.value;
    }
  },
  set(value) {
    dietaHabitualEspecifica.value = !value ? null : value;
  },
});

const suplementoAlimenticio = computed(() => {
  return necesidadAlimentacion.value.suplementoAlimenticio
    ? suplementoAlimenticioEspecifico.value
    : null;
});

const tipoDeProtesisDental = computed(() => {
  return necesidadAlimentacion.value.protesisDental
    ? protesisDentalSeleccionada.value
    : null;
});

const valorSondaDeAlimentacion = computed(() => {
  return necesidadAlimentacion.value.sondaDeAlimentacion
    ? calibreSeleccionado.value
    : null;
});

const tipoDeAlteracionDePeso = computed(() => {
  return necesidadAlimentacion.value.alteracionesDePeso
    ? alteracionDePesoSeleccionado.value
    : null;
});

const sgEspecifico = computed({
  get() {
    return necesidadAlimentacion.value.sg !== "Otro" ? null : otroSg.value;
  },
  set(value) {
    otroSg.value = !value ? null : value;
  },
});

const problemasDeMasticacionSubjetivos = ref<string | null>(null);
const datosSubjetivosProblemasDeMasticacion = computed({
  get() {
    return !problemasDeMasticacionSubjetivos.value ||
      tieneDatosSubjetivosProblemasDeMasticacion.value === false
      ? null
      : problemasDeMasticacionSubjetivos.value;
  },
  set(value) {
    problemasDeMasticacionSubjetivos.value = !value ? null : value;
  },
});

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    necesidadAlimentacion.value.datosSubjetivosDeProblemasDeMasticacion = value;
  } else {
    necesidadAlimentacion.value.datosSubjetivosDeProblemasDeMasticacion = null;
  }
};

const handleInputChangeOne = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    necesidadAlimentacion.value.datosSubjetivosBalanceParcial = value;
  } else {
    necesidadAlimentacion.value.datosSubjetivosBalanceParcial = null;
  }
};

watch(
  [
    sgEspecifico,
    tipoDeAlteracionDePeso,
    valorSondaDeAlimentacion,
    tipoDeProtesisDental,
    tipoDeDieta,
    otraDietaHabitual,
    suplementoAlimenticio,
    datosSubjetivosProblemasDeMasticacion,
  ],
  ([
    sgEspecificoVal,
    tipoDeAlteracionDePeso,
    valorSondaDeAlimentacionVal,
    tipoDeProtesisDentalVal,
    tipoDeDietaVal,
    otraDietaHabitualVal,
    suplementoAlimenticioVal,
    datosSubjetivosProblemasDeMasticacion,
  ]) => {
    necesidadAlimentacion.value.otroSg = sgEspecificoVal;
    necesidadAlimentacion.value.siAlteracionesDePeso = tipoDeAlteracionDePeso;
    necesidadAlimentacion.value.calibreSonda = valorSondaDeAlimentacionVal;
    necesidadAlimentacion.value.siprotesisDental = tipoDeProtesisDentalVal;
    necesidadAlimentacion.value.tipoDeDieta = tipoDeDietaVal;
    necesidadAlimentacion.value.otraDietaHabitual = otraDietaHabitualVal;
    necesidadAlimentacion.value.especificarSuplemento =
      suplementoAlimenticioVal;
    necesidadAlimentacion.value.datosSubjetivosDeProblemasDeMasticacion =
      datosSubjetivosProblemasDeMasticacion;
  }
);

function updateFeedingNeed() {
  emits("update:feeding-need", necesidadAlimentacion.value);
}
</script>
<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="text-2xl inline-block p-1">
      1. Necesidad de Alimentación/Hidratación
    </h1>
    <img
      class="h-8 w-8"
      src="../../../assets/icons/alimentacion-hidratacion.png"
      alt=""
    />
  </div>
  <div class="mx-4 my-6 text-gray-500 text-lg">
    <p class="h-max mb-1.5">Tipo de dieta</p>
    <div class="flex gap-x-12 gap-y-3 mb-3 flex-wrap">
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Normal"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Blanda"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Liquida"
        label="Líquida"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Vegana"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Baja en Sodio"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Libre de gluten"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Ayuno"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="NPT"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Otra"
        identifier="Tipo de Dieta"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>
    <VInputText
      class="w-full mb-3"
      v-model="otraDieta"
      :disabled="tipoDeDietaSeleccionada !== 'Otra'"
      type="text"
      label="Especificar"
      label-position="side"
      @input="updateFeedingNeed"
    />

    <p class="h-max mb-1.5">Dieta habitual</p>
    <div class="grid grid-cols-4 gap-y-3 gap-x-4 mb-3">
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualCarnes"
        label="Carnes"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualVerduras"
        label="Verduras"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualFrutas"
        label="Frutas"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualHarinas"
        label="Harinas"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualLeguminosas"
        label="Leguminosas"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualLacteos"
        label="Lácteos"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualRefresco"
        label="Refresco"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualCafe"
        label="Café"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualAgua"
        label="Agua"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>
    <VInputRadio
      v-model="necesidadAlimentacion.dietaNoApegadaAEnfermedad"
      :value="true"
      label="Dieta no apegada a su enfermedad"
      identifier="Dieta Habitual"
      class="w-max mb-3"
      @input="updateFeedingNeed"
    />
    <div class="flex gap-x-12">
      <VInputRadio
        v-model="necesidadAlimentacion.dietaHabitualOtros"
        :value="true"
        label="Otros"
        identifier="Dieta Habitual"
        class="w-max mb-3"
        @input="updateFeedingNeed"
      />
      <VInputText
        class="w-full mb-3"
        v-model="otraDietaHabitual"
        :disabled="!necesidadAlimentacion.dietaHabitualOtros"
        type="text"
        label="Especificar"
        label-position="side"
        @input="updateFeedingNeed"
      />
    </div>

    <div class="mb-3">
      <p class="col-span-4 h-max mb-1.5">Ingesta de líquidos por 24 hrs.</p>
      <div class="grid grid-cols-4 mb-3">
        <VInputRadio
          v-model="necesidadAlimentacion.ingestaDeLiquidos"
          value="Menos de 1 lt."
          label="Menos de 1 lt."
          identifier="Ingesta de liquidos"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.ingestaDeLiquidos"
          value="De 1 a 2 lts."
          label="De 1 a 2 lts."
          identifier="Ingesta de liquidos"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.ingestaDeLiquidos"
          value="Mayor de 2 lits."
          label="Mayor de 2 lits."
          identifier="Ingesta de liquidos"
          class="w-max"
          @input="updateFeedingNeed"
        />
      </div>
    </div>
    <div class="mb-3">
      <p class="col-span-4 h-max mb-1.5">Apetito</p>
      <div class="grid grid-cols-4 mb-3">
        <VInputRadio
          v-model="necesidadAlimentacion.apetito"
          value="Conservado"
          label="Conservado"
          identifier="Apetito"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.apetito"
          value="Aumentado"
          label="Aumentado"
          identifier="Apetito"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.apetito"
          value="Disminuido"
          label="Disminuido"
          identifier="Apetito"
          class="w-max"
          @input="updateFeedingNeed"
        />
      </div>
    </div>
    <div class="flex gap-x-12">
      <div class="flex h-9 items-center">
        <p class="h-max w-max">Suplemento Alimenticio</p>
      </div>
      <div class="flex flex-wrap gap-x-12">
        <VInputRadio
          v-model="necesidadAlimentacion.suplementoAlimenticio"
          :value="true"
          label="Si"
          identifier="Suplemento Alimenticio"
          class="w-max mb-3"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.suplementoAlimenticio"
          :value="false"
          label="No"
          identifier="Suplemento Alimenticio"
          class="w-max mb-3"
          @input="updateFeedingNeed"
        />
        <Transition name="expand">
          <VInputText
            v-if="necesidadAlimentacion.suplementoAlimenticio"
            class="w-full mb-3"
            v-model="suplementoAlimenticioEspecifico"
            type="text"
            label="Especificar"
            label-position="side"
            @input="updateFeedingNeed"
          />
        </Transition>
      </div>
    </div>

    <p class="h-max mb-1.5">Estado de cavidad oral</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="necesidadAlimentacion.estadoCavidadOral"
        value="Sin caries"
        identifier="Cavidad Oral"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.estadoCavidadOral"
        value="Con caries"
        identifier="Cavidad Oral"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>

    <div class="flex gap-x-10 mb-3">
      <div class="flex h-9 items-center">
        <p class="h-max">Protésis dental</p>
      </div>
      <div class="flex flex-wrap gap-x-10 gap-y-3">
        <VInputRadio
          v-model="necesidadAlimentacion.protesisDental"
          :value="true"
          label="Si"
          identifier="Protesis Dental"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.protesisDental"
          :value="false"
          label="No"
          identifier="Protesis Dental"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <Transition name="expand">
          <div
            v-if="necesidadAlimentacion.protesisDental == true"
            class="w-full"
          >
            <div>
              <VInputRadio
                v-model="protesisDentalSeleccionada"
                value="Fija"
                label="Fija"
                identifier="Protesis Dental"
                class="w-max mb-3"
                @input="updateFeedingNeed"
              />
              <VInputRadio
                v-model="protesisDentalSeleccionada"
                value="Movil"
                label="Móvil"
                identifier="Protesis Dental"
                class="w-max"
                @input="updateFeedingNeed"
              />
            </div></div
        ></Transition>
      </div>
    </div>

    <p class="h-max mb-1.5">Mucosas orales</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="necesidadAlimentacion.mucosasOrales"
        value="Hidratadas"
        label="Hidratadas"
        identifier="Mucosas Orales"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.mucosasOrales"
        value="Deshidratadas"
        label="Deshidratadas"
        identifier="Mucosas Orales"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>

    <p class="h-max mb-1.5">Adoncia</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="necesidadAlimentacion.adoncia"
        value="Total"
        label="Total"
        identifier="Adoncia"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.adoncia"
        value="Parcial"
        label="Parcial"
        identifier="Adoncia"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>

    <p class="h-max mb-1.5">Problemas de masticación y deglución</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="necesidadAlimentacion.problemasDeMasticacion"
        value="Masticacion"
        label="Masticación"
        identifier="Progblemas de masticacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="datosSubjetivosProblemasDeMasticacion"
        value="Deglucion"
        label="Deglución"
        identifier="Problemas de masticacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.problemasDeMasticacion"
        value="Intolerancia"
        label="Intolerancia"
        identifier="Problemas de masticacion"
        class="w-max"
        :disabled="!tieneDatosSubjetivosProblemasDeMasticacion"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.problemasDeMasticacion"
        value="Nauseas"
        label="Náuseas"
        identifier="Problemas de masticacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.problemasDeMasticacion"
        value="Vomito"
        label="Vómito"
        identifier="Problemas de masticacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.problemasDeMasticacion"
        value="No aplica"
        label="N/A"
        identifier="Problemas de masticacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>
    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="necesidadAlimentacion.datosSubjetivosDeProblemasDeMasticacion"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        :disabled="tieneDatosSubjetivosProblemasDeMasticacion === false"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="tieneDatosSubjetivosProblemasDeMasticacion"
        :value="false"
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="
          handleInputChange;
          updateFeedingNeed;
        "
      />
    </div>

    <div class="flex gap-x-10 items-center">
      <p class="h-max">Sonda de alimentación</p>
      <VInputRadio
        v-model="necesidadAlimentacion.sondaDeAlimentacion"
        :value="true"
        label="Si"
        identifier="Sonda de Alimentacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.sondaDeAlimentacion"
        :value="false"
        label="No"
        identifier="Sonda de Alimentacion"
        class="w-max"
        @input="updateFeedingNeed"
      />
    </div>
    <Transition name="expand">
      <div v-if="necesidadAlimentacion.sondaDeAlimentacion == true">
        <p class="h-max mb-1.5">Calibre</p>
        <div class="w-1/3 flex flex-wrap gap-x-10 gap-y-1.5">
          <VInputRadio
            v-model="calibreSeleccionado"
            value="12"
            label="12 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
            @input="updateFeedingNeed"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="18"
            label="18 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
            @input="updateFeedingNeed"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="14"
            label="14 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
            @input="updateFeedingNeed"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="20"
            label="20 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
            @input="updateFeedingNeed"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="16"
            label="16 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
            @input="updateFeedingNeed"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="22"
            label="22 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
            @input="updateFeedingNeed"
          />
        </div></div
    ></Transition>

    <div class="flex gap-x-10 my-3">
      <p class="h-max mb-1.5">Alteraciones de peso</p>
      <div>
        <div class="w-full flex gap-x-10">
          <VInputRadio
            v-model="necesidadAlimentacion.alteracionesDePeso"
            :value="true"
            label="Si"
            identifier="Alteraciones de Peso"
            class="w-max"
            @input="updateFeedingNeed"
          />
          <VInputRadio
            v-model="necesidadAlimentacion.alteracionesDePeso"
            :value="false"
            label="No"
            identifier="Alteraciones de Peso"
            class="w-max"
            @input="updateFeedingNeed"
          />
        </div>
        <Transition name="expand">
          <div
            v-if="necesidadAlimentacion.alteracionesDePeso == true"
            class="flex flex-col gap-y-1.5 mt-1.5"
          >
            <VInputRadio
              v-model="alteracionDePesoSeleccionado"
              value="Sobrepeso"
              label="Sobrepeso"
              identifier="Alteraciones de Peso"
              class="w-max"
              @input="updateFeedingNeed"
            />
            <VInputRadio
              v-model="alteracionDePesoSeleccionado"
              value="Obesidad"
              label="Obesidad"
              identifier="Alteraciones de Peso"
              class="w-max"
              @input="updateFeedingNeed"
            />
            <VInputRadio
              v-model="alteracionDePesoSeleccionado"
              value="Obesidad morbida"
              label="Obesidad mórbida"
              identifier="Alteraciones de Peso"
              class="w-max"
              @input="updateFeedingNeed"
            /></div
        ></Transition>
      </div>
    </div>

    <div class="flex items-center gap-x-10 mb-3">
      <p class="h-max">Solución base/Plan de líquidos</p>
      <VInputText
        class="w-60"
        v-model="necesidadAlimentacion.solucionBase"
        type="number"
        label="Frecuencia"
        label-position="side"
        unit="horas"
        @input="updateFeedingNeed"
      />
    </div>
    <div class="mb-3">
      <p class="h-max mb-1.5">SF:</p>
      <div class="grid grid-cols-4">
        <VInputRadio
          v-model="necesidadAlimentacion.sf"
          value="1000"
          label="1000 ml: 0.9%"
          identifier="sf"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.sf"
          value="500"
          label="500 ml: 0.9%"
          identifier="sf"
          class="w-max"
          @input="updateFeedingNeed"
        />
      </div>
    </div>
    <div class="mb-3">
      <p class="h-max mb-1.5">SG:</p>
      <div class="grid grid-cols-4 mb-1.5">
        <VInputRadio
          v-model="necesidadAlimentacion.sg"
          value="5"
          label="5% 1000 ml"
          identifier="sg"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.sg"
          value="10"
          label="10% 1000 ml"
          identifier="sg"
          class="w-max"
          @input="updateFeedingNeed"
        />
      </div>
      <div class="flex space-x-10">
        <VInputRadio
          v-model="necesidadAlimentacion.sg"
          value="Otro"
          label="Otro"
          identifier="sg"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputText
          class="w-full"
          v-model="sgEspecifico"
          :disabled="necesidadAlimentacion.sg != 'Otro'"
          type="text"
          label="Especificar"
          label-position="side"
          @input="updateFeedingNeed"
        />
      </div>
    </div>
    <p class="h-max mb-1.5">Infusion o infusiones</p>
    <VInputText
      class="w-full mb-3 mt-1"
      v-model="necesidadAlimentacion.infusiones"
      type="text"
      label="Especificar"
      label-position="side"
      @input="updateFeedingNeed"
    />
    <div class="mb-3">
      <p class="h-max mb-1.5 mt-1">Accesos Venosos</p>
      <div class="flex gap-x-10">
        <VInputRadio
          v-model="necesidadAlimentacion.accesosVenosos"
          value="CVPC"
          label="CVPC"
          identifier="Accesos Venosos"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.accesosVenosos"
          value="CVC"
          label="CVC"
          identifier="Accesos Venosos"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.accesosVenosos"
          value="C. Swan Ganz"
          label="C. Swan Ganz"
          identifier="Accesos Venosos"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.accesosVenosos"
          value="C. Tenckhoff"
          label="C. Tenckhoff"
          identifier="Accesos Venosos"
          class="w-max"
          @input="updateFeedingNeed"
        />
        <VInputRadio
          v-model="necesidadAlimentacion.accesosVenosos"
          value="C. HD"
          label="C. HD"
          identifier="Accesos Venosos"
          class="w-max"
          @input="updateFeedingNeed"
        />
      </div>
      <div
        v-show="necesidadAlimentacion.accesosVenosos != null"
        class="grid grid-cols-3 mt-1.5 mb-3"
      >
        <VInputText
          class="w-full"
          v-model="necesidadAlimentacion.calibreAccesoVenoso"
          type="number"
          label="Calibre"
          label-position="side"
          @input="updateFeedingNeed"
        />
      </div>
    </div>
    <div class="grid grid-cols-3 w-4/5 gap-y-3 mb-3 grid-rows-2 items-center">
      <label class="min-w-max">Fr Fecha de colocación</label>
      <VInputText
        class="w-max"
        v-model="necesidadAlimentacion.fechaDeColocacion"
        type="date"
        :center-text="true"
        @input="updateFeedingNeed"
      /><label class="min-w-max row-start-2">Fr Fecha de curación</label>
      <VInputText
        class="w-max col-start-2 row-start-2"
        v-model="necesidadAlimentacion.fechaDeCuracion"
        type="date"
        :center-text="true"
        @input="updateFeedingNeed"
      />
    </div>

    <p class="h-max mb-1.5">Balance parcial por turno</p>
    <VInputText
      class="w-2/6 mb-3"
      v-model="necesidadAlimentacion.balanceParcial"
      type="text"
      label="+"
      label-position="side"
      @input="updateFeedingNeed"
    />
    <VInputText
      class="w-2/6 mb-3"
      v-model="necesidadAlimentacion.balanceParcial"
      type="text"
      label="-"
      label-position="side"
      @input="updateFeedingNeed"
    />
    <VInputRadio
      v-model="necesidadAlimentacion.balanceParcial"
      value="Neutro"
      identifier="Balance parcial por turno"
      class="w-max mb-3"
      @input="updateFeedingNeed"
    />
    <div class="flex items-end">
      <VInputText
        class="w-full mr-8"
        v-model="necesidadAlimentacion.datosSubjetivosBalanceParcial"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        @input="updateFeedingNeed"
      />
      <VInputRadio
        v-model="necesidadAlimentacion.datosSubjetivosBalanceParcial"
        value=""
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="
          handleInputChangeOne;
          updateFeedingNeed;
        "
      />
    </div>
  </div>
</template>

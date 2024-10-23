<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import VInputText from "@/components/VInputText.vue";
import VInputRadio from "@/components/VInputRadio.vue";

const NecesidadAlimentacion = ref<{
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
      !NecesidadAlimentacion.value.dietaHabitualOtros ||
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
  return NecesidadAlimentacion.value.suplementoAlimenticio
    ? suplementoAlimenticioEspecifico.value
    : null;
});

const tipoDeProtesisDental = computed(() => {
  return NecesidadAlimentacion.value.protesisDental
    ? protesisDentalSeleccionada.value
    : null;
});

const valorSondaDeAlimentacion = computed(() => {
  return NecesidadAlimentacion.value.sondaDeAlimentacion
    ? calibreSeleccionado.value
    : null;
});

const tipoDeAlteracionDePeso = computed(() => {
  return NecesidadAlimentacion.value.alteracionesDePeso
    ? alteracionDePesoSeleccionado.value
    : null;
});

const sgEspecifico = computed({
  get() {
    return NecesidadAlimentacion.value.sg !== "Otro" ? null : otroSg.value;
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
    NecesidadAlimentacion.value.datosSubjetivosDeProblemasDeMasticacion = value;
  } else {
    NecesidadAlimentacion.value.datosSubjetivosDeProblemasDeMasticacion = null;
  }
};

const handleInputChangeOne = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    NecesidadAlimentacion.value.datosSubjetivosBalanceParcial = value;
  } else {
    NecesidadAlimentacion.value.datosSubjetivosBalanceParcial = null;
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
    datosSubjetivosProblemasDeMasticacion,
    sgEspecificoVal,
    tipoDeAlteracionDePesoVal,
    valorSondaDeAlimentacionVal,
    tipoDeProtesisDentalVal,
    tipoDeDietaVal,
    otraDietaHabitualVal,
    suplementoAlimenticioVal,
  ]) => {
    NecesidadAlimentacion.value.otroSg = sgEspecificoVal;
    NecesidadAlimentacion.value.siAlteracionesDePeso =
      tipoDeAlteracionDePesoVal;
    NecesidadAlimentacion.value.calibreSonda = valorSondaDeAlimentacionVal;
    NecesidadAlimentacion.value.siprotesisDental = tipoDeProtesisDentalVal;
    NecesidadAlimentacion.value.tipoDeDieta = tipoDeDietaVal;
    NecesidadAlimentacion.value.otraDietaHabitual = otraDietaHabitualVal;
    NecesidadAlimentacion.value.especificarSuplemento =
      suplementoAlimenticioVal;
    NecesidadAlimentacion.value.datosSubjetivosDeProblemasDeMasticacion =
      datosSubjetivosProblemasDeMasticacion;
  }
);
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
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Blanda"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Liquida"
        label="Líquida"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Vegana"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Baja en Sodio"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Libre de gluten"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Ayuno"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="NPT"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="tipoDeDietaSeleccionada"
        value="Otra"
        identifier="Tipo de Dieta"
        class="w-max"
      />
    </div>
    <VInputText
      class="w-full mb-3"
      v-model="otraDieta"
      :disabled="tipoDeDietaSeleccionada !== 'Otra'"
      type="text"
      label="Especificar"
      label-position="side"
    />

    <p class="h-max mb-1.5">Dieta habitual</p>
    <div class="grid grid-cols-4 gap-y-3 gap-x-4 mb-3">
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualCarnes"
        label="Carnes"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualVerduras"
        label="Verduras"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualFrutas"
        label="Frutas"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualHarinas"
        label="Harinas"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualLeguminosas"
        label="Leguminosas"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualLacteos"
        label="Lácteos"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualRefresco"
        label="Refresco"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualCafe"
        label="Café"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualAgua"
        label="Agua"
        :value="true"
        identifier="Dieta Habitual"
        class="w-max"
      />
    </div>
    <VInputRadio
      v-model="NecesidadAlimentacion.dietaNoApegadaAEnfermedad"
      :value="true"
      label="Dieta no apegada a su enfermedad"
      identifier="Dieta Habitual"
      class="w-max mb-3"
    />
    <div class="flex gap-x-12">
      <VInputRadio
        v-model="NecesidadAlimentacion.dietaHabitualOtros"
        :value="true"
        label="Otros"
        identifier="Dieta Habitual"
        class="w-max mb-3"
      />
      <VInputText
        class="w-full mb-3"
        v-model="otraDietaHabitual"
        :disabled="!NecesidadAlimentacion.dietaHabitualOtros"
        type="text"
        label="Especificar"
        label-position="side"
      />
    </div>

    <div class="mb-3">
      <p class="col-span-4 h-max mb-1.5">Ingesta de líquidos por 24 hrs.</p>
      <div class="grid grid-cols-4 mb-3">
        <VInputRadio
          v-model="NecesidadAlimentacion.ingestaDeLiquidos"
          value="Menos de 1 lt."
          label="Menos de 1 lt."
          identifier="Ingesta de liquidos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.ingestaDeLiquidos"
          value="De 1 a 2 lts."
          label="De 1 a 2 lts."
          identifier="Ingesta de liquidos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.ingestaDeLiquidos"
          value="Mayor de 2 lits."
          label="Mayor de 2 lits."
          identifier="Ingesta de liquidos"
          class="w-max"
        />
      </div>
    </div>
    <div class="mb-3">
      <p class="col-span-4 h-max mb-1.5">Apetito</p>
      <div class="grid grid-cols-4 mb-3">
        <VInputRadio
          v-model="NecesidadAlimentacion.apetito"
          value="Conservado"
          label="Conservado"
          identifier="Apetito"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.apetito"
          value="Aumentado"
          label="Aumentado"
          identifier="Apetito"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.apetito"
          value="Disminuido"
          label="Disminuido"
          identifier="Apetito"
          class="w-max"
        />
      </div>
    </div>
    <div class="flex gap-x-12">
      <div class="flex h-9 items-center">
        <p class="h-max w-max">Suplemento Alimenticio</p>
      </div>
      <div class="flex flex-wrap gap-x-12">
        <VInputRadio
          v-model="NecesidadAlimentacion.suplementoAlimenticio"
          :value="true"
          label="Si"
          identifier="Suplemento Alimenticio"
          class="w-max mb-3"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.suplementoAlimenticio"
          :value="false"
          label="No"
          identifier="Suplemento Alimenticio"
          class="w-max mb-3"
        />
        <Transition name="expand">
          <VInputText
            v-if="NecesidadAlimentacion.suplementoAlimenticio"
            class="w-full mb-3"
            v-model="suplementoAlimenticioEspecifico"
            type="text"
            label="Especificar"
            label-position="side"
        /></Transition>
      </div>
    </div>

    <p class="h-max mb-1.5">Estado de cavidad oral</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="NecesidadAlimentacion.estadoCavidadOral"
        value="Sin caries"
        identifier="Cavidad Oral"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.estadoCavidadOral"
        value="Con caries"
        identifier="Cavidad Oral"
        class="w-max"
      />
    </div>

    <div class="flex gap-x-10 mb-3">
      <div class="flex h-9 items-center">
        <p class="h-max">Protésis dental</p>
      </div>
      <div class="flex flex-wrap gap-x-10 gap-y-3">
        <VInputRadio
          v-model="NecesidadAlimentacion.protesisDental"
          :value="true"
          label="Si"
          identifier="Protesis Dental"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.protesisDental"
          :value="false"
          label="No"
          identifier="Protesis Dental"
          class="w-max"
        />
        <Transition name="expand">
          <div
            v-if="NecesidadAlimentacion.protesisDental == true"
            class="w-full"
          >
            <div>
              <VInputRadio
                v-model="protesisDentalSeleccionada"
                value="Fija"
                label="Fija"
                identifier="Protesis Dental"
                class="w-max mb-3"
              />
              <VInputRadio
                v-model="protesisDentalSeleccionada"
                value="Movil"
                label="Móvil"
                identifier="Protesis Dental"
                class="w-max"
              />
            </div></div
        ></Transition>
      </div>
    </div>

    <p class="h-max mb-1.5">Mucosas orales</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="NecesidadAlimentacion.mucosasOrales"
        value="Hidratadas"
        label="Hidratadas"
        identifier="Mucosas Orales"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.mucosasOrales"
        value="Deshidratadas"
        label="Deshidratadas"
        identifier="Mucosas Orales"
        class="w-max"
      />
    </div>

    <p class="h-max mb-1.5">Adoncia</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="NecesidadAlimentacion.adoncia"
        value="Total"
        label="Total"
        identifier="Adoncia"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.adoncia"
        value="Parcial"
        label="Parcial"
        identifier="Adoncia"
        class="w-max"
      />
    </div>

    <p class="h-max mb-1.5">Problemas de masticación y deglución</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="NecesidadAlimentacion.problemasDeMasticacion"
        value="Masticacion"
        label="Masticación"
        identifier="Progblemas de masticacion"
        class="w-max"
      />
      <VInputRadio
        v-model="datosSubjetivosProblemasDeMasticacion"
        value="Deglucion"
        label="Deglución"
        identifier="Problemas de masticacion"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.problemasDeMasticacion"
        value="Intolerancia"
        label="Intolerancia"
        identifier="Problemas de masticacion"
        class="w-max"
        :disabled="!tieneDatosSubjetivosProblemasDeMasticacion"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.problemasDeMasticacion"
        value="Nauseas"
        label="Náuseas"
        identifier="Problemas de masticacion"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.problemasDeMasticacion"
        value="Vomito"
        label="Vómito"
        identifier="Problemas de masticacion"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.problemasDeMasticacion"
        value="No aplica"
        label="N/A"
        identifier="Problemas de masticacion"
        class="w-max"
      />
    </div>
    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="NecesidadAlimentacion.datosSubjetivosDeProblemasDeMasticacion"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        :disabled="tieneDatosSubjetivosProblemasDeMasticacion === false"
      />
      <VInputRadio
        v-model="tieneDatosSubjetivosProblemasDeMasticacion"
        :value="false"
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="handleInputChange"
      />
    </div>

    <div class="flex gap-x-10 items-center">
      <p class="h-max">Sonda de alimentación</p>
      <VInputRadio
        v-model="NecesidadAlimentacion.sondaDeAlimentacion"
        :value="true"
        label="Si"
        identifier="Sonda de Alimentacion"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.sondaDeAlimentacion"
        :value="false"
        label="No"
        identifier="Sonda de Alimentacion"
        class="w-max"
      />
    </div>
    <Transition name="expand">
      <div v-if="NecesidadAlimentacion.sondaDeAlimentacion == true">
        <p class="h-max mb-1.5">Calibre</p>
        <div class="w-1/3 flex flex-wrap gap-x-10 gap-y-1.5">
          <VInputRadio
            v-model="calibreSeleccionado"
            value="12"
            label="12 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="18"
            label="18 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="14"
            label="14 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="20"
            label="20 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="16"
            label="16 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
          />
          <VInputRadio
            v-model="calibreSeleccionado"
            value="22"
            label="22 fr"
            identifier="Calibre de la sonda de alimentacion"
            class="w-max"
          />
        </div></div
    ></Transition>

    <div class="flex gap-x-10 my-3">
      <p class="h-max mb-1.5">Alteraciones de peso</p>
      <div>
        <div class="w-full flex gap-x-10">
          <VInputRadio
            v-model="NecesidadAlimentacion.alteracionesDePeso"
            :value="true"
            label="Si"
            identifier="Alteraciones de Peso"
            class="w-max"
          />
          <VInputRadio
            v-model="NecesidadAlimentacion.alteracionesDePeso"
            :value="false"
            label="No"
            identifier="Alteraciones de Peso"
            class="w-max"
          />
        </div>
        <Transition name="expand">
          <div
            v-if="NecesidadAlimentacion.alteracionesDePeso == true"
            class="flex flex-col gap-y-1.5 mt-1.5"
          >
            <VInputRadio
              v-model="alteracionDePesoSeleccionado"
              value="Sobrepeso"
              label="Sobrepeso"
              identifier="Alteraciones de Peso"
              class="w-max"
            />
            <VInputRadio
              v-model="alteracionDePesoSeleccionado"
              value="Obesidad"
              label="Obesidad"
              identifier="Alteraciones de Peso"
              class="w-max"
            />
            <VInputRadio
              v-model="alteracionDePesoSeleccionado"
              value="Obesidad morbida"
              label="Obesidad mórbida"
              identifier="Alteraciones de Peso"
              class="w-max"
            /></div
        ></Transition>
      </div>
    </div>

    <div class="flex items-center gap-x-10 mb-3">
      <p class="h-max">Solución base/Plan de líquidos</p>
      <VInputText
        class="w-60"
        v-model="NecesidadAlimentacion.solucionBase"
        type="number"
        label="Frecuencia"
        label-position="side"
        unit="horas"
      />
    </div>
    <div class="mb-3">
      <p class="h-max mb-1.5">SF:</p>
      <div class="grid grid-cols-4">
        <VInputRadio
          v-model="NecesidadAlimentacion.sf"
          value="1000"
          label="1000 ml: 0.9%"
          identifier="sf"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.sf"
          value="500"
          label="500 ml: 0.9%"
          identifier="sf"
          class="w-max"
        />
      </div>
    </div>
    <div class="mb-3">
      <p class="h-max mb-1.5">SG:</p>
      <div class="grid grid-cols-4 mb-1.5">
        <VInputRadio
          v-model="NecesidadAlimentacion.sg"
          value="5"
          label="5% 1000 ml"
          identifier="sg"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.sg"
          value="10"
          label="10% 1000 ml"
          identifier="sg"
          class="w-max"
        />
      </div>
      <div class="flex space-x-10">
        <VInputRadio
          v-model="NecesidadAlimentacion.sg"
          value="Otro"
          label="Otro"
          identifier="sg"
          class="w-max"
        />
        <VInputText
          class="w-full"
          v-model="sgEspecifico"
          :disabled="NecesidadAlimentacion.sg != 'Otro'"
          type="text"
          label="Especificar"
          label-position="side"
        />
      </div>
    </div>
    <p class="h-max mb-1.5">Infusion o infusiones</p>
    <VInputText
      class="w-full mb-3 mt-1"
      v-model="NecesidadAlimentacion.infusiones"
      type="text"
      label="Especificar"
      label-position="side"
    />
    <div class="mb-3">
      <p class="h-max mb-1.5 mt-1">Accesos Venosos</p>
      <div class="flex gap-x-10">
        <VInputRadio
          v-model="NecesidadAlimentacion.accesosVenosos"
          value="CVPC"
          label="CVPC"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.accesosVenosos"
          value="CVC"
          label="CVC"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.accesosVenosos"
          value="C. Swan Ganz"
          label="C. Swan Ganz"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.accesosVenosos"
          value="C. Tenckhoff"
          label="C. Tenckhoff"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadAlimentacion.accesosVenosos"
          value="C. HD"
          label="C. HD"
          identifier="Accesos Venosos"
          class="w-max"
        />
      </div>
      <div
        v-show="NecesidadAlimentacion.accesosVenosos != null"
        class="grid grid-cols-3 mt-1.5 mb-3"
      >
        <VInputText
          class="w-full"
          v-model="NecesidadAlimentacion.calibreAccesoVenoso"
          type="number"
          label="Calibre"
          label-position="side"
        />
      </div>
    </div>
    <div class="grid grid-cols-3 w-4/5 gap-y-3 mb-3 grid-rows-2 items-center">
      <label class="min-w-max">Fr Fecha de colocación</label>
      <VInputText
        class="w-max"
        v-model="NecesidadAlimentacion.fechaDeColocacion"
        type="date"
        :center-text="true"
      /><label class="min-w-max row-start-2">Fr Fecha de curación</label>
      <VInputText
        class="w-max col-start-2 row-start-2"
        v-model="NecesidadAlimentacion.fechaDeCuracion"
        type="date"
        :center-text="true"
      />
    </div>

    <p class="h-max mb-1.5">Balance parcial por turno</p>
    <VInputText
      class="w-2/6 mb-3"
      v-model="NecesidadAlimentacion.balanceParcial"
      type="text"
      label="+"
      label-position="side"
    />
    <VInputText
      class="w-2/6 mb-3"
      v-model="NecesidadAlimentacion.balanceParcial"
      type="text"
      label="-"
      label-position="side"
    />
    <VInputRadio
      v-model="NecesidadAlimentacion.balanceParcial"
      value="Neutro"
      identifier="Balance parcial por turno"
      class="w-max mb-3"
    />
    <div class="flex items-end">
      <VInputText
        class="w-full mr-8"
        v-model="NecesidadAlimentacion.datosSubjetivosBalanceParcial"
        type="text"
        label="Datos subjetivos"
        label-position="top"
      />
      <VInputRadio
        v-model="NecesidadAlimentacion.datosSubjetivosBalanceParcial"
        value=""
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="handleInputChangeOne"
      />
    </div>
  </div>
</template>

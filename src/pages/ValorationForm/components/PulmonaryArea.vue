<script setup lang="ts">
import { computed, ref, watch } from "vue";
import VInputText from "@/components/VInputText.vue";
import VInputRadio from "@/components/VInputRadio.vue";
import VSelect from "@/components/VSelect.vue";

const areaPulmonar = ref<{
  frecuenciaRespiratoria: number | null;
  dificultadRespiratoria:
    | "Apnea"
    | "Disnea en reposo"
    | "Disnea en esfuerzo"
    | null;
  SPO2: number | null;
  secrecionesBronquiales: boolean | null;
  secrecionesBronquialesCaracteristicas:
    | "Blancas hialinas escasas"
    | "Blancas hialinas abundantes"
    | "Blancas hialinas espesas escasas"
    | "Blancas hialinas espesas abundantes"
    | "Amarillas purolentas espesas escasas"
    | "Amarillas purolentas espesas abundantes"
    | "Hematicas esacasas"
    | "Hematicas abundantes"
    | null;
  dificultadExpectoración: boolean | null;
  datosSubjetivosDificultadExpectoracion: string | null;
  ruidosRespiratorios: "Normales" | "Anormales" | null;
  tiposDeRuidosRespiratoriosAnormales:
    | "Vesicular"
    | "Broncovesicular"
    | "Estertores"
    | "Sibilancias"
    | "Roce pleural"
    | null;
  datosSubjetivosRuidosRespiratorios: string | null;
  suplementoDeO2: boolean | null;
  nebulizador: number | null;
  puntasNasales: number | null;
  mascarillaSimple: number | null;
  mascarillaConReservorio: number | null;
  ventilacionMecanica: "Invasiva" | "No invasiva" | "Valores dinamicos" | null;
  modalidadVM: "AC - V" | "AC - P" | "SIMV" | "CPAP" | null;
  volumenCorrienteVM: number | null;
  fio2VM: number | null;
  flujoVM: number | null;
  presionSoporteVM: number | null;
  PEEPVM: number | null;
  sensibilidadVM: number | null;
  horaPerfilDeGases: string | null;
  pHPerfilDeGases: number | null;
  PO2PerfilDeGases: number | null;
  HCO3PerfilDeGases: number | null;
  PCO2PerfilDeGases: number | null;
  lactatoPerfilDeGases: number | null;
  glucosaPerfilDeGases: number | null;
  electrolitoSodioPerfilDeGases: number | null;
  electrolitoPotasioPerfilDeGases: number | null;
  electrolitoCalcioPerfilDeGases: number | null;
  encimasCardiacas: string | null;
  otrosLaboratorios: string | null;
  controlRadiologico:
    | "Congestion pulmonar"
    | "Infiltrados"
    | "Foco neumónico"
    | "Derrame"
    | null;
  datosSubjetivosControlRadiologico: string | null;
}>({
  frecuenciaRespiratoria: null,
  dificultadRespiratoria: null,
  SPO2: null,
  secrecionesBronquiales: null,
  secrecionesBronquialesCaracteristicas: null,
  dificultadExpectoración: null,
  datosSubjetivosDificultadExpectoracion: null,
  ruidosRespiratorios: null,
  tiposDeRuidosRespiratoriosAnormales: null,
  datosSubjetivosRuidosRespiratorios: null,
  suplementoDeO2: null,
  nebulizador: null,
  puntasNasales: null,
  mascarillaSimple: null,
  mascarillaConReservorio: null,
  ventilacionMecanica: null,
  modalidadVM: null,
  volumenCorrienteVM: null,
  fio2VM: null,
  flujoVM: null,
  presionSoporteVM: null,
  PEEPVM: null,
  sensibilidadVM: null,
  horaPerfilDeGases: null,
  pHPerfilDeGases: null,
  PO2PerfilDeGases: null,
  HCO3PerfilDeGases: null,
  PCO2PerfilDeGases: null,
  lactatoPerfilDeGases: null,
  glucosaPerfilDeGases: null,
  electrolitoSodioPerfilDeGases: null,
  electrolitoPotasioPerfilDeGases: null,
  electrolitoCalcioPerfilDeGases: null,
  encimasCardiacas: null,
  otrosLaboratorios: null,
  controlRadiologico: null,
  datosSubjetivosControlRadiologico: null,
});

const selectedBronchialSecretion = ref<
  | "Blancas hialinas escasas"
  | "Blancas hialinas abundantes"
  | "Blancas hialinas espesas escasas"
  | "Blancas hialinas espesas abundantes"
  | "Amarillas purolentas espesas escasas"
  | "Amarillas purolentas espesas abundantes"
  | "Hematicas esacasas"
  | "Hematicas abundantes"
  | null
>(null);

const hasDifficultyExpectoratingSubjectiveData = ref<boolean | null>(null);
const difficultyExpectoratingSubjectiveData = ref<string | null>(null);

const hasRespiratorySoundSubjectiveData = ref<boolean | null>(null);
const respiratorySoundSubjectiveData = ref<string | null>(null);

const respiratorySoundType = ref<
  | "Vesicular"
  | "Broncovesicular"
  | "Estertores"
  | "Sibilancias"
  | "Roce pleural"
  | null
>(null);

const selectedRadiologicControl = ref<
  | "Congestion pulmonar"
  | "Infiltrados"
  | "Foco neumónico"
  | "Derrame"
  | "N/A"
  | null
>(null);

const nebulizerValue = ref<number | null>(null);
const hasNebulizer = ref<boolean | null>(null);

const nasalCannulaValue = ref<number | null>(null);
const hasNasalCannula = ref<boolean | null>(null);

const simpleFaceMaskValue = ref<number | null>(null);
const hasSimpleFaceMask = ref<boolean | null>(null);

const nonRebreatherMaskValue = ref<number | null>(null);
const hasNonRebreatherMask = ref<boolean | null>(null);

const glucoseValue = ref<number | null>(null);
const hasGlucose = ref<"N/A" | null>(null);

const NaElectrolyteValue = ref<number | null>(null);
const hasNaElectrolyte = ref<"N/A" | null>(null);

const KElectrolyteValue = ref<number | null>(null);
const hasKElectrolyte = ref<"N/A" | null>(null);

const CaElectrolyteValue = ref<number | null>(null);
const hasCaElectrolyte = ref<"N/A" | null>(null);

const bronchialSecretionsOptions = [
  "Blancas hialinas escasas",
  "Blancas hialinas abundantes",
  "Blancas hialinas espesas escasas",
  "Blancas hialinas espesas abundantes",
  "Amarillas purolentas espesas escasas",
  "Amarillas purolentas espesas abundantes",
  "Hematicas esacasas",
  "Hematicas abundantes",
];

const modalidadOptions = ["AC - V", "AC - P", "SIMV", "CPAP"];

const secrecionesBronquialesCaracteristicas = computed({
  get() {
    return !areaPulmonar.value.secrecionesBronquiales
      ? null
      : selectedBronchialSecretion.value;
  },
  set(value) {
    selectedBronchialSecretion.value = value ? value : null;
  },
});

const datosSubjetivosDificultadExpectoración = computed({
  get() {
    return hasDifficultyExpectoratingSubjectiveData.value === false
      ? null
      : difficultyExpectoratingSubjectiveData.value;
  },
  set(value) {
    difficultyExpectoratingSubjectiveData.value = !value ? null : value;
  },
});

const datosSubjetivosRuidosRespiratorios = computed({
  get() {
    return hasRespiratorySoundSubjectiveData.value === false
      ? null
      : respiratorySoundSubjectiveData.value;
  },
  set(value) {
    respiratorySoundSubjectiveData.value = !value ? null : value;
  },
});

const repiratorySound = computed(() =>
  areaPulmonar.value.ruidosRespiratorios === "Anormales"
    ? respiratorySoundType.value
    : null
);

const nebulizer = computed({
  get() {
    return hasNebulizer.value ? nebulizerValue.value : null;
  },
  set(value) {
    nebulizerValue.value = value;
  },
});

const nasalCannula = computed({
  get() {
    return hasNasalCannula.value ? nasalCannulaValue.value : null;
  },
  set(value) {
    nasalCannulaValue.value = value;
  },
});

const simpleFaceMask = computed({
  get() {
    return hasSimpleFaceMask.value ? simpleFaceMaskValue.value : null;
  },
  set(value) {
    simpleFaceMaskValue.value = value;
  },
});

const nonRebreatherMask = computed({
  get() {
    return hasNonRebreatherMask.value ? nonRebreatherMaskValue.value : null;
  },
  set(value) {
    nonRebreatherMaskValue.value = value;
  },
});

const glucose = computed({
  get() {
    return hasGlucose.value ? null : glucoseValue.value;
  },
  set(value) {
    glucoseValue.value = value;
  },
});

const NaElectrolyte = computed({
  get() {
    return hasNaElectrolyte.value ? null : NaElectrolyteValue.value;
  },
  set(value) {
    NaElectrolyteValue.value = value;
  },
});

const KElectrolyte = computed({
  get() {
    return hasKElectrolyte.value ? null : KElectrolyteValue.value;
  },
  set(value) {
    KElectrolyteValue.value = value;
  },
});

const CaElectrolyte = computed({
  get() {
    return hasCaElectrolyte.value ? null : CaElectrolyteValue.value;
  },
  set(value) {
    CaElectrolyteValue.value = value;
  },
});

function validateValue(value: number | null): number | null {
  return !value
    ? null
    : value > 100
    ? Math.floor(value / 10)
    : value < 0
    ? null
    : value;
}

function validateSPO2() {
  areaPulmonar.value.SPO2 = validateValue(areaPulmonar.value.SPO2);
}

function validateFio2() {
  areaPulmonar.value.fio2VM = validateValue(areaPulmonar.value.fio2VM);
}

function validateSensibilitie() {
  areaPulmonar.value.sensibilidadVM = validateValue(
    areaPulmonar.value.sensibilidadVM
  );
}

watch(
  [
    secrecionesBronquialesCaracteristicas,
    datosSubjetivosDificultadExpectoración,
    datosSubjetivosRuidosRespiratorios,
    repiratorySound,
    selectedRadiologicControl,
    nebulizer,
    nasalCannula,
    simpleFaceMask,
    nonRebreatherMask,
    glucose,
    NaElectrolyte,
    KElectrolyte,
    CaElectrolyte,
  ],
  ([
    secrecionesBronquialesCaracteristicasValue,
    datosSubjetivosDificultadExpectoracionValue,
    datosSubjetivosRuidosRespiratoriosValue,
    repiratorySoundValue,
    selectedRadiologicControlValue,
    nebulizerValue,
    nasalCannulaValue,
    simpleFaceMaskValue,
    nonRebreatherMaskValue,
    glucoseValue,
    NaElectrolyteValue,
    KElectrolyteValue,
    CaElectrolyteValue,
  ]) => {
    areaPulmonar.value.secrecionesBronquialesCaracteristicas =
      secrecionesBronquialesCaracteristicasValue;
    areaPulmonar.value.datosSubjetivosDificultadExpectoracion =
      datosSubjetivosDificultadExpectoracionValue;
    areaPulmonar.value.datosSubjetivosRuidosRespiratorios =
      datosSubjetivosRuidosRespiratoriosValue;
    areaPulmonar.value.tiposDeRuidosRespiratoriosAnormales =
      repiratorySoundValue;
    areaPulmonar.value.controlRadiologico =
      selectedRadiologicControlValue === "N/A"
        ? null
        : selectedRadiologicControlValue;
    areaPulmonar.value.nebulizador = nebulizerValue;
    areaPulmonar.value.puntasNasales = nasalCannulaValue;
    areaPulmonar.value.mascarillaSimple = simpleFaceMaskValue;
    areaPulmonar.value.mascarillaConReservorio = nonRebreatherMaskValue;
    areaPulmonar.value.glucosaPerfilDeGases = glucoseValue;
    areaPulmonar.value.electrolitoSodioPerfilDeGases = NaElectrolyteValue;
    areaPulmonar.value.electrolitoPotasioPerfilDeGases = KElectrolyteValue;
    areaPulmonar.value.electrolitoCalcioPerfilDeGases = CaElectrolyteValue;
  }
);
</script>
<template>
  <h1 class="font-medium text-2xl mb-6">Área pulmonar</h1>
  <VInputText
    v-model="areaPulmonar.frecuenciaRespiratoria"
    type="number"
    label="FR"
    label-position="side"
    after-text="x min"
    :center-text="true"
    class="w-36 mb-3"
  />
  <p class="text-stone-500 h-max mb-1.5">Dificultad para respirar</p>
  <div class="flex gap-x-12 mb-3">
    <VInputRadio
      v-model="areaPulmonar.dificultadRespiratoria"
      value="Apnea"
      label="Apnea"
    />
    <VInputRadio
      v-model="areaPulmonar.dificultadRespiratoria"
      value="Disnea en reposo"
      label="Disnea en reposo"
    />
    <VInputRadio
      v-model="areaPulmonar.dificultadRespiratoria"
      value="Disnea en esfuerzo"
      label="Disnea en esfuerzo"
    />
  </div>
  <VInputText
    v-model="areaPulmonar.SPO2"
    type="number"
    label="SPO2"
    label-position="side"
    unit="%"
    :center-text="true"
    class="mb-3 w-32"
    @input="validateSPO2()"
  />
  <p class="text-stone-500 h-max mb-1.5">Secreciones bronquiales</p>
  <div class="flex gap-x-12 mb-3">
    <VInputRadio
      v-model="areaPulmonar.secrecionesBronquiales"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaPulmonar.secrecionesBronquiales"
      :value="false"
      label="No"
    />
    <VSelect
      v-model="secrecionesBronquialesCaracteristicas"
      :options="bronchialSecretionsOptions"
      label="Características"
      label-position="side"
      class="w-full"
      :disabled="!areaPulmonar.secrecionesBronquiales"
    />
  </div>
  <p class="text-stone-500 h-max mb-1.5">Dificultad para la expectoración</p>
  <div class="flex gap-x-12 mb-3">
    <VInputRadio
      v-model="areaPulmonar.dificultadExpectoración"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaPulmonar.dificultadExpectoración"
      :value="false"
      label="No"
    />
  </div>
  <div class="flex items-end mb-3">
    <VInputText
      v-model="datosSubjetivosDificultadExpectoración"
      type="text"
      label="Datos subjetivos"
      label-position="top"
      class="w-full mr-8"
      :disabled="hasDifficultyExpectoratingSubjectiveData === false"
    />
    <VInputRadio
      v-model="hasDifficultyExpectoratingSubjectiveData"
      :value="false"
      label="N/A"
    />
  </div>
  <p class="text-stone-500 h-max mb-1.5">Ruidos respiratorios</p>
  <div class="grid grid-cols-4 grid-rows-1 mb-3">
    <VInputRadio
      v-model="areaPulmonar.ruidosRespiratorios"
      value="Normales"
      label="Normales"
    />
    <VInputRadio
      v-model="areaPulmonar.ruidosRespiratorios"
      value="Anormales"
      label="Anormales"
    />
  </div>
  <Transition name="expand">
    <div
      v-if="areaPulmonar.ruidosRespiratorios == 'Anormales'"
      class="grid grid-cols-4 grid-rows-1"
    >
      <div class="col-start-2">
        <VInputRadio
          v-model="respiratorySoundType"
          value="Vesicular"
          class="mb-3"
        />
        <VInputRadio
          v-model="respiratorySoundType"
          value="Broncovesicular"
          class="mb-3"
        />
        <VInputRadio
          v-model="respiratorySoundType"
          value="Estertores"
          class="mb-3"
        />
        <VInputRadio
          v-model="respiratorySoundType"
          value="Sibilancias"
          class="mb-3"
        />
        <VInputRadio
          v-model="respiratorySoundType"
          value="Roce pleural"
          class="mb-3"
        />
      </div></div
  ></Transition>
  <div class="flex items-end mb-3">
    <VInputText
      v-model="datosSubjetivosRuidosRespiratorios"
      type="text"
      label="Datos subjetivos"
      label-position="top"
      class="w-full mr-8"
      :disabled="hasRespiratorySoundSubjectiveData === false"
    />
    <VInputRadio
      v-model="hasRespiratorySoundSubjectiveData"
      :value="false"
      label="N/A"
    />
  </div>
  <div class="flex gap-x-12 items-center mb-3">
    <p class="text-stone-500 h-max inline-block">Suplemento de O2</p>
    <VInputRadio
      v-model="areaPulmonar.suplementoDeO2"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaPulmonar.suplementoDeO2"
      :value="false"
      label="No"
    />
  </div>
  <div class="grid grid-rows-1 grid-cols-2 mb-3">
    <div class="flex gap-x-3">
      <VInputRadio
        v-model="hasNebulizer"
        :value="true"
        label="Nebulizador"
      /><VInputText
        v-model="nebulizer"
        type="number"
        after-text="lts. x min."
        :center-text="true"
        :disabled="!hasNebulizer"
        class="w-32"
      />
    </div>
    <div class="flex gap-x-3">
      <VInputRadio
        v-model="hasNasalCannula"
        :value="true"
        label="Puntas nasales"
      /><VInputText
        v-model="nasalCannula"
        type="number"
        after-text="lts. x min."
        :center-text="true"
        :disabled="!hasNasalCannula"
        class="w-32"
      />
    </div>
  </div>
  <div class="flex gap-x-3 mb-3">
    <VInputRadio
      v-model="hasSimpleFaceMask"
      :value="true"
      label="Mascarilla simple"
    /><VInputText
      v-model="simpleFaceMask"
      type="number"
      after-text="lts. x min."
      :center-text="true"
      :disabled="!hasSimpleFaceMask"
      class="w-32"
    />
  </div>
  <div class="flex gap-x-3 mb-3">
    <VInputRadio
      v-model="hasNonRebreatherMask"
      :value="true"
      label="Mascarilla con reservorio"
    /><VInputText
      v-model="nonRebreatherMask"
      type="number"
      after-text="lts. x min."
      :center-text="true"
      :disabled="!hasNonRebreatherMask"
      class="w-32"
    />
  </div>
  <p class="text-stone-500 h-max mb-1.5">Ventilación mecánica</p>
  <div class="flex gap-x-12 mb-3">
    <VInputRadio v-model="areaPulmonar.ventilacionMecanica" value="Invasiva" />
    <VInputRadio
      v-model="areaPulmonar.ventilacionMecanica"
      value="No invasiva"
    />
    <VInputRadio
      v-model="areaPulmonar.ventilacionMecanica"
      value="Valores dinamicos"
      label="Valores dinámicos"
    />
  </div>
  <div class="flex gap-x-12 mb-3 items-center">
    <p class="text-stone-500 h-max inline-block min-w-max">
      No invasiva # de cánula
    </p>
    <VSelect
      v-model="areaPulmonar.modalidadVM"
      :options="modalidadOptions"
      label="Modalidad"
      label-position="side"
      class="w-full"
    />
  </div>
  <div class="flex flex-wrap gap-x-12">
    <VInputText
      v-model="areaPulmonar.volumenCorrienteVM"
      type="number"
      label="Volumen corriente"
      label-position="side"
      :center-text="true"
      after-text="ml"
      class="mb-3"
      input-width="28"
    />
    <VInputText
      v-model="areaPulmonar.fio2VM"
      type="number"
      label="Fio2"
      label-position="side"
      :center-text="true"
      after-text="%"
      class="mb-3"
      input-width="28"
      @input="validateFio2()"
    />
    <VInputText
      v-model="areaPulmonar.flujoVM"
      type="number"
      label="Flujo"
      label-position="side"
      :center-text="true"
      after-text="lts. / min."
      class="mb-3"
      input-width="28"
    />
    <VInputText
      v-model="areaPulmonar.presionSoporteVM"
      type="number"
      label="Presión soporte"
      label-position="side"
      :center-text="true"
      after-text="cm H2O"
      class="mb-3"
      input-width="28"
    />
    <VInputText
      v-model="areaPulmonar.PEEPVM"
      type="number"
      label="PEEP"
      label-position="side"
      :center-text="true"
      after-text="cm H2O"
      class="mb-3"
      input-width="28"
    />
    <VInputText
      v-model="areaPulmonar.sensibilidadVM"
      type="number"
      label="Sensibilidad"
      label-position="side"
      :center-text="true"
      after-text="%"
      class="mb-3"
      input-width="28"
      @input="validateSensibilitie()"
    />
  </div>
  <p class="text-stone-500 h-max mb-3">Perfil de gases</p>
  <div class="flex items-center mb-3">
    <label class="text-stone-500 mr-3 min-w-max">Hora</label>
    <input
      v-model="areaPulmonar.horaPerfilDeGases"
      type="time"
      class="text-stone-500 w-28 p-1 h-9 outline-none border bg-white border-stone-500 rounded-md text-center appearance-none bg-transparent hover:cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-time-picker-indicator]:hidden [&::-moz-calendar-picker-indicator]:hidden"
    />
  </div>
  <div class="flex flex-wrap gap-x-12">
    <VInputText
      v-model="areaPulmonar.pHPerfilDeGases"
      type="number"
      label="pH"
      label-position="side"
      input-width="16"
      class="mb-3"
      :center-text="true"
    />
    <VInputText
      v-model="areaPulmonar.PO2PerfilDeGases"
      type="number"
      label="PO2"
      label-position="side"
      after-text="mmHg"
      input-width="16"
      class="mb-3"
      :center-text="true"
    />
    <VInputText
      v-model="areaPulmonar.HCO3PerfilDeGases"
      type="number"
      label="HCO3"
      label-position="side"
      after-text="mEq/1"
      input-width="16"
      class="mb-3"
      :center-text="true"
    />
    <VInputText
      v-model="areaPulmonar.PCO2PerfilDeGases"
      type="number"
      label="PCO2"
      label-position="side"
      after-text="mmHg"
      input-width="16"
      class="mb-3"
      :center-text="true"
    />
    <VInputText
      v-model="areaPulmonar.lactatoPerfilDeGases"
      type="number"
      label="Lactato"
      label-position="side"
      input-width="16"
      class="mb-3"
      :center-text="true"
    />
    <div class="flex gap-x-12">
      <VInputText
        v-model="glucose"
        type="number"
        label="Glucosa"
        label-position="side"
        after-text="mg/dl"
        input-width="16"
        :disabled="hasGlucose == 'N/A'"
        class="mb-3"
        :center-text="true"
      />
      <VInputRadio v-model="hasGlucose" value="N/A" class="mb-3" />
      <VInputText
        v-model="NaElectrolyte"
        type="number"
        label="ES Na"
        label-position="side"
        after-text="mEq"
        input-width="16"
        :disabled="hasNaElectrolyte == 'N/A'"
        class="mb-3"
        :center-text="true"
      />
      <VInputRadio v-model="hasNaElectrolyte" value="N/A" class="mb-3" />
    </div>
    <div class="flex gap-x-12">
      <VInputText
        v-model="KElectrolyte"
        type="number"
        label="K"
        label-position="side"
        after-text="mEq"
        input-width="16"
        :disabled="hasKElectrolyte == 'N/A'"
        class="mb-3"
        :center-text="true"
      />
      <VInputRadio v-model="hasKElectrolyte" value="N/A" class="mb-3" />
      <VInputText
        v-model="CaElectrolyte"
        type="number"
        label="Ca"
        label-position="side"
        input-width="16"
        :disabled="hasCaElectrolyte == 'N/A'"
        class="mb-3"
        :center-text="true"
      />
      <VInputRadio v-model="hasCaElectrolyte" value="N/A" class="mb-3" />
    </div>
  </div>
  <VInputText
    v-model="areaPulmonar.encimasCardiacas"
    type="text"
    label="Encimas cardiacas"
    label-position="top"
    class="mb-3"
  />
  <VInputText
    v-model="areaPulmonar.otrosLaboratorios"
    type="text"
    label="Otros laboratorios"
    label-position="top"
    class="mb-3"
  />
  <p class="text-stone-500 h-max mb-1.5">Control radiológico</p>
  <table>
    <tr>
      <td>
        <VInputRadio
          v-model="selectedRadiologicControl"
          value="Congestion pulmonar"
          class="mr-12 mb-3"
        />
      </td>
      <td>
        <VInputRadio
          v-model="selectedRadiologicControl"
          value="Infiltrados"
          class="mr-12 mb-3"
        />
      </td>
      <td>
        <VInputRadio
          v-model="selectedRadiologicControl"
          value="N/A"
          class="mr-12 mb-3"
        />
      </td>
    </tr>
    <tr>
      <td>
        <VInputRadio
          v-model="selectedRadiologicControl"
          value="Foco neumónico"
          class="mr-12 mb-3"
        />
      </td>
      <td>
        <VInputRadio
          v-model="selectedRadiologicControl"
          value="Derrame"
          class="mr-12 mb-3"
        />
      </td>
    </tr>
  </table>
  <VInputText
    v-model="areaPulmonar.datosSubjetivosControlRadiologico"
    type="text"
    label="Datos subjetivos"
    label-position="top"
    class="mb-3"
  />
</template>

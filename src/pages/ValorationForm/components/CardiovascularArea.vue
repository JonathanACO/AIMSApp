<script setup lang="ts">
import { computed, ref, watch } from "vue";
import VInputText from "@/components/VInputText.vue";
import VInputRadio from "@/components/VInputRadio.vue";
import ArterialTensionInput from "./ArterialTensionInput.vue";

const areaCardiovascular = ref<{
  frecuenciaCardiaca: number | null;
  tensionArterialSistolica: number | null;
  tensionArterialDiastolica: number | null;
  apoyoDeAminas: boolean | null;
  apoyoDeAminasEspecificado: string | null;
  apoyoDeInotropicos: boolean | null;
  apoyoDeInotropicosEspecificado: string | null;
  tiposDePulso:
    | "Braquial"
    | "Radial"
    | "Carotideo"
    | "Popliteo"
    | "Pedio"
    | "Femoral"
    | null;
  dolorPrecordial: number | null;
  miembroSuperior: number | null;
  miembroInferior: number | null;
  ingurgitacionYugular: boolean | null;
  hepatomegalia: boolean | null;
  edema: boolean | null;
  sitioDelEdema:
    | "Miembros inferiores"
    | "Miembros superiores"
    | "Otro"
    | string
    | null;
  tipoDeEdema: "+" | "++" | "+++" | "++++" | null;
  marcapasos: boolean | null;
  tipoDeMarcapasos: "Temporal" | "Definitivo" | null;
  frecuenciaMarcapasos: number | null;
  sensibilidadMarcapasos: number | null;
  datosSubjetivosMarcapasos: string | null;
  ritmoTrazoElectrocardiografico: "Normal" | "Anormal" | null;
  ritmoEspecífico:
    | "Ritmo sinusal"
    | "Bradicardia sinusal"
    | "Asistolia"
    | "Taquicardia sinusal"
    | "Dorsal de pointes"
    | "Taquicardia ventricular"
    | "Bloqueo de primer grado"
    | "Fibrilación auricular"
    | "Bloqueo de segundo grado"
    | "Fibrilación ventricular"
    | "Bloqueo de tercer grado"
    | "Flutter auricular"
    | "Actividad eléctrica sin pulso"
    | "Flutter ventricular"
    | null;
}>({
  frecuenciaCardiaca: null,
  tensionArterialSistolica: null,
  tensionArterialDiastolica: null,
  apoyoDeAminas: null,
  apoyoDeAminasEspecificado: null,
  apoyoDeInotropicos: null,
  apoyoDeInotropicosEspecificado: null,
  tiposDePulso: null,
  dolorPrecordial: null,
  miembroSuperior: null,
  miembroInferior: null,
  ingurgitacionYugular: null,
  hepatomegalia: null,
  edema: null,
  sitioDelEdema: null,
  tipoDeEdema: null,
  marcapasos: null,
  tipoDeMarcapasos: null,
  frecuenciaMarcapasos: null,
  sensibilidadMarcapasos: null,
  datosSubjetivosMarcapasos: null,
  ritmoTrazoElectrocardiografico: null,
  ritmoEspecífico: null,
});

const apoyoAminasEspecificado = ref<string | null>(null);
const apoyoInotropicosEspecificado = ref<string | null>(null);
const hasPainScale = ref<false | null>(null);
const painScaleNumber = ref<number | null>(null);
const edemaPlace = ref<string | null>(null);
const specificPlace = ref<string | null>(null);
const hasSubjectiveData = ref<boolean | null>(null);
const subjectiveData = ref<string | null>(null);
const specificNormalRythm = ref<"Ritmo sinusal" | null>(null);
const specificAnormalRythm = ref<
  | "Bradicardia sinusal"
  | "Asistolia"
  | "Taquicardia sinusal"
  | "Dorsal de pointes"
  | "Taquicardia ventricular"
  | "Bloqueo de primer grado"
  | "Fibrilación auricular"
  | "Bloqueo de segundo grado"
  | "Fibrilación ventricular"
  | "Bloqueo de tercer grado"
  | "Flutter auricular"
  | "Actividad eléctrica sin pulso"
  | "Flutter ventricular"
  | null
>(null);
const edemaClasification = ref<"+" | "++" | "+++" | "++++" | null>(null);
const isNormalRythm = ref<boolean>(false);
const isAnormalRythm = ref<boolean>(false);
const waitingAnimation = ref<any>(null);

const edematype = computed(() => {
  return !selectedEdemaPlace ? null : edemaClasification.value;
});

const apoyoAminas = computed({
  get() {
    return !areaCardiovascular.value.apoyoDeAminas
      ? null
      : apoyoAminasEspecificado.value;
  },
  set(value) {
    apoyoAminasEspecificado.value = value !== "" ? value : null;
  },
});

const apoyoInotropicos = computed({
  get() {
    return !areaCardiovascular.value.apoyoDeInotropicos
      ? null
      : apoyoInotropicosEspecificado.value;
  },
  set(value) {
    apoyoInotropicosEspecificado.value = value !== "" ? value : null;
  },
});

const painScale = computed({
  get() {
    return hasPainScale.value === false ? null : painScaleNumber.value;
  },
  set(value) {
    painScaleNumber.value = !value ? null : value;
  },
});

const tensionArterialMedia = computed(() =>
  areaCardiovascular.value.tensionArterialDiastolica &&
  areaCardiovascular.value.tensionArterialSistolica
    ? Math.floor(
        (areaCardiovascular.value.tensionArterialSistolica +
          2 * areaCardiovascular.value.tensionArterialDiastolica) /
          3
      )
    : null
);

const selectedEdemaPlace = computed(() => {
  if (edemaPlace.value && areaCardiovascular.value.edema) {
    if (edemaPlace.value !== "Otro" || !specificPlace.value)
      return edemaPlace.value;
    else return specificPlace.value;
  }
  return null;
});

const anotherPlace = computed({
  get() {
    if (edemaPlace.value == "Otro" && areaCardiovascular.value.edema)
      return specificPlace.value;
    else return null;
  },
  set(value) {
    specificPlace.value = !value ? null : value;
  },
});

const datosSubjetivos = computed({
  get() {
    return hasSubjectiveData.value === false ? null : subjectiveData.value;
  },
  set(value) {
    subjectiveData.value = !value ? null : value;
  },
});

const specificRythm = computed({
  get() {
    if (areaCardiovascular.value.ritmoTrazoElectrocardiografico === "Anormal")
      return specificAnormalRythm.value;
    if (areaCardiovascular.value.ritmoTrazoElectrocardiografico === "Normal")
      return specificNormalRythm.value;
    return null;
  },
  set(value) {
    if (
      areaCardiovascular.value.ritmoTrazoElectrocardiografico === "Anormal" &&
      value !== "Ritmo sinusal"
    )
      specificAnormalRythm.value = value;
    else if (
      (areaCardiovascular.value.ritmoTrazoElectrocardiografico === "Normal" &&
        value == "Ritmo sinusal") ||
      value == null
    )
      specificNormalRythm.value = value;
  },
});

function validateValue() {
  painScale.value = !painScale.value
    ? null
    : painScale.value > 10
    ? Math.floor(painScale.value / 10)
    : painScale.value < 1
    ? null
    : painScale.value;
}

watch(
  () => areaCardiovascular.value.ritmoTrazoElectrocardiografico,
  (value) => {
    clearTimeout(waitingAnimation.value);
    if (value) {
      if (value == "Anormal") {
        if (!isNormalRythm.value) isAnormalRythm.value = true;
        else {
          (isNormalRythm.value = false),
            (waitingAnimation.value = setTimeout(() => {
              isAnormalRythm.value = true;
            }, 1000));
        }
      } else {
        if (!isAnormalRythm.value) isNormalRythm.value = true;
        else {
          (isAnormalRythm.value = false),
            (waitingAnimation.value = setTimeout(() => {
              isNormalRythm.value = true;
            }, 1000));
        }
      }
    } else {
      isNormalRythm.value = false;
      isAnormalRythm.value = false;
    }
  }
);

watch(
  [
    edematype,
    specificRythm,
    datosSubjetivos,
    selectedEdemaPlace,
    painScale,
    apoyoInotropicos,
    apoyoAminas,
  ],
  ([
    edematypeValue,
    specificRythmValue,
    datosSubjetivosValue,
    selectedEdemaPlaceValue,
    painScaleValue,
    apoyoInotropicosValue,
    apoyoAminasValue,
  ]) => {
    areaCardiovascular.value = {
      ...areaCardiovascular.value,
      tipoDeEdema: edematypeValue,
      ritmoEspecífico: specificRythmValue,
      datosSubjetivosMarcapasos: datosSubjetivosValue,
      sitioDelEdema: selectedEdemaPlaceValue,
      dolorPrecordial: painScaleValue,
      apoyoDeInotropicosEspecificado: apoyoInotropicosValue,
      apoyoDeAminasEspecificado: apoyoAminasValue,
    };
  }
);
</script>

<template>
  <h1 class="font-medium text-2xl mb-3">Área Cardiovascular</h1>
  <table class="border-spacing-y-3 border-separate">
    <tr class="border border-transparent">
      <td>
        <p class="text-stone-500 h-max inline-block min-w-max">FC</p>
      </td>
      <td>
        <VInputText
          v-model="areaCardiovascular.frecuenciaCardiaca"
          type="number"
          after-text="latidos por minuto"
          input-width="16"
          :center-text="true"
        />
      </td>
    </tr>
    <tr class="border border-transparent">
      <td><p class="text-stone-500 h-max inline-block min-w-max">TA</p></td>
      <td>
        <ArterialTensionInput
          v-model:tension-arterial-sistolica="
            areaCardiovascular.tensionArterialSistolica
          "
          v-model:tension-arterial-diastolica="
            areaCardiovascular.tensionArterialDiastolica
          "
          after-text="mmHg"
        />
      </td>
    </tr>
    <tr class="border border-transparent">
      <td>
        <p class="text-stone-500 h-max inline-block min-w-max mr-3">TAM</p>
      </td>
      <td>
        <div class="flex items-center text-stone-500 w-fit">
          <div class="relative inline-flex items-center w-full">
            <div class="relative w-full">
              <input
                disabled
                :value="tensionArterialMedia"
                type="number"
                class="w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center p-1 h-9 outline-none border bg-white border-stone-500 rounded-md"
              />
            </div>
            <p class="ml-3 min-w-max">mmHg</p>
          </div>
        </div>
      </td>
    </tr>
  </table>
  <div class="flex items-center gap-x-12 mb-1.5">
    <p class="text-stone-500 h-max inline-block min-w-max">Apoyo de aminas</p>
    <VInputRadio
      v-model="areaCardiovascular.apoyoDeAminas"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaCardiovascular.apoyoDeAminas"
      :value="false"
      label="No"
    />
  </div>
  <div class="flex items-center gap-x-12 mb-3">
    <p class="text-stone-500 h-max inline-block min-w-max">Especificar</p>
    <VInputText
      v-model="apoyoAminas"
      type="text"
      label="Dosis"
      label-position="side"
      after-text="gamas/mcg/hr"
      :disabled="!areaCardiovascular.apoyoDeAminas"
    />
  </div>
  <div class="flex items-center gap-x-12 mb-1.5">
    <p class="text-stone-500 h-max inline-block min-w-max">
      Apoyo de inotròpicos
    </p>
    <VInputRadio
      v-model="areaCardiovascular.apoyoDeInotropicos"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaCardiovascular.apoyoDeInotropicos"
      :value="false"
      label="No"
    />
  </div>
  <div class="flex items-center gap-x-12 mb-3">
    <p class="text-stone-500 h-max inline-block min-w-max">Especificar</p>
    <VInputText
      v-model="apoyoInotropicos"
      type="text"
      label="Dosis"
      label-position="side"
      after-text="gamas/mcg/hr"
      :disabled="!areaCardiovascular.apoyoDeInotropicos"
    />
  </div>

  <p class="text-stone-500 h-max mb-1.5">Tipos de pulso</p>
  <table class="border-spacing-y-3 border-separate">
    <tr class="border border-transparent">
      <td>
        <VInputRadio
          v-model="areaCardiovascular.tiposDePulso"
          value="Braquial"
          class="mr-8"
        />
      </td>
      <td>
        <VInputRadio
          v-model="areaCardiovascular.tiposDePulso"
          value="Radial"
          class="mr-8"
        />
      </td>
      <td>
        <VInputRadio
          v-model="areaCardiovascular.tiposDePulso"
          value="Carotideo"
        />
      </td>
    </tr>
    <tr class="border border-transparent">
      <td>
        <VInputRadio
          v-model="areaCardiovascular.tiposDePulso"
          value="Popliteo"
          label="Poplíteo"
          class="mr-8"
        />
      </td>
      <td>
        <VInputRadio
          v-model="areaCardiovascular.tiposDePulso"
          value="Pedio"
          class="mr-8"
        />
      </td>
      <td>
        <VInputRadio
          v-model="areaCardiovascular.tiposDePulso"
          value="Femoral"
        />
      </td>
    </tr>
  </table>
  <div class="flex justify-center">
    <img
      src="../../../assets/images/pulseType.png"
      class="max-w-xl"
      alt="Tipos de pulso"
    />
  </div>
  <p class="text-stone-500 h-max mb-1.5">Dolor precordial</p>
  <div class="flex gap-x-8 mb-3">
    <VInputText
      v-model="painScale"
      type="number"
      label="Escala del 1 al 10"
      label-position="side"
      input-width="16"
      :center-text="true"
      :disabled="hasPainScale === false"
      class="w-fit"
      @input="validateValue()"
    />
    <VInputRadio v-model="hasPainScale" :value="false" label="N/A" />
  </div>
  <img src="../../../assets/images/dolorPrecordial.png" />
  <p class="text-stone-500 h-max mb-1.5">Llenado capilar</p>
  <div class="flex gap-x-8 mb-3">
    <VInputText
      v-model="areaCardiovascular.miembroSuperior"
      type="number"
      label="Miembro sup."
      label-position="side"
      after-text="seg"
      input-width="16"
      :center-text="true"
    />
    <VInputText
      v-model="areaCardiovascular.miembroInferior"
      type="number"
      label="Miembro inf."
      label-position="side"
      after-text="seg"
      input-width="16"
      :center-text="true"
    />
  </div>
  <div class="flex gap-x-12 items-center mb-3">
    <p class="text-stone-500 h-max inline-block">Ingurgitación yugular</p>
    <VInputRadio
      v-model="areaCardiovascular.ingurgitacionYugular"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaCardiovascular.ingurgitacionYugular"
      :value="false"
      label="No"
    />
    <p class="text-stone-500 h-max inline-block">Hepatomegalia</p>
    <VInputRadio
      v-model="areaCardiovascular.hepatomegalia"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaCardiovascular.hepatomegalia"
      :value="false"
      label="No"
    />
  </div>
  <div class="flex items-center mb-3">
    <p class="text-stone-500 h-max w-20 inline-block">Edema</p>

    <div class="flex gap-x-8">
      <VInputRadio
        v-model="areaCardiovascular.edema"
        :value="true"
        label="Sí"
      />
      <VInputRadio
        v-model="areaCardiovascular.edema"
        :value="false"
        label="No"
      />
    </div>
  </div>
  <Transition name="expand">
    <div class="ml-20 mb-3" v-if="areaCardiovascular.edema">
      <p class="text-stone-500 h-max mb-1.5">Sitio</p>
      <VInputRadio
        v-model="edemaPlace"
        value="Miembros inferiores"
        class="mb-3"
      />
      <VInputRadio
        v-model="edemaPlace"
        value="Miembros superiores"
        class="mb-3"
      />
      <div class="flex gap-x-8">
        <VInputRadio v-model="edemaPlace" value="Otro" />
        <VInputText
          v-model="anotherPlace"
          type="text"
          label="Especificar"
          label-position="side"
          input-width="44"
          :disabled="edemaPlace !== 'Otro'"
        />
      </div></div
  ></Transition>
  <Transition name="expand">
    <div class="flex gap-x-8 mb-3" v-if="selectedEdemaPlace">
      <VInputRadio v-model="edemaClasification" value="+" />
      <VInputRadio v-model="edemaClasification" value="++" />
      <VInputRadio v-model="edemaClasification" value="+++" />
      <VInputRadio v-model="edemaClasification" value="++++" /></div
  ></Transition>
  <div class="flex gap-x-8 mb-3 items-center">
    <p class="text-stone-500 h-max inline-block">Marcapaso</p>
    <VInputRadio
      v-model="areaCardiovascular.marcapasos"
      :value="true"
      label="Sí"
    />
    <VInputRadio
      v-model="areaCardiovascular.marcapasos"
      :value="false"
      label="No"
    />
  </div>
  <div class="flex gap-x-8 mb-3">
    <VInputRadio
      v-model="areaCardiovascular.tipoDeMarcapasos"
      value="Temporal"
    />
    <VInputRadio
      v-model="areaCardiovascular.tipoDeMarcapasos"
      value="Definitivo"
    />
  </div>
  <table class="border-collapse">
    <tr>
      <td class="text-stone-500 inline-block pt-1.5 mr-4">Frecuencia</td>
      <td>
        <VInputText
          v-model="areaCardiovascular.frecuenciaMarcapasos"
          type="number"
          :center-text="true"
          class="mb-3"
        />
      </td>
    </tr>
    <tr>
      <td class="text-stone-500 inline-block pt-1.5 mr-4">Sensibilidad</td>
      <td>
        <VInputText
          v-model="areaCardiovascular.sensibilidadMarcapasos"
          type="number"
          :center-text="true"
          class="mb-3"
        />
      </td>
    </tr>
  </table>
  <div class="flex items-end mb-3">
    <VInputText
      v-model="datosSubjetivos"
      type="text"
      label="Datos subjetivos(colocar zona anatómica en la que se encuentra fijada)"
      label-position="top"
      class="w-full mr-8"
      :disabled="hasSubjectiveData === false"
    />
    <VInputRadio v-model="hasSubjectiveData" :value="false" label="N/A" />
  </div>
  <p class="text-stone-500 h-max my-1.5">Trazo Electrocardiográfico</p>
  <p class="text-stone-500 h-max my-1.5">Ritmo</p>
  <div class="flex">
    <VInputRadio
      v-model="areaCardiovascular.ritmoTrazoElectrocardiografico"
      value="Normal"
      class="w-44"
    />

    <VInputRadio
      v-model="areaCardiovascular.ritmoTrazoElectrocardiografico"
      value="Anormal"
    />
  </div>
  <Transition name="expand">
    <VInputRadio
      v-if="isNormalRythm"
      v-model="specificRythm"
      value="Ritmo sinusal"
      class="mt-3"
    />
  </Transition>
  <Transition name="expand">
    <div v-if="isAnormalRythm" class="ml-44 grid grid-cols-2 mt-3">
      <VInputRadio
        v-model="specificRythm"
        value="Bradicardia sinusal"
        class="mb-3"
      />
      <VInputRadio v-model="specificRythm" value="Asistolia" class="mb-3" />
      <VInputRadio
        v-model="specificRythm"
        value="Taquicardia sinusal"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Dorsal de pointes"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Taquicardia ventricular"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Bloqueo de primer grado"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Fibrilación auricular"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Bloqueo de segundo grado"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Fibrilación ventricular"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Bloqueo de tercer grado"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Flutter auricular"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Actividad eléctrica sin pulso"
        class="mb-3"
      />
      <VInputRadio
        v-model="specificRythm"
        value="Flutter ventricular"
        class=""
      />
    </div>
  </Transition>
</template>

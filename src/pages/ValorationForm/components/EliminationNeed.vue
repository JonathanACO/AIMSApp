<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { computed, ref, watch } from "vue";

const necesidadDeEliminacion = ref<{
  frecuenciaPatronUrinario: number | null;
  caracteristicasNormalesPatronUrinario: boolean | null;
  caracteristicasPatronUrinario:
    | "Oliguria"
    | "Anuria"
    | "Poliuria"
    | "Disuria"
    | "Nicturia"
    | "Tenesmo"
    | "Incontinencia"
    | null;
  caracteristicasEspecificasPatronUrinario: string | null;
  coloracionPatronUrinario: "Normal" | "Anormal" | null;
  coloracionAnormal: "Hematurica" | "Colurica" | "Otro" | string | null;
  sondaVesical: boolean | null;
  calibreSondaVesical: number | null;
  cantidadH2O: number | null;
  fechaDeColocacion: Date | null;
  usoDeDiureticos: boolean | null;
  especificarUsoDiureticos: string | null;
  apoyoParcial:
    | "Acompanamiento al sanitario"
    | "Proporcionar comodo/orinal"
    | "Cambio de panal"
    | null;
  apoyoTotal: boolean | null;
  tratamientoSustitutivoRenal: boolean | null;
  tipoTratamientoSustitutivoRenal:
    | "Dialisis peritoneal"
    | "Hemodialisis"
    | null;
  datosSubjetivosSustitutivoRenal: string | null;
  frecuenciaPatronIntestinal: number | null;
  caracteristicasPatronIntestinal: "Normal" | "Anormal" | null;
  caracteristicaAnormalEspecifica:
    | "Estrenimiento"
    | "Diarrea"
    | "Incontinencia"
    | null;
  caracteristicaIndividual:
    | "Acolia"
    | "Melena"
    | "Mucoide"
    | "Pastosa"
    | "Fetida"
    | "Liquida con sangre fresca"
    | null;
  suplenciaIntestinal:
    | "Sin suplencia"
    | "Suplencia parcial"
    | "Suplencia total"
    | null;
  ostomias: string | null;
  datosSubjetivosPatronIntestinal: string | null;
}>({
  frecuenciaPatronUrinario: null,
  caracteristicasNormalesPatronUrinario: null,
  caracteristicasPatronUrinario: null,
  caracteristicasEspecificasPatronUrinario: null,
  coloracionPatronUrinario: null,
  coloracionAnormal: null,
  sondaVesical: null,
  calibreSondaVesical: null,
  cantidadH2O: null,
  fechaDeColocacion: null,
  usoDeDiureticos: null,
  especificarUsoDiureticos: null,
  apoyoParcial: null,
  apoyoTotal: null,
  tratamientoSustitutivoRenal: null,
  tipoTratamientoSustitutivoRenal: null,
  datosSubjetivosSustitutivoRenal: null,
  frecuenciaPatronIntestinal: null,
  caracteristicasPatronIntestinal: null,
  caracteristicaAnormalEspecifica: null,
  caracteristicaIndividual: null,
  suplenciaIntestinal: null,
  ostomias: null,
  datosSubjetivosPatronIntestinal: null,
});

const selectedNormalCharacteristic = ref<"Oliguria" | null>(null);
const selectedAnormalCharacteristic = ref<
  | "Anuria"
  | "Poliuria"
  | "Disuria"
  | "Nicturia"
  | "Tenesmo"
  | "Incontinencia"
  | null
>(null);
const urinarySpecificCharacteristics = ref<string | null>(null);
const selectedAnormalColoration = ref<
  "Hematurica" | "Colurica" | "Otro" | null
>(null);
const specificAnormalColoration = ref<string | null>(null);
const calibre = ref<number | null>(null);
const H2O = ref<number | null>(null);
const especificarUsoDiureticos = ref<string | null>(null);
const tratamientoSustitutivoRenalSeleccionado = ref<
  "Dialisis peritoneal" | "Hemodialisis" | null
>(null);
const sustitutivoRenalDatosSubjetivos = ref<string | null>(null);
const tieneDatosSubjetivosSustitutivoRenal = ref<false | null>(null);
const caracteristicaAnormalEspecificaSeleccionada = ref<
  "Estrenimiento" | "Diarrea" | "Incontinencia" | null
>(null);
const tieneDatosSubjetivosPatronIntestinal = ref<false | null>(null);
const patronIntestinalDatosSubjetivos = ref<string | null>(null);
const isNormalRythm = ref<boolean>(false);
const isAnormalRythm = ref<boolean>(false);
const waitingAnimation = ref<any>(null);

const urinaryPatternCharacteristics = computed(() => {
  if (
    necesidadDeEliminacion.value.caracteristicasNormalesPatronUrinario === false
  ) {
    return selectedAnormalCharacteristic.value;
  }
  if (necesidadDeEliminacion.value.caracteristicasNormalesPatronUrinario) {
    return selectedNormalCharacteristic.value;
  }
  return null;
});

const urinaryPatternSpecificCharacteristic = computed(() => {
  if (
    necesidadDeEliminacion.value.caracteristicasNormalesPatronUrinario !== null
  ) {
    return urinarySpecificCharacteristics.value || null;
  }
  return null;
});

const anormalColorationType = computed(() => {
  if (
    selectedAnormalColoration.value &&
    necesidadDeEliminacion.value.coloracionPatronUrinario === "Anormal"
  ) {
    return selectedAnormalColoration.value !== "Otro" ||
      !specificAnormalColoration.value
      ? selectedAnormalColoration.value
      : specificAnormalColoration.value;
  } else return null;
});

const calibreSondaVesical = computed(() => {
  return necesidadDeEliminacion.value.sondaVesical ? calibre.value : null;
});

const cantidadH2O = computed(() => {
  return necesidadDeEliminacion.value.sondaVesical ? H2O.value : null;
});

const usoDiureticosEspecificado = computed(() => {
  return necesidadDeEliminacion.value.usoDeDiureticos
    ? especificarUsoDiureticos.value
    : null;
});

const tipoTratamientoSustitutivoRenal = computed(() => {
  return necesidadDeEliminacion.value.tratamientoSustitutivoRenal
    ? tratamientoSustitutivoRenalSeleccionado.value
    : null;
});

const datosSubjetivosSustitutivoRenal = computed({
  get() {
    return !sustitutivoRenalDatosSubjetivos.value ||
      tieneDatosSubjetivosSustitutivoRenal.value === false
      ? null
      : sustitutivoRenalDatosSubjetivos.value;
  },
  set(value) {
    sustitutivoRenalDatosSubjetivos.value = !value ? null : value;
  },
});

const caracteristicaAnormalEspecifica = computed(() => {
  return necesidadDeEliminacion.value.caracteristicasPatronIntestinal ===
    "Anormal" && caracteristicaAnormalEspecificaSeleccionada.value
    ? caracteristicaAnormalEspecificaSeleccionada.value
    : null;
});

const datosSubjetivosPatronIntestinal = computed({
  get() {
    return !patronIntestinalDatosSubjetivos.value ||
      tieneDatosSubjetivosPatronIntestinal.value === false
      ? null
      : patronIntestinalDatosSubjetivos.value;
  },
  set(value) {
    patronIntestinalDatosSubjetivos.value = !value ? null : value;
  },
});

watch(
  [
    datosSubjetivosSustitutivoRenal,
    datosSubjetivosPatronIntestinal,
    caracteristicaAnormalEspecifica,
    tipoTratamientoSustitutivoRenal,
    usoDiureticosEspecificado,
    calibreSondaVesical,
    cantidadH2O,
    anormalColorationType,
    urinaryPatternSpecificCharacteristic,
    urinaryPatternCharacteristics,
  ],
  ([
    datosSubjetivosSustitutivoRenalVal,
    datosSubjetivosPatronIntestinalVal,
    caracteristicaAnormalEspecificaVal,
    tipoTratamientoSustitutivoRenalVal,
    usoDiureticosEspecificadoVal,
    calibreSondaVesicalVal,
    cantidadH2OVal,
    anormalColorationTypeVal,
    urinaryPatternSpecificCharacteristicVal,
    urinaryPatternCharacteristicsVal,
  ]) => {
    necesidadDeEliminacion.value.datosSubjetivosSustitutivoRenal =
      datosSubjetivosSustitutivoRenalVal;
    necesidadDeEliminacion.value.datosSubjetivosPatronIntestinal =
      datosSubjetivosPatronIntestinalVal;
    necesidadDeEliminacion.value.caracteristicaAnormalEspecifica =
      caracteristicaAnormalEspecificaVal;
    necesidadDeEliminacion.value.tipoTratamientoSustitutivoRenal =
      tipoTratamientoSustitutivoRenalVal;
    necesidadDeEliminacion.value.especificarUsoDiureticos =
      usoDiureticosEspecificadoVal;
    necesidadDeEliminacion.value.calibreSondaVesical = calibreSondaVesicalVal;
    necesidadDeEliminacion.value.cantidadH2O = cantidadH2OVal;
    necesidadDeEliminacion.value.coloracionAnormal = anormalColorationTypeVal;
    necesidadDeEliminacion.value.caracteristicasEspecificasPatronUrinario =
      urinaryPatternSpecificCharacteristicVal;
    necesidadDeEliminacion.value.caracteristicasPatronUrinario =
      urinaryPatternCharacteristicsVal;
  }
);
watch(anormalColorationType, (value) => {
  necesidadDeEliminacion.value.coloracionAnormal = value;
});

watch(
  () => necesidadDeEliminacion.value.caracteristicasNormalesPatronUrinario,
  (value) => {
    clearTimeout(waitingAnimation.value);
    if (value || value == false) {
      if (value == false) {
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
      v-model="necesidadDeEliminacion.frecuenciaPatronUrinario"
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
          <VInputRadio
            v-model="
              necesidadDeEliminacion.caracteristicasNormalesPatronUrinario
            "
            :value="true"
            label="Sí"
          />
          <VInputRadio
            v-model="
              necesidadDeEliminacion.caracteristicasNormalesPatronUrinario
            "
            :value="false"
            label="No"
          />
        </div>
        <div class="grid grid-cols-3">
          <div>
            <Transition name="expand">
              <VInputRadio
                v-if="isNormalRythm"
                v-model="selectedNormalCharacteristic"
                value="Oliguria"
            /></Transition>
          </div>
          <Transition name="expand">
            <div class="col-span-2 grid grid-cols-2" v-if="isAnormalRythm">
              <div>
                <VInputRadio
                  v-model="selectedAnormalCharacteristic"
                  value="Anuria"
                  class="mb-1.5"
                />
                <VInputRadio
                  v-model="selectedAnormalCharacteristic"
                  value="Poliuria"
                  class="mb-1.5"
                />
                <VInputRadio
                  v-model="selectedAnormalCharacteristic"
                  value="Disuria"
                />
              </div>
              <div>
                <VInputRadio
                  v-model="selectedAnormalCharacteristic"
                  value="Nicturia"
                  class="mb-1.5"
                />
                <VInputRadio
                  v-model="selectedAnormalCharacteristic"
                  value="Tenesmo"
                  class="mb-1.5"
                />
                <VInputRadio
                  v-model="selectedAnormalCharacteristic"
                  value="Incontinencia"
                />
              </div></div
          ></Transition>
        </div>
      </div>
      <Transition name="fade">
        <VInputText
          v-if="
            necesidadDeEliminacion.caracteristicasNormalesPatronUrinario ||
            necesidadDeEliminacion.caracteristicasNormalesPatronUrinario ==
              false
          "
          v-model="urinarySpecificCharacteristics"
          type="text"
          label="Características de la orina"
          label-position="top"
          class="w-1/3"
      /></Transition>
    </div>
    <p class="text-stone-500 h-max min-w-max mb-1.5">Coloración</p>
    <div class="mb-3">
      <div class="grid grid-cols-5">
        <VInputRadio
          v-model="necesidadDeEliminacion.coloracionPatronUrinario"
          value="Normal"
        />
        <VInputRadio
          v-model="necesidadDeEliminacion.coloracionPatronUrinario"
          value="Anormal"
        />
      </div>
      <Transition name="expand">
        <div
          v-if="necesidadDeEliminacion.coloracionPatronUrinario == 'Anormal'"
          class="grid grid-cols-5"
        >
          <div class="col-start-2 flex gap-x-10 col-span-4 my-1.5">
            <VInputRadio
              v-model="selectedAnormalColoration"
              value="Hematurica"
              label="Hematúrica"
            />
            <VInputRadio
              v-model="selectedAnormalColoration"
              value="Colurica"
              label="Colúrica"
            />
            <VInputRadio v-model="selectedAnormalColoration" value="Otro" />
          </div></div
      ></Transition>
      <Transition name="expand">
        <div
          v-if="
            necesidadDeEliminacion.coloracionPatronUrinario == 'Anormal' &&
            selectedAnormalColoration == 'Otro'
          "
          class="flex justify-end"
        >
          <VInputText
            v-model="specificAnormalColoration"
            type="text"
            label="Especificar"
            label-position="side"
          /></div
      ></Transition>
    </div>
    <div class="flex mb-3">
      <div class="flex items-center h-9 mr-10">
        <p class="text-stone-500 h-max min-w-max">Sonda vesical</p>
      </div>
      <div class="flex gap-x-28 flex-wrap">
        <VInputRadio
          v-model="necesidadDeEliminacion.sondaVesical"
          :value="true"
          label="Sí"
        />
        <VInputRadio
          v-model="necesidadDeEliminacion.sondaVesical"
          :value="false"
          label="No"
        />
        <Transition name="expand">
          <div v-if="necesidadDeEliminacion.sondaVesical" class="w-full">
            <VInputText
              v-model="calibre"
              type="number"
              label="Calibre"
              label-position="side"
              after-text="Fr"
              class="w-36 my-3"
              :center-text="true"
            />
            <VInputText
              v-model="H2O"
              type="number"
              label="Llenada con"
              label-position="side"
              after-text="ml H2O"
              class="w-56"
              :center-text="true"
            /></div
        ></Transition>
      </div>
    </div>
    <VInputText
      v-model="necesidadDeEliminacion.fechaDeColocacion"
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
        <VInputRadio
          v-model="necesidadDeEliminacion.usoDeDiureticos"
          :value="true"
          label="Sí"
        />
        <VInputRadio
          v-model="necesidadDeEliminacion.usoDeDiureticos"
          :value="false"
          label="No"
        />
        <Transition name="expand">
          <VInputText
            v-if="necesidadDeEliminacion.usoDeDiureticos"
            v-model="especificarUsoDiureticos"
            type="text"
            label="Especificar"
            label-position="side"
            class="w-56 mt-3"
        /></Transition>
      </div>
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">Apoyo parcial</p>
    <div class="flex flex-wrap gap-x-10 gap-y-3">
      <VInputRadio
        v-model="necesidadDeEliminacion.apoyoParcial"
        value="Acompanamiento al sanitario"
        label="Acompañamiento al sanitario"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.apoyoParcial"
        value="Proporcionar comodo/orinal"
        label="Proporcionar cómodo/orinal"
        class="mr-12"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.apoyoParcial"
        value="Cambio de panal"
        label="Cambio de pañal"
      />
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">Apoyo total</p>
    <div class="flex flex-wrap gap-x-10 gap-y-3">
      <VInputRadio
        v-model="necesidadDeEliminacion.apoyoTotal"
        :value="true"
        label="Sí"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.apoyoTotal"
        :value="false"
        label="No"
      />
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">
      Tratamiento Sustitutivo Renal
    </p>
    <div class="flex">
      <div class="w-2/3">
        <div class="grid grid-cols-2 mb-1.5">
          <VInputRadio
            v-model="necesidadDeEliminacion.tratamientoSustitutivoRenal"
            :value="true"
            label="Sí"
            class="mb-1.5"
          />
          <VInputRadio
            v-model="necesidadDeEliminacion.tratamientoSustitutivoRenal"
            :value="false"
            label="No"
          />
          <Transition name="expand">
            <div v-if="necesidadDeEliminacion.tratamientoSustitutivoRenal">
              <VInputRadio
                v-model="tratamientoSustitutivoRenalSeleccionado"
                value="Dialisis peritoneal"
                label="Diálisis peritoneal"
                class="mb-1.5"
              />
              <VInputRadio
                v-model="tratamientoSustitutivoRenalSeleccionado"
                value="Hemodialisis"
                label="Hemodiálisis"
                class="mb-1.5"
              /></div
          ></Transition>
        </div>
      </div>
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="datosSubjetivosSustitutivoRenal"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        :disabled="tieneDatosSubjetivosSustitutivoRenal == false"
      />
      <VInputRadio
        v-model="tieneDatosSubjetivosSustitutivoRenal"
        :value="false"
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
      />
    </div>

    <p class="text-stone-500 h-max min-w-max mb-1.5">Patrón intestinal</p>
    <VInputText
      v-model="necesidadDeEliminacion.frecuenciaPatronIntestinal"
      type="text"
      label="Frecuencias"
      label-position="side"
      after-text="veces al día"
      class="w-64 mb-3"
      :center-text="true"
    />

    <p class="text-stone-500 h-max min-w-max mb-1.5">Características</p>
    <div class="grid grid-cols-3">
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicasPatronIntestinal"
        value="Normal"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicasPatronIntestinal"
        value="Anormal"
      />
    </div>
    <Transition name="expand">
      <div
        v-if="
          necesidadDeEliminacion.caracteristicasPatronIntestinal == 'Anormal'
        "
        class="grid grid-cols-3 mt-1.5"
      >
        <div class="col-start-2">
          <VInputRadio
            v-model="caracteristicaAnormalEspecificaSeleccionada"
            value="Estrenimiento"
            label="Estreñimiento"
            class="mb-1.5"
          />
          <VInputRadio
            v-model="caracteristicaAnormalEspecificaSeleccionada"
            value="Diarrea"
            class="mb-1.5"
          />
          <VInputRadio
            v-model="caracteristicaAnormalEspecificaSeleccionada"
            value="Incontinencia"
          />
        </div></div
    ></Transition>

    <p class="text-stone-500 h-max mt-3 mb-1.5">Características</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicaIndividual"
        value="Acolia"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicaIndividual"
        value="Melena"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicaIndividual"
        value="Mucoide"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicaIndividual"
        value="Pastosa"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicaIndividual"
        value="Fetida"
        label="Fétida"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.caracteristicaIndividual"
        value="Liquida con sangre fresca"
        label="Líquida con sangre fresca"
        class="w-max"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Suplencia intestinal</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="necesidadDeEliminacion.suplenciaIntestinal"
        value="Sin suplencia"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.suplenciaIntestinal"
        value="Suplencia parcial"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeEliminacion.suplenciaIntestinal"
        value="Suplencia total"
        class="w-max"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Ostomías</p>
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="necesidadDeEliminacion.ostomias"
      type="text"
      label="Especificar"
      label-position="side"
    />

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="datosSubjetivosPatronIntestinal"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        :disabled="tieneDatosSubjetivosPatronIntestinal == false"
      />
      <VInputRadio
        v-model="tieneDatosSubjetivosPatronIntestinal"
        :value="false"
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
      />
    </div>
  </div>
</template>

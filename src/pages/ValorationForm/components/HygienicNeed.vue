<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { ref, computed, watch } from "vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { arrowForward } from "ionicons/icons";
import PatientStateTable from "./PatientStateTable.vue";
import FaillingRiskInfoTable from "./FaillingRiskInfoTable.vue";
import BradenScale from "./BradenScale.vue";

const necesidadDeHigiene = ref<{
  estadoDeLaPiel: string | null;
  especificarLesionEnPiel: string | null;
  coloracionDeLaPiel:
    | "Pálida"
    | "Robicunda"
    | "Marmórea"
    | "Ictérica"
    | "Equimosis"
    | "Hematomas"
    | "Cianótica"
    | null;
  dispositivoCateteres: boolean | null;
  dispositivoCVPC: boolean | null;
  dispositivoCVC: boolean | null;
  dispositivoSondas: boolean | null;
  dispositivoSondaVesical: boolean | null;
  dispositivoHeridas: boolean | null;
  dispositivoUPP: boolean | null;
  dispositivoFlictemas: boolean | null;
  // lugarDeDispositivos: {};
  puntuacionRiesgoCaidas:
    | {
        factorDeRiesgo: string;
        puntuacion: number;
      }[]
    | null;
  riesgoCaidas: "Alto" | "Mediano" | "Bajo" | null;
  puntuacionRiesgoUPP:
    | { factor: string; opcion: { valor: string; puntuacion: number } }[]
    | null;
  riesgoUPP: "Alto" | "Moderado" | "Bajo" | null;
  tiposDeLesion:
    | "Quirúrgica"
    | "En proceso de cicatrización sin infección"
    | "Infectada"
    | "Dehiscente"
    | "Ulcera por presión"
    | "Ulcera venosa"
    | "Ulcera diabética"
    | "Otra"
    | "Proceso de cicatrización"
    | null;
  gradoOTipoEspecifico: string | null;
  estadio: number | null;
  caracteristicas: string | null;
  fechaDeCuracion: string | null;
  suplenciaParaElBano:
    | "Independiente"
    | "Baño de regadera asistido"
    | "Baño de esponja en cama"
    | null;
  datosSubjetivos: string | null;
  otrosDatosRelevantes: string | null;
  notaDeEnfermeria: {
    situacionDelPaciente: string | null;
    informacionClinica: string | null;
    evaluacion: string | null;
    recomendaciones: string | null;
  };
  firmaDelEnfermero: string | null;
}>({
  estadoDeLaPiel: null,
  especificarLesionEnPiel: null,
  coloracionDeLaPiel: null,
  dispositivoCateteres: null,
  dispositivoCVPC: null,
  dispositivoCVC: null,
  dispositivoSondas: null,
  dispositivoSondaVesical: null,
  dispositivoHeridas: null,
  dispositivoUPP: null,
  dispositivoFlictemas: null,
  // lugarDeDispositivos: null,
  puntuacionRiesgoCaidas: null,
  riesgoCaidas: null,
  puntuacionRiesgoUPP: null,
  riesgoUPP: null,
  tiposDeLesion: null,
  gradoOTipoEspecifico: null,
  estadio: null,
  caracteristicas: null,
  fechaDeCuracion: null,
  suplenciaParaElBano: null,
  datosSubjetivos: null,
  otrosDatosRelevantes: null,
  notaDeEnfermeria: {
    situacionDelPaciente: null,
    informacionClinica: null,
    evaluacion: null,
    recomendaciones: null,
  },
  firmaDelEnfermero: null,
});

const fueLesionEnPielEspecificada = computed(() => {
  return necesidadDeHigiene.value.estadoDeLaPiel === "Con lesion";
});

const datoSubjetivo = ref<string | null>(null);
const tieneDatosSubjetivos = ref<false | null>(null);
const datosSubjetivosHigiene = computed({
  get() {
    return !datoSubjetivo.value || tieneDatosSubjetivos.value == false
      ? null
      : datoSubjetivo.value;
  },
  set(value) {
    datoSubjetivo.value = !value ? null : value;
  },
});

const otrosDatosRelevantes = ref<string | null>(null);
const tieneOtrosDatosRelevantes = ref<false | null>(null);
const otrosDatosRelevantesHigiene = computed({
  get() {
    return !otrosDatosRelevantes.value ||
      tieneOtrosDatosRelevantes.value == false
      ? null
      : otrosDatosRelevantes.value;
  },
  set(value) {
    otrosDatosRelevantes.value = !value ? null : value;
  },
});

const puntuacionTotalRiesgoCaidas = computed(() => {
  if (
    !necesidadDeHigiene.value.puntuacionRiesgoCaidas ||
    necesidadDeHigiene.value.puntuacionRiesgoCaidas.length === 0
  )
    return null;
  return necesidadDeHigiene.value.puntuacionRiesgoCaidas.reduce(
    (acc, curr) => acc + curr.puntuacion,
    0
  );
});
const riesgoCaidas = computed(() => {
  if (puntuacionTotalRiesgoCaidas.value == null) return null;
  if (puntuacionTotalRiesgoCaidas.value >= 4) return "Alto";
  if (
    puntuacionTotalRiesgoCaidas.value >= 2 &&
    puntuacionTotalRiesgoCaidas.value < 4
  )
    return "Mediano";
  return "Bajo";
});

function handleUpdateFactoresDeRiesgoSeleccionados(
  factors: {
    factorDeRiesgo: string;
    puntuacion: number;
  }[]
) {
  necesidadDeHigiene.value.puntuacionRiesgoCaidas = factors;
}

const puntuacionTotalRiesgoUPP = computed(() => {
  if (
    !necesidadDeHigiene.value.puntuacionRiesgoUPP ||
    necesidadDeHigiene.value.puntuacionRiesgoUPP.length === 0
  )
    return null;
  return necesidadDeHigiene.value.puntuacionRiesgoUPP.reduce(
    (acc, curr) => acc + curr.opcion.puntuacion,
    0
  );
});
const riesgoUPP = computed(() => {
  if (puntuacionTotalRiesgoUPP.value == null) return null;
  if (puntuacionTotalRiesgoUPP.value <= 12) return "Alto";
  if (
    puntuacionTotalRiesgoUPP.value >= 13 &&
    puntuacionTotalRiesgoUPP.value <= 14
  )
    return "Moderado";
  return "Bajo";
});

function handleUpdatePuntuacionRiesgoUPP(
  puntuacion: {
    factor: string;
    opcion: { valor: string; puntuacion: number };
  }[]
) {
  necesidadDeHigiene.value.puntuacionRiesgoUPP = puntuacion;
}

watch(
  [
    datosSubjetivosHigiene,
    fueLesionEnPielEspecificada,
    otrosDatosRelevantesHigiene,
    puntuacionTotalRiesgoCaidas,
    riesgoCaidas,
    puntuacionTotalRiesgoUPP,
    riesgoUPP,
  ],
  ([
    datosSubjetivosHigiene,
    fueLesionEnPielEspecificada,
    otrosDatosRelevantesHigiene,
    puntuacionTotalRiesgoCaidas,
    riesgoCaidas,
    puntuacionTotalRiesgoUPP,
    riesgoUPP,
  ]) => {
    necesidadDeHigiene.value.datosSubjetivos = datosSubjetivosHigiene;
    necesidadDeHigiene.value.otrosDatosRelevantes = otrosDatosRelevantesHigiene;
    if (!fueLesionEnPielEspecificada) {
      necesidadDeHigiene.value.especificarLesionEnPiel = null;
    }
    if (!puntuacionTotalRiesgoCaidas) {
      necesidadDeHigiene.value.riesgoCaidas = null;
    }
    necesidadDeHigiene.value.riesgoCaidas = riesgoCaidas;
    if (!puntuacionTotalRiesgoUPP) {
      necesidadDeHigiene.value.riesgoUPP = null;
    }
    necesidadDeHigiene.value.riesgoUPP = riesgoUPP;
  }
);
</script>

<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">5. Necesidad de Higiene</h1>
    <img
      class="h-8 w-8"
      src="../../../assets/icons/hygienic.png"
      alt="Icono de seccion"
    />
  </div>

  <div class="mx-4 my-6">
    <p class="text-stone-500 h-max mb-1.5">Estado de la piel</p>
    <div class="grid grid-cols-3 gap-y-3 mb-3">
      <VInputRadio
        v-model="necesidadDeHigiene.estadoDeLaPiel"
        value="Hidratada"
        label="Hidratada"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.estadoDeLaPiel"
        value="Deshidratada"
        label="Deshidratada"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.estadoDeLaPiel"
        value="Integra"
        label="Integra"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.estadoDeLaPiel"
        value="Con lesion"
        label="Con lesion"
        class="w-max"
      />
      <VInputText
        v-model="necesidadDeHigiene.especificarLesionEnPiel"
        type="text"
        label="Especificar"
        label-position="side"
        class="col-span-2"
        :center-text="true"
        :disabled="!fueLesionEnPielEspecificada"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Coloración de la piel</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Pálida"
        label="Pálida"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Robicunda"
        label="Robicunda"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Marmórea"
        label="Marmórea"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Ictérica"
        label="Ictérica"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Equimosis"
        label="Equimosis"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Hematomas"
        label="Hematomas"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.coloracionDeLaPiel"
        value="Cianótica"
        label="Cianótica"
        class="w-max"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5 items-center flex">
      Dispositivos: Catéteres, sondas o heridas especificar con una
      <span class="mx-2 flex items-center">
        <IonIcon :icon="arrowForward" class="size-8" />
      </span>
      la región anatómica
    </p>
    <div class="grid grid-cols-3 gap-y-3 mb-3 w-3/4">
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoCateteres"
        value="Cateteres"
        label="Cateteres"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoCVPC"
        value="CVPC"
        label="CVPC"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoCVC"
        value="CVC"
        label="CVC"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoSondas"
        value="Sondas"
        label="Sondas"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoSondaVesical"
        value="Sonda vesical"
        label="Sonda vesical"
        class="w-max"
      />
      <div></div>
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoHeridas"
        value="Heridas"
        label="Heridas"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoUPP"
        value="UPP"
        label="UPP"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.dispositivoFlictemas"
        value="Flictemas"
        label="Flictemas"
        class="w-max"
      />
    </div>
    <!-- <canvas ref="canvasRef" class="bg-transparent" @click="showCommentInput = true"></canvas> -->
    <!-- <div v-if="showCommentInput" class="comment-input">
      <textarea v-model="comment" placeholder="Write your comment..."></textarea>
      <button @click="submitComment">Submit</button>
    </div> -->
    <img src="../../../assets/images/human-shape.png" alt="Forma humana" />

    <p class="text-stone-500 h-max">Escala de riesgo de caídas</p>
    <p class="h-max mb-1.5">
      La valoración del riesgo de caídas del paciente, por turno, utilizando la
      escala de valoración del estado del paciente, esta valora la funcionalidad
      en todas sus esferas.
    </p>
    <PatientStateTable
      class="w-full mb-3"
      @update:puntuacion-riesgo-caidas="
        handleUpdateFactoresDeRiesgoSeleccionados
      "
    />
    <FaillingRiskInfoTable class="w-full mb-1.5" />
    <p class="h-max mb-3">
      Intervenciones: Prevención de caídas, control de riesgo, orientación sobre
      riesgo, vigilancia estrecha, ayuda a la deambulación, medidas de
      seguridad: barandales en alto, etc.
    </p>

    <p class="text-stone-500 h-max">Escala de riesgo de UPP</p>
    <BradenScale
      class="w-full mb-1.5"
      @update:puntuacion-riesgo-u-p-p="handleUpdatePuntuacionRiesgoUPP"
    />
    <p class="h-max mb-3">
      Clasificación de riesgo: Alto riesgo: Puntuación total &lt; 12. <br />
      Riesgo moderado: Puntuación total 13 - 14. <br />
      Riesgo bajo: Puntuación total 15 - 16 si es menor de 75 años. <br />
      Puntuación total 15 - 18 si es mayor o igual de 75 años.
    </p>

    <div class="grid grid-cols-2 gap-x-10 gap-y-3 mb-3 w-3/4">
      <TransitionGroup name="expand">
        <div v-if="riesgoCaidas" class="flex flex-col w-full">
          <div class="flex items-center mb-1.5 text-stone-500">
            <label class="min-w-max mr-3">Puntuación</label>
            <input
              type="number"
              placeholder="Auto"
              class="w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 h-9 outline-none border border-black bg-white rounded-md"
              :class="{
                'border border-red-800 bg-red-400 text-black':
                  puntuacionTotalRiesgoCaidas &&
                  puntuacionTotalRiesgoCaidas >= 4,
                'border border-yellow-800 bg-yellow-400 text-black':
                  puntuacionTotalRiesgoCaidas &&
                  puntuacionTotalRiesgoCaidas >= 2 &&
                  puntuacionTotalRiesgoCaidas < 4,
                'border border-green-800 bg-green-400 text-black':
                  (puntuacionTotalRiesgoCaidas &&
                    puntuacionTotalRiesgoCaidas < 2 &&
                    puntuacionTotalRiesgoCaidas >= 0) ||
                  !puntuacionTotalRiesgoCaidas,
              }"
              :value="puntuacionTotalRiesgoCaidas"
            />
          </div>
          <div class="flex items-center mb-1.5 text-stone-500">
            <label class="min-w-max mr-3">Riesgo de caídas</label>
            <input
              type="text"
              placeholder="Auto"
              class="w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 h-9 outline-none border border-black bg-white rounded-md"
              :class="{
                'border border-red-800 bg-red-400 text-black':
                  riesgoCaidas === 'Alto',
                'border border-yellow-800 bg-yellow-400 text-black':
                  riesgoCaidas === 'Mediano',
                'border border-green-800 bg-green-400 text-black':
                  riesgoCaidas === 'Bajo' || !riesgoCaidas,
              }"
              :value="riesgoCaidas"
            />
          </div>
        </div>
        <div v-if="riesgoUPP" class="flex flex-col w-full">
          <div class="flex items-center mb-1.5 text-stone-500">
            <label class="min-w-max mr-3">Puntuación</label>
            <input
              type="number"
              placeholder="Auto"
              class="w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 h-9 outline-none border border-black bg-white rounded-md"
              :class="{
                'border border-red-800 bg-red-400 text-black':
                  puntuacionTotalRiesgoUPP && puntuacionTotalRiesgoUPP <= 12,
                'border border-yellow-800 bg-yellow-400 text-black':
                  puntuacionTotalRiesgoUPP &&
                  puntuacionTotalRiesgoUPP >= 13 &&
                  puntuacionTotalRiesgoUPP <= 14,
                'border border-green-800 bg-green-400 text-black':
                  puntuacionTotalRiesgoUPP && puntuacionTotalRiesgoUPP >= 15,
              }"
              :value="puntuacionTotalRiesgoUPP"
            />
          </div>
          <div class="flex items-center mb-1.5 text-stone-500">
            <label class="min-w-max mr-3">Riesgo UPP</label>
            <input
              type="text"
              placeholder="Auto"
              class="w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 h-9 outline-none border border-black bg-white rounded-md"
              :class="{
                'border border-red-800 bg-red-400 text-black':
                  riesgoUPP === 'Alto',
                'border border-yellow-800 bg-yellow-400 text-black':
                  riesgoUPP === 'Moderado',
                'border border-green-800 bg-green-400 text-black':
                  riesgoUPP === 'Bajo' || !riesgoUPP,
              }"
              :value="riesgoUPP"
            />
          </div>
        </div>
      </TransitionGroup>
    </div>

    <p class="text-stone-500 h-max">Tipos de lesión</p>
    <VInputRadio
      v-model="necesidadDeHigiene.tiposDeLesion"
      value="Quirúrgica"
      label="1. Quirúrgica"
      class="w-max mb-1.5"
    />
    <Transition name="expand">
      <div
        class="flex gap-5 mb-1.5"
        v-if="necesidadDeHigiene.tiposDeLesion === 'Quirúrgica'"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="En proceso de cicatrización sin infección"
          label="En proceso de cicatrización sin infección"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Infectada"
          label="Infectada"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Dehiscente"
          label="Dehiscente"
          class="w-max"
        />
      </div>
    </Transition>

    <VInputRadio
      v-model="necesidadDeHigiene.tiposDeLesion"
      value="Ulcera por presión"
      label="2. Ulcera por presión"
      class="w-max mb-1.5"
    />
    <Transition name="expand">
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Ulcera por presión'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="G I"
          label="G I"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="G II"
          label="G II"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="G III"
          label="G III"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="G IV"
          label="G IV"
          class="w-max"
        />
      </div>
    </Transition>
    <Transition name="expand">
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Ulcera por presión'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="En proceso de cicatrización"
          label="En proceso de cicatrización"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Infectada"
          label="Infectada"
          class="w-max"
        />
      </div>
    </Transition>

    <VInputRadio
      v-model="necesidadDeHigiene.tiposDeLesion"
      value="Ulcera venosa"
      label="3. Ulcera venosa"
      class="w-max mb-1.5"
    />
    <Transition name="expand">
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Ulcera venosa'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="I"
          label="I"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="II"
          label="II"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="III"
          label="III"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="IV"
          label="IV"
          class="w-max"
        />
      </div>
    </Transition>
    <Transition name="expand">
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Ulcera venosa'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="En proceso de cicatrización"
          label="En proceso de cicatrización"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Infectada"
          label="Infectada"
          class="w-max"
        />
      </div>
    </Transition>

    <VInputRadio
      v-model="necesidadDeHigiene.tiposDeLesion"
      value="Ulcera diabética"
      label="4. Ulcera diabética"
      class="w-max mb-1.5"
    />
    <Transition name="expand">
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Ulcera diabética'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="I"
          label="I"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="II"
          label="II"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="III"
          label="III"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="IV"
          label="IV"
          class="w-max"
        />
      </div>
    </Transition>
    <Transition name="expand">
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Ulcera diabética'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="En proceso de cicatrización"
          label="En proceso de cicatrización"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Infectada"
          label="Infectada"
          class="w-max"
        />
      </div>
    </Transition>

    <VInputRadio
      v-model="necesidadDeHigiene.tiposDeLesion"
      value="Otra"
      label="5. Otra"
      class="w-max mb-1.5"
    />

    <Transition>
      <div
        v-if="necesidadDeHigiene.tiposDeLesion === 'Otra'"
        class="flex gap-5 mb-1.5"
      >
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Proceso de cicatrización"
          label="Proceso de cicatrización"
          class="w-max"
        />
        <VInputRadio
          v-model="necesidadDeHigiene.gradoOTipoEspecifico"
          value="Infectada"
          label="Infectada"
          class="w-max"
        />
      </div>
    </Transition>

    <VInputRadio
      v-model="necesidadDeHigiene.tiposDeLesion"
      value="N/A"
      label="6. N/A"
      class="w-max"
    />

    <img src="../../../assets/images/upp.png" alt="UPP" />

    <table class="border-spacing-y-3 border-separate">
      <tr class="border border-transparent">
        <td>
          <p class="text-stone-500 h-max inline-block min-w-max mr-2">
            Estadio
          </p>
        </td>
        <td>
          <VInputText
            v-model="necesidadDeHigiene.estadio"
            type="text"
            input-width="32"
            :center-text="true"
          />
        </td>
      </tr>
      <tr class="border border-transparent">
        <td>
          <p class="text-stone-500 h-max inline-block min-w-max">
            Características
          </p>
        </td>
        <td>
          <VInputText
            v-model="necesidadDeHigiene.caracteristicas"
            type="text"
            input-width="32"
            :center-text="true"
          />
        </td>
      </tr>

      <tr class="border border-transparent">
        <td>
          <p class="text-stone-500 h-max inline-block min-w-max mr-3">
            Fecha de curación
          </p>
        </td>
        <td>
          <div class="flex items-center text-stone-500 w-fit">
            <div class="relative inline-flex items-center w-full">
              <div class="relative w-full">
                <VInputText
                  v-model="necesidadDeHigiene.fechaDeCuracion"
                  type="date"
                  input-width="32"
                  :center-text="true"
                />
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>

    <p class="text-stone-500 h-max">Suplencia para el baño</p>
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="necesidadDeHigiene.suplenciaParaElBano"
        value="Independiente"
        label="Independiente"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.suplenciaParaElBano"
        value="Baño de regadera asistido"
        label="Baño de regadera asistido"
        class="w-max"
      />
      <VInputRadio
        v-model="necesidadDeHigiene.suplenciaParaElBano"
        value="Baño de esponja en cama"
        label="Baño de esponja en cama"
        class="w-max"
      />
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="datosSubjetivosHigiene"
        type="text"
        label="Datos subjetivos"
        label-position="top"
        :disabled="tieneDatosSubjetivos === false"
      />
      <VInputRadio
        v-model="tieneDatosSubjetivos"
        :value="false"
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
      />
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="otrosDatosRelevantesHigiene"
        type="text"
        label="Otros datos relevantes"
        label-position="top"
        :disabled="tieneOtrosDatosRelevantes === false"
      />
      <VInputRadio
        v-model="tieneOtrosDatosRelevantes"
        :value="false"
        label="N/A"
        identifier="Otros datos relevantes"
        class="pt-2"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Nota de enfermería/Observaciones</p>
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="necesidadDeHigiene.notaDeEnfermeria.situacionDelPaciente"
      type="text"
      label="(S) Situación del paciente:"
      label-position="top"
    />
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="necesidadDeHigiene.notaDeEnfermeria.informacionClinica"
      type="text"
      label="(B) Información clínica:"
      label-position="top"
    />
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="necesidadDeHigiene.notaDeEnfermeria.evaluacion"
      type="text"
      label="(A) Evaluación:"
      label-position="top"
    />
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="necesidadDeHigiene.notaDeEnfermeria.recomendaciones"
      type="text"
      label="(R) Recomendaciones:"
      label-position="top"
    />

    <div class="grid grid-cols-2 gap-3 gap-x-10 justify-center content-center">
      <VInputText
        class="w-full mr-8 mb-3"
        v-model="necesidadDeHigiene.firmaDelEnfermero"
        type="text"
        label="Firma del enfermero(a)"
        label-position="top"
      />
      <div class="flex items-center">A. Cabello F. (ejemplo)</div>
    </div>
    <p class="text-stone-500 h-max mb-1.5">
      (Colocar la primer inicial del primer nombre seguida de un punto, primer
      apellido completo y la primer inicial del segundo apellido seguida de un
      punto.)
    </p>

    <div class="w-full flex justify-end mb-3">
      <IonButton color="primary" fill="solid" shape="round">
        Siguiente
      </IonButton>
    </div>
  </div>
</template>

<style scoped>
.comment-input {
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

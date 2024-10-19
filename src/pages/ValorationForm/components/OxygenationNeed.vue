<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
import { ref } from "vue";
import VInputText from "@/components/VInputText.vue";
import VInputRadio from "@/components/VInputRadio.vue";
import VSelect from "@/components/VSelect.vue";

const NecesidadOxigenacion = ref<{
  FR: number | null;
  dificultadParaRespirar:
    | "Apnea"
    | "Disnea en reposo"
    | "Disnea en esfuerzo"
    | null;
  SPO2: string | null;
  secrecionesBronquiales: boolean | null;
  caracteristicas: string | null;
  dificultadExpectoracion: boolean | null;
  datosSubjetivosExpectoracion: string | null;
  ruidosRespiratorios: boolean | null;
  ruidosRespiratoriosAnormales:
    | "Vesicular"
    | "Broncovesicular"
    | "Estertores"
    | "Sibilancias"
    | "Roce pleural"
    | null;
  datosSubjetivosRuidosRespiratorios: string | null;
}>({
  FR: null,
  dificultadParaRespirar: null,
  SPO2: null,
  secrecionesBronquiales: null,
  caracteristicas: null,
  dificultadExpectoracion: null,
  datosSubjetivosExpectoracion: null,
  ruidosRespiratorios: null,
  ruidosRespiratoriosAnormales: null,
  datosSubjetivosRuidosRespiratorios: null,
});

const caracteristicasOpciones = [
  "Blancas hialinas escasas",
  "Blancas hialinas abundantes",
  "Blancas hialinas espesas escasas",
  "Blancas hialinas espesas abundantes",
  "Amarillas purolentas espesas escasas",
  "Amarillas purolentas espesas abundantes",
  "Hematicas escasas",
  "Hematicas abundantes",
];

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    NecesidadOxigenacion.value.datosSubjetivosExpectoracion = value;
  } else {
    NecesidadOxigenacion.value.datosSubjetivosExpectoracion = null;
  }
};
const handleInputChangeone = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    NecesidadOxigenacion.value.datosSubjetivosRuidosRespiratorios = value;
  } else {
    NecesidadOxigenacion.value.datosSubjetivosRuidosRespiratorios = null;
  }
};
</script>
<template>
  <IonContent>
    <div class="font-sans">
      <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
        <h1 class="text-2xl inline-block p-1">1. Necesidad de Oxigenación</h1>
        <img
          class="h-8 w-8"
          src="../../../assets/icons/oxygenationNeedIcon.png"
          alt=""
        />
      </div>
      <div class="w-full py-1 px-4">
        <h3 class="text-left p-1 text-2xl">Área pulmonar</h3>
      </div>
      <div class="w-full py-1 px-5 text-gray-500 text-lg">
        <VInputText
          class="w-36 mb-3"
          v-model="NecesidadOxigenacion.FR"
          type="number"
          label="FR"
          label-position="side"
          unit="x min."
        />
        <div>
          <p class="col-span-4 text-stone-500 h-max mb-1.5 mt-1">
            Dificultad para respirar
          </p>
          <div class="grid grid-cols-6 gap-1 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.dificultadParaRespirar"
              value="Apnea"
              label="Apnea"
              identifier="Dificultad para respirar"
              class="w-max"
            />
            <div class="grid grid-cols-2 gap-52">
              <VInputRadio
                v-model="NecesidadOxigenacion.dificultadParaRespirar"
                value="Disnea en reposo"
                label="Disnea en reposo"
                identifier="Dificultad para respirar"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.dificultadParaRespirar"
                value="Disnea en esfuerzo"
                label="Disnea en esfuerzo"
                identifier="Dificultad para respirar"
                class="w-max"
              />
            </div>
          </div>
          <VInputText
            class="w-36 mb-3"
            v-model="NecesidadOxigenacion.SPO2"
            type="text"
            label="SPO2"
            label-position="side"
          />
          <div>
            <p class="col-span-4 text-stone-500 h-max mb-1.5 mt-1">
              Secreciones bronquiales
            </p>
            <div class="grid grid-cols-6 gap-1 mb-3">
              <VInputRadio
                v-model="NecesidadOxigenacion.secrecionesBronquiales"
                :value="true"
                label="Si"
                identifier="Secreciones Bronquiales"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.secrecionesBronquiales"
                :value="false"
                label="No"
                identifier="Secreciones Bronquiales"
                class="w-max"
              />
              <VSelect
                v-show="
                  NecesidadOxigenacion.secrecionesBronquiales === true &&
                  NecesidadOxigenacion.secrecionesBronquiales != null
                "
                class="w-96"
                v-model="NecesidadOxigenacion.caracteristicas"
                :options="caracteristicasOpciones"
                type="text"
                label="Caracteristicas"
                label-position="side"
              />
            </div>
          </div>
          <div>
            <p class="col-span-4 text-stone-500 h-max mb-1.5 mt-1">
              Dificultad para la expectoración
            </p>
            <div class="grid grid-cols-6 gap-1 mb-3">
              <VInputRadio
                v-model="NecesidadOxigenacion.dificultadExpectoracion"
                :value="true"
                label="Si"
                identifier="Dificultad Expectoración"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.dificultadExpectoracion"
                :value="false"
                label="No"
                identifier="Dificultad Expectoración"
                class="w-max"
              />
            </div>
            <div class="flex space-x-8">
              <VInputText
                class="w-3/4 mb-3"
                v-model="NecesidadOxigenacion.datosSubjetivosExpectoracion"
                type="text"
                label="Datos subjetivos"
                label-position="top"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.datosSubjetivosExpectoracion"
                value=""
                label="N/A"
                identifier="Datos subjetivos"
                class="pt-2"
                @input="handleInputChange"
              />
            </div>
          </div>
          <div>
            <p class="col-span-4 text-stone-500 h-max mb-1.5 mt-1">
              Ruidos Respiratorios
            </p>
            <div class="grid grid-cols-4 mb-3">
              <VInputRadio
                v-model="NecesidadOxigenacion.ruidosRespiratorios"
                :value="false"
                label="Normales"
                identifier="Ruidos Respiratorios"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.ruidosRespiratorios"
                :value="true"
                label="Anormales"
                identifier="Ruidos Respiratorios"
                class="w-max"
              />
            </div>
            <div
              v-show="
                NecesidadOxigenacion.ruidosRespiratorios == true &&
                NecesidadOxigenacion.ruidosRespiratorios != null
              "
              class="grid grid-cols-4 mb-3"
            >
              <div></div>
              <div>
                <VInputRadio
                  v-model="NecesidadOxigenacion.ruidosRespiratoriosAnormales"
                  value="Vesicular"
                  label="Vesicular"
                  identifier="Ruidos respiratorios anormales"
                  class="w-max"
                />
                <VInputRadio
                  v-model="NecesidadOxigenacion.ruidosRespiratoriosAnormales"
                  value="Broncovesicular"
                  label="Broncovesicular"
                  identifier="Ruidos respiratorios anormales"
                  class="w-max"
                />
                <VInputRadio
                  v-model="NecesidadOxigenacion.ruidosRespiratoriosAnormales"
                  value="Estertores"
                  label="Estertores"
                  identifier="Ruidos respiratorios anormales"
                  class="w-max"
                />
                <VInputRadio
                  v-model="NecesidadOxigenacion.ruidosRespiratoriosAnormales"
                  value="Sibilancias"
                  label="Sibilancias"
                  identifier="Ruidos respiratorios anormales"
                  class="w-max"
                />
                <VInputRadio
                  v-model="NecesidadOxigenacion.ruidosRespiratoriosAnormales"
                  value="Roce pleural"
                  label="Roce pleural"
                  identifier="Ruidos respiratorios anormales"
                  class="w-max"
                />
              </div>
            </div>
            <div class="flex space-x-8">
              <VInputText
                class="w-3/4 mb-3"
                v-model="
                  NecesidadOxigenacion.datosSubjetivosRuidosRespiratorios
                "
                type="text"
                label="Datos subjetivos"
                label-position="top"
              />
              <VInputRadio
                v-model="
                  NecesidadOxigenacion.datosSubjetivosRuidosRespiratorios
                "
                value=""
                label="N/A"
                identifier="Datos subjetivos"
                class="pt-2"
                @input="handleInputChangeone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </IonContent>
</template>

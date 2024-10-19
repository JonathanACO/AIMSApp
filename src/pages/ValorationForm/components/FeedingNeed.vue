<script lang="ts" setup>
import { IonContent } from "@ionic/vue";
import { ref } from "vue";
import VInputText from "@/components/VInputText.vue";
import VInputRadio from "@/components/VInputRadio.vue";

const NecesidadOxigenacion = ref<{
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
    | null;
  otraDieta: string | null;
  dietaHabitual: {
    Carnes: boolean;
    Verduras: boolean;
    Frutas: boolean;
    Harinas: boolean;
    Leguminosas: boolean;
    Lacteos: boolean;
    Refresco: boolean;
    Cafe: boolean;
    Agua: boolean;
    DietaNoApegadaAEnfermedad: boolean;
    Otros: boolean;
  };
  otraDietaHabitual: string | null;
  ingestaDeLiquidos:
    | "Menos de 1 lt."
    | "De 1 a 2 lts."
    | "Mayor a 2 lts."
    | null;
  apetito: "Conservado" | "Aumentado" | "Disminuido" | null;
  suplementoAlimenticio: "Si" | "No" | null;
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
}>({
  tipoDeDieta: null,
  otraDieta: null,
  dietaHabitual: {
    Carnes: false,
    Verduras: false,
    Frutas: false,
    Harinas: false,
    Leguminosas: false,
    Lacteos: false,
    Refresco: false,
    Cafe: false,
    Agua: false,
    DietaNoApegadaAEnfermedad: false,
    Otros: false,
  },
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
});
const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    NecesidadOxigenacion.value.datosSubjetivosDeProblemasDeMasticacion = value;
  } else {
    NecesidadOxigenacion.value.datosSubjetivosDeProblemasDeMasticacion = null;
  }
};
</script>
<template>
  <IonContent>
    <div class="font-sans">
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
      <div class="w-full py-1 px-5 text-gray-500 text-lg">
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">Tipo de dieta</p>
          <div class="grid grid-cols-5 gap-1 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Normal"
              label="Normal"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Blanda"
              label="Blanda"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Liquida"
              label="Liquida"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Vegana"
              label="Vegana"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Ayuno"
              label="Ayuno"
              identifier="Tipo de Dieta"
              class="w-max"
            />
          </div>
          <div class="flex mb-3 space-x-8">
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Libre de gluten"
              label="Libre de gluten"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Ayuno"
              label="Ayuno"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="NPT"
              label="NPT"
              identifier="Tipo de Dieta"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.tipoDeDieta"
              value="Otra"
              label="Otra"
              identifier="Tipo de Dieta"
              class="w-max"
            />
          </div>
          <VInputText
            class="w-full mb-3"
            v-model="NecesidadOxigenacion.otraDieta"
            type="text"
            label="Especificar"
            label-position="side"
          />
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">Dieta habitual</p>
          <div class="grid grid-cols-4 gap-1 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Carnes"
              label="Carnes"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Verduras"
              label="Verduras"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Frutas"
              label="Frutas"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Harinas"
              label="Harinas"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Leguminosas"
              label="Leguminosas"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Lacteos"
              label="Lácteos"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Refresco"
              label="Refresco"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Cafe"
              label="Café"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Agua"
              label="Agua"
              :value="true"
              identifier="Dieta Habitual"
              class="w-max"
            />
            <VInputRadio
              v-model="
                NecesidadOxigenacion.dietaHabitual.DietaNoApegadaAEnfermedad
              "
              :value="true"
              label="Dieta no apegada a su enfermedad"
              identifier="Dieta Habitual"
              class="w-max"
            />
          </div>
          <div>
            <VInputRadio
              v-model="NecesidadOxigenacion.dietaHabitual.Otros"
              :value="true"
              label="Otros"
              identifier="Dieta Habitual"
              class="w-max"
            />
          </div>
          <VInputText
            class="w-full mb-3"
            v-model="NecesidadOxigenacion.otraDietaHabitual"
            type="text"
            label="Especificar"
            label-position="side"
          />
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">
            Ingesta de líquidos por 24 hrs.
          </p>
          <div class="grid grid-cols-4 gap-1 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.ingestaDeLiquidos"
              value="Menos de 1 lt."
              label="Menos de 1 lt."
              identifier="Ingesta de liquidos"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.ingestaDeLiquidos"
              value="De 1 a 2 lts."
              label="De 1 a 2 lts."
              identifier="Ingesta de liquidos"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.ingestaDeLiquidos"
              value="Mayor de 2 lits."
              label="Mayor de 2 lits."
              identifier="Ingesta de liquidos"
              class="w-max"
            />
          </div>
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">Apetito</p>
          <div class="grid grid-cols-4 gap-1 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.apetito"
              value="Conservado"
              label="Conservado"
              identifier="Apetito"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.apetito"
              value="Aumentado"
              label="Aumentado"
              identifier="Apetito"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.apetito"
              value="Disminuido"
              label="Disminuido"
              identifier="Apetito"
              class="w-max"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="flex mb-3 space-x-4">
            <p class="col-span-4 h-max mb-1.5 mt-1">Suplemento Alimenticio</p>
            <VInputRadio
              v-model="NecesidadOxigenacion.suplementoAlimenticio"
              value="Si"
              label="Si"
              identifier="Suplemento Alimenticio"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.suplementoAlimenticio"
              value="No"
              label="No"
              identifier="Suplemento Alimenticio"
              class="w-max"
            />
          </div>
          <div class="grid grid-cols-3">
            <span></span>
            <VInputText
              class="w-full mb-3 col-span-2"
              v-model="NecesidadOxigenacion.especificarSuplemento"
              type="text"
              label="Especificar"
              label-position="side"
            />
          </div>
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">Estado de cavidad oral</p>
          <div class="grid grid-cols-4 gap-1 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.estadoCavidadOral"
              value="Sin caries"
              label="Sin caries"
              identifier="Cavidad Oral"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.estadoCavidadOral"
              value="Con caries"
              label="Con caries"
              identifier="Cavidad Oral"
              class="w-max"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="flex space-x-3">
            <p class="col-span-4 h-max mb-1.5 mt-1">Protésis dental</p>
            <VInputRadio
              v-model="NecesidadOxigenacion.protesisDental"
              :value="true"
              label="Si"
              identifier="Protesis Dental"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.protesisDental"
              :value="false"
              label="No"
              identifier="Protesis Dental"
              class="w-max"
            />
          </div>
          <div
            v-show="
              NecesidadOxigenacion.protesisDental == true &&
              NecesidadOxigenacion.protesisDental != null
            "
            class="grid grid-cols-5 mb-3"
          >
            <span></span>
            <div>
              <VInputRadio
                v-model="NecesidadOxigenacion.siprotesisDental"
                value="Fija"
                label="Fija"
                identifier="Protesis Dental"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.siprotesisDental"
                value="Movil"
                label="Móvil"
                identifier="Protesis Dental"
                class="w-max"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">Mucosas orales</p>
          <div class="grid grid-cols-4">
            <VInputRadio
              v-model="NecesidadOxigenacion.mucosasOrales"
              value="Hidratadas"
              label="Hidratadas"
              identifier="Mucosas Orales"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.mucosasOrales"
              value="Deshidratadas"
              label="Deshidratadas"
              identifier="Mucosas Orales"
              class="w-max"
            />
          </div>
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">Adoncia</p>
          <div class="grid grid-cols-4">
            <VInputRadio
              v-model="NecesidadOxigenacion.adoncia"
              value="Total"
              label="Total"
              identifier="Adoncia"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.adoncia"
              value="Parcial"
              label="Parcial"
              identifier="Adoncia"
              class="w-max"
            />
          </div>
        </div>
        <div class="mb-3">
          <p class="col-span-4 h-max mb-1.5 mt-1">
            Problemas de masticación y deglución
          </p>
          <div class="grid grid-cols-4 mb-3">
            <VInputRadio
              v-model="NecesidadOxigenacion.problemasDeMasticacion"
              value="Masticacion"
              label="Masticación"
              identifier="Progblemas de masticacion"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.problemasDeMasticacion"
              value="Deglucion"
              label="Deglución"
              identifier="Problemas de masticacion"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.problemasDeMasticacion"
              value="Intolerancia"
              label="Intolerancia"
              identifier="Problemas de masticacion"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.problemasDeMasticacion"
              value="Nauseas"
              label="Náuseas"
              identifier="Problemas de masticacion"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.problemasDeMasticacion"
              value="Vomito"
              label="Vómito"
              identifier="Problemas de masticacion"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.problemasDeMasticacion"
              value="No aplica"
              label="N/A"
              identifier="Problemas de masticacion"
              class="w-max"
            />
          </div>
          <div class="flex space-x-8">
            <VInputText
              class="w-3/4 mb-3"
              v-model="
                NecesidadOxigenacion.datosSubjetivosDeProblemasDeMasticacion
              "
              type="text"
              label="Datos subjetivos"
              label-position="top"
            />
            <VInputRadio
              v-model="
                NecesidadOxigenacion.datosSubjetivosDeProblemasDeMasticacion
              "
              value=""
              label="N/A"
              identifier="Datos subjetivos"
              class="pt-2"
              @input="handleInputChange"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="flex space-x-3">
            <p class="col-span-4 h-max mb-1.5 mt-1">Sonda de alimentación</p>
            <VInputRadio
              v-model="NecesidadOxigenacion.sondaDeAlimentacion"
              :value="true"
              label="Si"
              identifier="Sonda de Alimentacion"
              class="w-max"
            />
            <VInputRadio
              v-model="NecesidadOxigenacion.sondaDeAlimentacion"
              :value="false"
              label="No"
              identifier="Sonda de Alimentacion"
              class="w-max"
            />
          </div>
          <div
            v-show="
              NecesidadOxigenacion.sondaDeAlimentacion == true &&
              NecesidadOxigenacion.sondaDeAlimentacion != null
            "
            class="grid grid-cols-2 mb-3"
          >
            <p class="col-span-4 h-max mb-1.5 mt-1">Calibre</p>
            <div class="grid grid-cols-2">
              <VInputRadio
                v-model="NecesidadOxigenacion.calibreSonda"
                value="12"
                label="12 fr"
                identifier="Calibre de la sonda de alimentacion"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.calibreSonda"
                value="18"
                label="18 fr"
                identifier="Calibre de la sonda de alimentacion"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.calibreSonda"
                value="14"
                label="14 fr"
                identifier="Calibre de la sonda de alimentacion"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.calibreSonda"
                value="20"
                label="20 fr"
                identifier="Calibre de la sonda de alimentacion"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.calibreSonda"
                value="16"
                label="16 fr"
                identifier="Calibre de la sonda de alimentacion"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.calibreSonda"
                value="22"
                label="22 fr"
                identifier="Calibre de la sonda de alimentacion"
                class="w-max"
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="flex space-x-12">
              <p class="col-span-4 h-max mb-1.5 mt-1">Alteraciones de peso</p>
              <VInputRadio
                v-model="NecesidadOxigenacion.alteracionesDePeso"
                :value="true"
                label="Si"
                identifier="Alteraciones de Peso"
                class="w-max"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.alteracionesDePeso"
                :value="false"
                label="No"
                identifier="Alteraciones de Peso"
                class="w-max"
              />
            </div>
            <div
              v-show="
                NecesidadOxigenacion.alteracionesDePeso == true &&
                NecesidadOxigenacion.alteracionesDePeso != null
              "
              class="grid grid-cols-3 mb-3"
            >
              <span></span>
              <div>
                <VInputRadio
                  v-model="NecesidadOxigenacion.siAlteracionesDePeso"
                  value="Sobrepeso"
                  label="Sobrepeso"
                  identifier="Alteraciones de Peso"
                  class="w-max"
                />
                <VInputRadio
                  v-model="NecesidadOxigenacion.siAlteracionesDePeso"
                  value="Obesidad"
                  label="Obesidad"
                  identifier="Alteraciones de Peso"
                  class="w-max"
                />
                <VInputRadio
                  v-model="NecesidadOxigenacion.siAlteracionesDePeso"
                  value="Obesidad morbida"
                  label="Obesidad mórbida"
                  identifier="Alteraciones de Peso"
                  class="w-max"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </IonContent>
</template>

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
const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    NecesidadOxigenacion.value.datosSubjetivosDeProblemasDeMasticacion = value;
  } else {
    NecesidadOxigenacion.value.datosSubjetivosDeProblemasDeMasticacion = null;
  }
};
const handleInputChangeOne = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if (value) {
    NecesidadOxigenacion.value.datosSubjetivosBalanceParcial = value;
  } else {
    NecesidadOxigenacion.value.datosSubjetivosBalanceParcial = null;
  }
};
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
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Normal"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Blanda"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Liquida"
        label="Líquida"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Vegana"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Baja en Sodio"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Libre de gluten"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Ayuno"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="NPT"
        identifier="Tipo de Dieta"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.tipoDeDieta"
        value="Otra"
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

    <p class="h-max mb-1.5">Dieta habitual</p>
    <div class="grid grid-cols-4 gap-y-3 gap-x-4 mb-3">
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
    </div>
    <VInputRadio
      v-model="NecesidadOxigenacion.dietaHabitual.DietaNoApegadaAEnfermedad"
      :value="true"
      label="Dieta no apegada a su enfermedad"
      identifier="Dieta Habitual"
      class="w-max mb-3"
    />
    <div class="flex gap-x-12">
      <VInputRadio
        v-model="NecesidadOxigenacion.dietaHabitual.Otros"
        :value="true"
        label="Otros"
        identifier="Dieta Habitual"
        class="w-max mb-3"
      />
      <VInputText
        class="w-full mb-3"
        v-model="NecesidadOxigenacion.otraDietaHabitual"
        type="text"
        label="Especificar"
        label-position="side"
      />
    </div>

    <div class="mb-3">
      <p class="col-span-4 h-max mb-1.5">Ingesta de líquidos por 24 hrs.</p>
      <div class="grid grid-cols-4 mb-3">
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
      <p class="col-span-4 h-max mb-1.5">Apetito</p>
      <div class="grid grid-cols-4 mb-3">
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
    <div class="flex gap-x-12">
      <div class="flex h-9 items-center">
        <p class="h-max w-max">Suplemento Alimenticio</p>
      </div>
      <div class="flex flex-wrap gap-x-12">
        <VInputRadio
          v-model="NecesidadOxigenacion.suplementoAlimenticio"
          :value="true"
          label="Si"
          identifier="Suplemento Alimenticio"
          class="w-max mb-3"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.suplementoAlimenticio"
          :value="false"
          label="No"
          identifier="Suplemento Alimenticio"
          class="w-max mb-3"
        />
        <!-- v-if -->
        <VInputText
          class="w-full mb-3"
          v-model="NecesidadOxigenacion.especificarSuplemento"
          type="text"
          label="Especificar"
          label-position="side"
        />
      </div>
    </div>

    <p class="h-max mb-1.5">Estado de cavidad oral</p>
    <div class="flex gap-x-10 mb-3">
      <VInputRadio
        v-model="NecesidadOxigenacion.estadoCavidadOral"
        value="Sin caries"
        identifier="Cavidad Oral"
        class="w-max"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.estadoCavidadOral"
        value="Con caries"
        identifier="Cavidad Oral"
        class="w-max"
      />
    </div>

    <div class="flex gap-x-10">
      <div class="flex h-9 items-center">
        <p class="h-max">Protésis dental</p>
      </div>
      <div class="flex flex-wrap gap-x-10 gap-y-3">
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
        <Transition name="expand">
          <!-- TODO: en caso de que cambie o quite la respuesta en protesis dental cambiar la variable siprotesisDental a null -->
          <div
            v-show="
              NecesidadOxigenacion.protesisDental == true &&
              NecesidadOxigenacion.protesisDental != null
            "
            class="mb-3 w-full"
          >
            <div>
              <VInputRadio
                v-model="NecesidadOxigenacion.siprotesisDental"
                value="Fija"
                label="Fija"
                identifier="Protesis Dental"
                class="w-max mb-3"
              />
              <VInputRadio
                v-model="NecesidadOxigenacion.siprotesisDental"
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

    <p class="h-max mb-1.5">Adoncia</p>
    <div class="flex gap-x-10">
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

    <p class="h-max mb-1.5">Problemas de masticación y deglución</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
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
    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="NecesidadOxigenacion.datosSubjetivosDeProblemasDeMasticacion"
        type="text"
        label="Datos subjetivos"
        label-position="top"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.datosSubjetivosDeProblemasDeMasticacion"
        value=""
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="handleInputChange"
      />
    </div>

    <div class="flex gap-x-10 items-center">
      <p class="h-max">Sonda de alimentación</p>
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
    >
      <p class="h-max mb-1.5">Calibre</p>
      <div class="w-1/3 flex flex-wrap gap-x-10 gap-y-1.5">
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

    <div class="flex gap-x-10 my-3">
      <p class="h-max mb-1.5">Alteraciones de peso</p>
      <div>
        <div class="w-full flex gap-x-10">
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
          class="flex flex-col gap-y-1.5 mt-1.5"
        >
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

    <div class="flex items-center gap-x-10 mb-3">
      <p class="h-max">Solución base/Plan de líquidos</p>
      <VInputText
        class="w-60"
        v-model="NecesidadOxigenacion.solucionBase"
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
          v-model="NecesidadOxigenacion.sf"
          value="1000"
          label="1000 ml: 0.9%"
          identifier="sf"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.sf"
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
          v-model="NecesidadOxigenacion.sg"
          value="5"
          label="5% 1000 ml"
          identifier="sg"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.sg"
          value="10"
          label="10% 1000 ml"
          identifier="sg"
          class="w-max"
        />
      </div>
      <div class="flex space-x-10">
        <VInputRadio
          v-model="NecesidadOxigenacion.sg"
          value="Otro"
          label="Otro"
          identifier="sg"
          class="w-max"
        />
        <VInputText
          class="w-full"
          v-model="NecesidadOxigenacion.otroSg"
          type="text"
          label="Especificar"
          label-position="side"
        />
      </div>
    </div>
    <p class="h-max mb-1.5">Infusion o infusiones</p>
    <VInputText
      class="w-full mb-3 mt-1"
      v-model="NecesidadOxigenacion.infusiones"
      type="text"
      label="Especificar"
      label-position="side"
    />
    <div class="mb-3">
      <p class="h-max mb-1.5 mt-1">Accesos Venosos</p>
      <div class="flex gap-x-10">
        <VInputRadio
          v-model="NecesidadOxigenacion.accesosVenosos"
          value="CVPC"
          label="CVPC"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.accesosVenosos"
          value="CVC"
          label="CVC"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.accesosVenosos"
          value="C. Swan Ganz"
          label="C. Swan Ganz"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.accesosVenosos"
          value="C. Tenckhoff"
          label="C. Tenckhoff"
          identifier="Accesos Venosos"
          class="w-max"
        />
        <VInputRadio
          v-model="NecesidadOxigenacion.accesosVenosos"
          value="C. HD"
          label="C. HD"
          identifier="Accesos Venosos"
          class="w-max"
        />
      </div>
      <div
        v-show="NecesidadOxigenacion.accesosVenosos != null"
        class="grid grid-cols-3 mt-1.5 mb-3"
      >
        <VInputText
          class="w-full"
          v-model="NecesidadOxigenacion.calibreAccesoVenoso"
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
        v-model="NecesidadOxigenacion.fechaDeColocacion"
        type="date"
        :center-text="true"
      /><label class="min-w-max row-start-2">Fr Fecha de curación</label>
      <VInputText
        class="w-max col-start-2 row-start-2"
        v-model="NecesidadOxigenacion.fechaDeCuracion"
        type="date"
        :center-text="true"
      />
    </div>

    <p class="h-max mb-1.5">Balance parcial por turno</p>
    <VInputText
      class="w-2/6 mb-3"
      v-model="NecesidadOxigenacion.balanceParcial"
      type="text"
      label="+"
      label-position="side"
    />
    <VInputText
      class="w-2/6 mb-3"
      v-model="NecesidadOxigenacion.balanceParcial"
      type="text"
      label="-"
      label-position="side"
    />
    <VInputRadio
      v-model="NecesidadOxigenacion.balanceParcial"
      value="Neutro"
      identifier="Balance parcial por turno"
      class="w-max mb-3"
    />
    <div class="flex items-end">
      <VInputText
        class="w-full mr-8"
        v-model="NecesidadOxigenacion.datosSubjetivosBalanceParcial"
        type="text"
        label="Datos subjetivos"
        label-position="top"
      />
      <VInputRadio
        v-model="NecesidadOxigenacion.datosSubjetivosBalanceParcial"
        value=""
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
        @input="handleInputChangeOne"
      />
    </div>
  </div>
</template>

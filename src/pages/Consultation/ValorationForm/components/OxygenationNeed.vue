<script setup lang="ts">
import { ref } from "vue";
import CardiovascularArea from "./CardiovascularArea.vue";
import PulmonaryArea from "./PulmonaryArea.vue";

const emits = defineEmits<{
  (e: "update:oxygenation-need", value: typeof oxygenationNeed.value): void;
}>();

const oxygenationNeed = ref<{
  pulmonary: {
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
    ventilacionMecanica:
      | "Invasiva"
      | "No invasiva"
      | "Valores dinamicos"
      | null;
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
  };
  cardiovascular: {
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
  };
}>({
  pulmonary: {
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
  },
  cardiovascular: {
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
  },
});

function updateOxygenationNeed(value: typeof oxygenationNeed.value) {
  emits("update:oxygenation-need", value);
}

function handlePulmonaryAreaUpdate(
  pulmonaryArea: typeof oxygenationNeed.value.pulmonary
) {
  oxygenationNeed.value.pulmonary = pulmonaryArea;
  updateOxygenationNeed(oxygenationNeed.value);
}

function handleCardiovascularAreaUpdate(
  cardiovascularArea: typeof oxygenationNeed.value.cardiovascular
) {
  oxygenationNeed.value.cardiovascular = cardiovascularArea;
  updateOxygenationNeed(oxygenationNeed.value);
}
</script>
<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">Necesidad de Oxigenación</h1>
    <img class="h-8 w-8" src="../../../assets/icons/oxygenationNeedIcon.png" />
  </div>
  <div class="mx-4 my-6">
    <PulmonaryArea @update:pulmonary-area="handlePulmonaryAreaUpdate" />
    <CardiovascularArea
      @update:cardiovascular-area="handleCardiovascularAreaUpdate"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonContent,
  IonRouterOutlet,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
</script>
<template>
  <IonContent class="font-sans">
    <div class="p-5 m-6">
      <h1 class="text-xl font-semibold">
        Relación de Guias de Practica Clinica y la Practica Basada en la
        Evidencia
      </h1>
      <h2 class="mt-8 text-center">
        Guía ESC 2023 sobre el diagnóstico y tratamiento de los síndromes
        coronarios agudos
      </h2>
    </div>
    <div class="m-6 p-2 items-center">
      <h3 class="pl-4">Tabla 1. Clases de recomendaciones</h3>
      <IonGrid>
        <IonRow
          class="text-center font-semi-bold border-y border-gray-800 bg-gray-400 text-white"
        >
          <IonCol size="3" class="py-2 border-x border-gray-800"
            >Clases de recomendaciones</IonCol
          >
          <IonCol size="5" class="py-2 border-r border-gray-800"
            >Definición</IonCol
          >
          <IonCol size="4" class="py-2 border-r border-gray-800"
            >Expresiones propuestas</IonCol
          >
        </IonRow>

        <IonRow class="border-b border-gray-800">
          <IonCol
            size="3"
            class="font-bold text-center py-2 border-x border-gray-800 text-red-800"
            >Clase I</IonCol
          >
          <IonCol size="5" class="py-2 border-r border-gray-950 bg-gray-200">
            Evidencia y/o acuerdo general en que un determinado procedimiento
            diagnóstico/tratamiento es beneficioso, útil y efectivo.
          </IonCol>
          <IonCol
            size="4"
            class="text-center font-bold py-2 border-r border-gray-800 bg-lime-500"
            >Se recomienda/está indicado</IonCol
          >
        </IonRow>

        <IonRow class="border-gray-800">
          <IonCol
            size="3"
            class="font-bold text-center py-2 border-x border-b border-gray-800 text-red-800"
            >Clase II</IonCol
          >
          <IonCol size="9" class="py-2 border-r border-gray-800 bg-gray-200">
            Evidencia conflictiva y/o divergencia de opinión acerca de la
            utilidad/eficacia de un determinado tratamiento o procedimiento.
          </IonCol>
        </IonRow>

        <IonRow class="border-gray-800">
          <IonCol
            size="3"
            class="font-bold text-center py-2 border-x border-gray-800"
            >Clase IIa</IonCol
          >
          <IonCol size="1" class="border-r border-gray-800 bg-gray-200">
          </IonCol>
          <IonCol size="4" class="py-2 border-r border-t border-gray-800">
            El peso de la evidencia/opinión está a favor de su
            utilidad/eficacia.
          </IonCol>
          <IonCol
            size="4"
            class="text-center font-bold py-2 border-r border-t border-gray-800 bg-amber-400"
            >Se debe recomendar</IonCol
          >
        </IonRow>

        <IonRow class="border-b border-gray-800">
          <IonCol
            size="3"
            class="font-bold text-center py-2 border-x border-t border-gray-800"
            >Clase IIb</IonCol
          >
          <IonCol size="1" class="border-r border-gray-950 bg-gray-200">
          </IonCol>
          <IonCol size="4" class="py-2 border-r border-t border-gray-800">
            La utilidad/eficacia está menos establecida por la
            evidencia/opinión.
          </IonCol>
          <IonCol
            size="4"
            class="text-center font-bold py-2 border-r border-t border-gray-800 bg-orange-400"
            >Se debe recomendar</IonCol
          >
        </IonRow>

        <IonRow class="border-b border-gray-800">
          <IonCol
            size="3"
            class="font-bold text-center py-2 border-x border-gray-800 text-red-800"
            >Clase III</IonCol
          >
          <IonCol size="5" class="py-2 border-r border-gray-800 bg-gray-200">
            Evidencia o acuerdo general en que un determinado tratamiento no es
            útil/efectivo y en algunos casos puede ser perjudicial.
          </IonCol>
          <IonCol
            size="4"
            class="text-center font-bold py-2 border-r border-gray-800 bg-red-500"
            >No se recomienda</IonCol
          >
        </IonRow>
      </IonGrid>
      <div class="mt-6">
        <h3 class="pl-4">Tabla 2. Niveles de incidencia.</h3>
        <IonGrid>
          <IonRow class="border-x border-gray-600 border-y bg-blue-400">
            <IonCol size="4" class="border-r border-gray-600"
              >Nivel de Incidencia A
            </IonCol>
            <IonCol
              >Datos procedentes de múltiples ensayos clínicos aleatorizados o
              metanálisis.</IonCol
            >
          </IonRow>
          <IonRow class="border-x border-gray-600 border-b bg-blue-300">
            <IonCol size="4" class="border-r border-gray-600"
              >Nivel de Incidencia B
            </IonCol>
            <IonCol
              >Datos procedentes de un único ensayo clínico aleatorizado o de
              grandes estudios no aleatorizados.</IonCol
            >
          </IonRow>
          <IonRow class="border-x border-gray-600 border-b bg-blue-200">
            <IonCol size="4" class="border-r border-gray-600"
              >Nivel de Incidencia C
            </IonCol>
            <IonCol
              >Consenso de opinión de expertos y/o pequeños estudios, estudios
              retrospectivos, registros.</IonCol
            >
          </IonRow>
        </IonGrid>
      </div>
      <IonButtons class="justify-center inset-x-0 mb-10 mt-10">
        <button
          class="text-white rounded-2xl bg-sky-700 py-3 px-16 font-semibold"
        >
          Continuar
        </button>
      </IonButtons>
    </div>
    <IonRouterOutlet />
  </IonContent>
</template>

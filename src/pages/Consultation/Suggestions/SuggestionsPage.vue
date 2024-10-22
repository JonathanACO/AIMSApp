<script setup lang="ts">
import {
  IonPage,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonContent,
  IonSpinner,
  IonButton,
} from "@ionic/vue";
import { NandasRepository } from "@/repositories/NandasRepository";
import { Nanda } from "@/entities/Nanda";
import { onMounted, reactive, ref } from "vue";
import { showErrorToast } from "@/helpers/swalFunctions";
import { SuggestionsOptions } from "./components/SuggestionsOptions";
import { Nic } from "@/entities/Nic";
import { Noc } from "@/entities/Noc";
import { NicsRepository } from "@/repositories/NicsRepository";
import { NocsRepository } from "@/repositories/NocsRepository";
import { useAppointmentStore } from "@/stores/useAppointmentStore";
import router from "@/router";

const appointmentStore = useAppointmentStore();

const isLoading = ref(false);
const nandas = ref<Nanda[]>([]);
const nics = ref<Nic[]>([]);
const nocs = ref<Noc[]>([]);
const selectedOptions = reactive<{
  nanda: Record<string, any>;
  nic: Record<string, any>;
  noc: Record<string, any>;
}>({
  nanda: {},
  nic: {},
  noc: {},
});

async function getAllNandas() {
  try {
    isLoading.value = true;
    nandas.value = await NandasRepository.fetchAll();
  } catch (error) {
    showErrorToast("Error al obtener nandas.");
  } finally {
    isLoading.value = false;
  }
}
async function getAllNics() {
  try {
    isLoading.value = true;
    nics.value = await NicsRepository.fetchAll();
  } catch (error) {
    showErrorToast("Error al obtener nics.");
  } finally {
    isLoading.value = false;
  }
}
async function getAllNocs() {
  try {
    isLoading.value = true;
    nocs.value = await NocsRepository.fetchAll();
  } catch (error) {
    showErrorToast("Error al obtener nocs.");
  } finally {
    isLoading.value = false;
  }
}

function handleSelectOption(type: "nanda" | "nic" | "noc", path: string) {
  const keys = path.split("__").filter(Boolean);
  let current = selectedOptions[type];

  for (let i = 0; i < keys.length - 2; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  const parentKey = keys[keys.length - 2];
  const finalValue = keys[keys.length - 1];

  if (!Array.isArray(current[parentKey])) {
    current[parentKey] = [];
  }

  if (!current[parentKey].includes(finalValue)) {
    current[parentKey].push(finalValue);
  }
}

function handleContinue() {
  if (Object.keys(selectedOptions.nanda).length === 0) {
    showErrorToast("Debe seleccionar al menos una NANDA.");
    return;
  }
  if (Object.keys(selectedOptions.nic).length === 0) {
    showErrorToast("Debe seleccionar al menos una NIC.");
    return;
  }
  if (Object.keys(selectedOptions.noc).length === 0) {
    showErrorToast("Debe seleccionar al menos una NOC.");
    return;
  }

  appointmentStore.individualizedCarePlanDetails = selectedOptions;
  router.push({ name: "practice-guides-info" });
}

onMounted(async () => {
  await getAllNandas();
  await getAllNics();
  await getAllNocs();
});
</script>

<template>
  <IonPage
    ><div v-if="isLoading" class="flex justify-center items-center h-full p-28">
      <IonSpinner class="p-10" color="primary" />
    </div>
    <IonContent v-else class="ion-padding" :fullscreen="true" :scroll-y="true">
      <h1 class="title mb-6">Diagnósticos, intervenciones y resultados</h1>

      <IonAccordionGroup>
        <IonAccordion
          v-for="nanda in nandas"
          :key="nanda.id"
          :value="nanda.name"
          class="border border-black rounded-md my-6"
        >
          <IonItem slot="header" color="dark" class="rounded-md">
            <IonLabel class="font-bold block"
              ><span class="mr-6">{{ nanda.code }}</span
              >{{ nanda.name }}</IonLabel
            >
          </IonItem>

          <section slot="content">
            <div class="ion-padding">
              <p class="text-lg font-bold mb-2">NANDAS</p>
              <SuggestionsOptions
                :options="nanda.diagnosticDetails"
                @selectOption="
                  (option) =>
                    handleSelectOption('nanda', `${nanda.name}__${option}`)
                "
              />

              <p class="text-lg font-bold mb-2">NICS</p>
              <SuggestionsOptions
                v-for="nic in nics"
                :key="nic.id"
                :options="{
                  [`${nic.code}  ${nic.name}`]: nic.interventionDetails,
                }"
                @selectOption="
                  (option) =>
                    handleSelectOption('nic', `${nanda.name}__${option}`)
                "
              />

              <p class="text-lg font-bold mb-2">NOCS</p>
              <SuggestionsOptions
                v-for="noc in nocs"
                :key="noc.id"
                :options="{
                  [`${noc.code}  ${noc.name}`]: noc.indicatorDetails,
                }"
                @selectOption="
                  (option) =>
                    handleSelectOption('noc', `${nanda.name}__${option}`)
                "
              />
            </div>
          </section>
        </IonAccordion>
      </IonAccordionGroup>

      <div class="w-full flex justify-end">
        <IonButton color="primary" :disabled="isLoading" @click="handleContinue"
          >Continuar</IonButton
        >
      </div>
    </IonContent>
  </IonPage>
</template>

<style>
ion-checkbox::part(container) {
  border: 1px solid black;
}

ion-checkbox::part(label) {
  text-wrap: stable;
}
</style>

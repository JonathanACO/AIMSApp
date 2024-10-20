<script setup lang="ts">
import {
  IonPage,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonContent,
  IonSpinner,
} from "@ionic/vue";
import { NandasRepository } from "@/repositories/NandasRepository";
import { Nanda } from "@/entities/Nanda";
import { onMounted, ref } from "vue";
import { showErrorToast } from "@/helpers/swalFunctions";
import { SuggestionsOptions } from "./components/SuggestionsOptions";

const isLoading = ref(false);
const nandas = ref<Nanda[]>([]);

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

onMounted(() => {
  getAllNandas();
});
</script>

<template>
  <IonPage
    ><div v-if="isLoading" class="flex justify-center items-center h-full p-28">
      <IonSpinner class="p-10" color="primary" />
    </div>
    <IonContent v-else class="ion-padding" :fullscreen="true" :scroll-y="true">
      <h1 class="title mb-6">Sugerencias</h1>

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
              <p class="text-lg font-bold mb-2">NANDA</p>
              <SuggestionsOptions :options="nanda.diagnosticDetails" />
            </div>
          </section>
        </IonAccordion>
      </IonAccordionGroup>
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

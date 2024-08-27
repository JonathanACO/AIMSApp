<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { ScreenOrientation } from "@capacitor/screen-orientation";
import { onMounted } from "vue";
async function lockScreenOrientation() {
  await ScreenOrientation.lock({ orientation: "portrait" });
}

onMounted(lockScreenOrientation);
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>

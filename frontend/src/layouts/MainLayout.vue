<script lang="ts" setup>
import { defineComponent, DefineComponent } from "vue";
import { IonRouterOutlet, IonContent, IonPage } from "@ionic/vue";


</script>
<template>
  <IonPage>
  <div class="w-full h-16 bg-primary"></div>
  <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
  </nav>
  <IonContent>
    <IonRouterOutlet />
  </IonContent>
</IonPage>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { IonContent, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { Staff } from "@/entities/Staff";

const auth = useAuthStore();
const router = useRouter();
const user = ref<Staff | null>(null);

async function logout() {
  await auth.logout();
  router.push({ name: "login" });
}

async function getUser() {
  const response = await auth.me();
  if (!response) return;
  user.value = response;
}

onMounted(async () => {
  await getUser();
});
</script>

<template>
  <IonPage>
    <IonContent :fullscreen="true">
      <div class="pt-20">
        <form @submit.prevent="logout">
          <button type="submit">Logout</button>
        </form>
      </div>
    </IonContent>
  </IonPage>
</template>

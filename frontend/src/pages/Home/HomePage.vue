<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { IonContent } from '@ionic/vue';
import { IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { User } from '@/entities/user';

const auth = useAuthStore()
const router = useRouter()
const user = ref<User>()
const loading = ref(true)

async function logout() {
  await auth.logout()
  router.push({ name: 'login' })
}

async function getUser(){
  const response = await auth.me()
  if(!response) return;
  user.value = response
  }

onMounted(async () => {
 await getUser()
})
</script>

<template>
  <IonPage>
    <IonContent>
      <div v-if="user">
        <span>
          Welcome. {{ user.email  }}!
        </span>

        <form @submit.prevent="logout">
          <button type="submit">Logout</button>
        </form>
      </div>
      <div v-else>

      </div>
    </IonContent>
  </IonPage>
</template>

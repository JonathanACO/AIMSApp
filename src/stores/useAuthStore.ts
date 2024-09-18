import { ref } from "vue";
import { defineStore } from "pinia";
import { AuthRepository } from "@/repositories/authRepository";
import { Nurse } from "@/entities/Nurse";

export const useAuthStore = defineStore("auth", () => {
  const nurse = ref<Nurse | null>(null);
  const token = ref(localStorage.getItem("token"));

  function authenticate(tokenValue: string | null) {
    if (tokenValue === null) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", tokenValue);
    }
  }

  async function login(credentials: { name: string; password: string }) {
    const token = await AuthRepository.login(credentials);
    authenticate(token);

    return token;
  }

  async function logout() {
    await AuthRepository.logout();
    token.value = null;
    nurse.value = null;
    localStorage.removeItem("token");
  }

  async function me() {
    const result = await AuthRepository.me();
    nurse.value = result;
    return nurse.value;
  }

  return { nurse, token, login, logout, me };
});

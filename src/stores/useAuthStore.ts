import { ref } from "vue";
import { defineStore } from "pinia";
import { AuthRepository } from "@/repositories/authRepository";
import { Nurse } from "@/entities/Nurse";

export const useAuthStore = defineStore("auth", () => {
  const nurse = ref<Nurse | null>(null);
  const token = ref(localStorage.getItem("token"));

  type partialTokenValue = {
    token: string;
  };

  function authenticate(tokenValue: partialTokenValue | null) {
    if (tokenValue === null) return;
    token.value = tokenValue.token;
    if (token.value) {
      localStorage.setItem("token", token.value);
    } else {
      localStorage.removeItem("token");
    }
  }

  async function login(credentials: { name: string; password: string }) {
    const result = await AuthRepository.login(credentials);
    authenticate(result);

    return result;
  }

  async function logout() {
    await AuthRepository.logout();
    token.value = null;
    nurse.value = null;
    localStorage.removeItem("token");
  }

  async function me() {
    const result = await AuthRepository.me();
    nurse.value = result.nurse;
    return nurse.value;
  }

  return { nurse, token, login, logout, me };
});

import { ref } from "vue";
import { defineStore } from "pinia";
import { AuthRepository } from "@/repositories/AuthRepository";
import { Nurse } from "@/entities/Nurse";
import { AccessToken } from "@/entities/AccessToken";

export const useAuthStore = defineStore("auth", () => {
  const nurse = ref<Nurse | null>(null);
  const token = ref(localStorage.getItem("token"));

  function authenticate(tokenValue: string | null) {
    if (tokenValue === null) {
      localStorage.removeItem("token");
      token.value = null;
    } else {
      localStorage.setItem("token", tokenValue);
      token.value = tokenValue;
    }
  }

  async function login(credentials: {
    name: string;
    password: string;
  }): Promise<AccessToken> {
    const token = await AuthRepository.login(credentials);
    authenticate(token.token);
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

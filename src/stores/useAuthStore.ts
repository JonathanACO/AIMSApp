import { ref } from "vue";
import { defineStore } from "pinia";
import { AuthRepository } from "@/repositories/AuthRepository";
import { Nurse } from "@/entities/Nurse";
import { AccessToken } from "@/entities/AccessToken";

export const useAuthStore = defineStore("auth", () => {
  const nurse = ref<Nurse | null>(getNurseFromLocalStorage());
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
    const accessToken = await AuthRepository.login(credentials);
    authenticate(accessToken.token);
    return accessToken;
  }

  async function logout() {
    await AuthRepository.logout();
    token.value = null;
    nurse.value = null;
    localStorage.removeItem("token");
    localStorage.removeItem("nurse");
  }

  async function me() {
    nurse.value = await AuthRepository.me();
    return nurse.value;
  }

  function getNurseFromLocalStorage(): Nurse | null {
    const localUser = localStorage.getItem("nurse");
    return localUser ? JSON.parse(localUser) : null;
  }

  return { nurse, token, login, logout, me };
});

import { ref } from "vue";
import { defineStore } from "pinia";
import { AuthRepository } from "@/repositories/authRepository";

const authRepository = new AuthRepository();

export const useAuthStore = defineStore("auth", () => {
  const staff = ref(null);
  const token = ref(localStorage.getItem("token"));

  function authenticate(result: any) {
    token.value = result.token;
    if (token.value) localStorage.setItem("token", token.value);
  }

  async function login(payload: any) {
    const result = await authRepository.login(payload);
    authenticate(result);

    return result;
  }

  async function logout() {
    await authRepository.logout();
    token.value = null;
    staff.value = null;
    localStorage.removeItem("token");
  }

  async function me() {
    const result = await authRepository.me();
    staff.value = result.staff;
    return staff.value;
  }

  return { staff, token, login, logout, me };
});

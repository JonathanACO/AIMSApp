import { api } from "@/services/api";

export class AuthRepository {
  public static async login(credentials: { name: string; password: string }) {
    return await api("POST", "/login", credentials);
  }

  public static async logout() {
    await api("DELETE", "/logout");
  }

  public static async me() {
    return await api("GET", "/me");
  }
}

import { api } from "@/services/api";
import { Nurse } from "@/entities/Nurse";
import { AccessToken } from "@/entities/AccessToken";

export class AuthRepository {
  static async login(credentials: {
    name: string;
    password: string;
  }): Promise<AccessToken> {
    return await api("POST", "/auth/login", credentials);
  }

  static async logout() {
    await api("DELETE", "/auth/logout");
  }

  static async me(): Promise<Nurse> {
    return await api("GET", "/auth/me");
  }
}

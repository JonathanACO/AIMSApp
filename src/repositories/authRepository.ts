import { Nurse } from "@/entities/Nurse";
import { api } from "@/services/api";
import { AccessToken } from "@/entities/AccessToken";

export class AuthRepository {
  public static async login(credentials: {
    name: string;
    password: string;
  }): Promise<AccessToken> {
    return await api("POST", "/auth/login", credentials);
  }

  public static async logout() {
    await api("DELETE", "/auth/logout");
  }

  public static async me(): Promise<Nurse> {
    return await api("GET", "/auth/me");
  }
}

import { Nurse } from "@/entities/Nurse";
import { api } from "@/services/api";
import { AccessToken } from "@/entities/AccessToken";

export class AuthRepository {
  public static async login(credentials: {
    name: string;
    password: string;
  }): Promise<AccessToken> {
    return await api("POST", "/login", credentials);
  }

  public static async logout() {
    await api("DELETE", "/logout");
  }

  public static async me(): Promise<Nurse> {
    return await api("GET", "/me");
  }
}

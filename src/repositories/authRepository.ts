import { Nurse } from "@/entities/Nurse";
import { api } from "@/services/api";

export class AuthRepository {
  public static async login(credentials: {
    name: string;
    password: string;
  }): Promise<string> {
    return await api("POST", "/login", credentials);
  }

  public static async logout() {
    await api("DELETE", "/logout");
  }

  public static async me(): Promise<Nurse> {
    return await api("GET", "/me");
  }
}

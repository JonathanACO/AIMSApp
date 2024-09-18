import { Nurse } from "@/entities/Nurse";
import { api } from "@/services/api";

export class AuthRepository {
  public static async login(credentials: {
    name: string;
    password: string;
  }): Promise<string> {
    const data = await api("POST", "/login", credentials);
    return data.token;
  }

  public static async logout() {
    await api("DELETE", "/logout");
  }

  public static async me(): Promise<Nurse> {
    const data = await api("GET", "/me");
    return data.nurse;
  }
}

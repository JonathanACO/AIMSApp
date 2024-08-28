import { api } from "@/helpers/apiBackend";

export class AuthRepository {
  public async login(payload: any) {
    return await api("POST", "/login", payload);
  }

  public async logout() {
    await api("DELETE", "/logout");
  }

  public async me() {
    return await api("GET", "/me");
  }
}

import { api } from "@/services/api";
import { Noc } from "@/entities/Noc";

export class NocsRepository {
  static async fetchAll(): Promise<Noc[]> {
    return await api("GET", "/nocs");
  }
}

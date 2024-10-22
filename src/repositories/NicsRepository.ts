import { api } from "@/services/api";
import { Nic } from "@/entities/Nic";

export class NicsRepository {
  static async fetchAll(): Promise<Nic[]> {
    return await api("GET", "/nics");
  }
}

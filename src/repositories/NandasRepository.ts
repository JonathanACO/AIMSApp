import { Nanda } from "@/entities/Nanda";
import { api } from "@/services/api";

export class NandasRepository {
  static async fetchAll(): Promise<Nanda[]> {
    return await api("GET", "/nandas");
  }
}

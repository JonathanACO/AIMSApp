import { api } from "@/services/api";
import { Nanda } from "@/entities/Nanda";

export class NandasRepository {
  static async fetchAll(): Promise<Nanda[]> {
    return await api("GET", "/nandas");
  }
}

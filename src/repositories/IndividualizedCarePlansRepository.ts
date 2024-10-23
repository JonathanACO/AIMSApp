import {
  CreateIndividualizedCarePlanDTO,
  IndividualizedCarePlan,
} from "@/entities/IndividualizedCarePlan";
import { api } from "@/services/api";

export class IndividualizedCarePlansRepository {
  static async create(
    data: CreateIndividualizedCarePlanDTO
  ): Promise<IndividualizedCarePlan> {
    return await api("POST", "/individualized-care-plans", data);
  }

  static async fetchAll(): Promise<IndividualizedCarePlan[]> {
    return await api("GET", "/individualized-care-plans");
  }

  static async fetchById(id: number): Promise<IndividualizedCarePlan> {
    return await api("GET", `/individualized-care-plans/${id}`);
  }
}

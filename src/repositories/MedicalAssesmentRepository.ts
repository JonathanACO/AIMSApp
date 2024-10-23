import { api } from "@/services/api";
import {
  MedicalAssesment,
  MedicalAssesmentDto,
} from "../entities/MedicalAssesment";

export class MedicalAssesmentsRepository {
  static async create(data: MedicalAssesmentDto): Promise<MedicalAssesment> {
    return await api("POST", "/medical-assesments", data);
  }
}

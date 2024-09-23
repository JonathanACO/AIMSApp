import { Patient } from "@/entities/Patient";
import { api } from "@/services/api";

export class PatientRespository {
  public async getDetails(id: number): Promise<Patient> {
    return await api("GET", `/patient-details/${id}`);
  }
}

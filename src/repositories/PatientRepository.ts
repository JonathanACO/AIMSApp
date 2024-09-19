import { api } from "@/services/api";

export class PatientRepository {
  public async getNursePatients(nurseId: number): Promise<any> {
    return await api("GET", `/nurse-patients/${nurseId}`);
  }
}

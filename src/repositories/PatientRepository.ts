import { api } from "@/helpers/apiBackend";

export class PatientRespository {
  public async getDetails(id: number) {
    return await api("GET", `/patient-details/${id}`);
  }
}

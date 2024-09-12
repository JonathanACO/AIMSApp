import { api } from "@/helpers/apiBackend";

export class AppointmetsRespository {
  public async getAppointmentsHistory(id: number) {
    return await api("GET", `/appointments-history/${id}`);
  }
}

import { Appointment } from "@/entities/Appointment";
import { api } from "@/services/api";

export class AppointmetsRespository {
  public async getAppointmentsHistory(id: number): Promise<Appointment[]> {
    return await api("GET", `/appointments-history/${id}`);
  }
}

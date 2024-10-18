import { Appointment } from "@/entities/Appointment";
import { api } from "@/services/api";

export class AppointmentsRepository {
  public static async fetchByPatientId(id: number): Promise<Appointment[]> {
    return await api("GET", `/patients/${id}/appointments`);
  }
}

import { api } from "@/services/api";
import { Appointment } from "@/entities/Appointment";

export class AppointmentsRepository {
  static async fetchByPatientId(id: number): Promise<Appointment[]> {
    return await api("GET", `/patients/${id}/appointments`);
  }
}

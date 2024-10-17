import { api } from "@/services/api";
import { Appointment } from "@/entities/Appointment";

export class AppointmentsRepository {
  public static async getPatientAppointments(): Promise<Appointment[]> {
    return await api("GET", `/appointments/`);
  }
}

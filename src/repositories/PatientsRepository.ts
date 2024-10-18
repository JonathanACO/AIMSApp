import { Patient } from "@/entities/Patient";
import { api } from "@/services/api";

export class PatientsRepository {
  public static async fetchById(id: number): Promise<Patient> {
    return await api("GET", `/patients/${id}`);
  }

  public static async fetchByNurseId(id: number): Promise<
    {
      patient: number;
      room: string;
      lastAppointment: Date;
      isCompleted: boolean;
    }[]
  > {
    return await api("GET", `/nurses/${id}/patients`);
  }
}

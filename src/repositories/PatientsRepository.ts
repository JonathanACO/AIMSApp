import { api } from "@/services/api";

export class PatientsRepository {
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

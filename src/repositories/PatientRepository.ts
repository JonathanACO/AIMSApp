import { api } from "@/services/api";

export class PatientRepository {
  public static async getNursePatients(nurseId: number): Promise<
    {
      patient: number;
      room: string;
      lastAppointment: Date;
      isCompleted: boolean;
    }[]
  > {
    return await api("GET", `/patients/nurse-patients/${nurseId}`);
  }
}

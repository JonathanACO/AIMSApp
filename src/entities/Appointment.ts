export type Appointment = {
  id: number;
  isSigned: boolean;
  createdAt: Date;
  completedAt: Date | null;
  patientId: number;
};

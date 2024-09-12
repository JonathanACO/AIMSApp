export type Appointment = {
  id: number;
  isSigned: boolean;
  createdAt: Date;
  completedAt: Date;
  patientId: number;
};

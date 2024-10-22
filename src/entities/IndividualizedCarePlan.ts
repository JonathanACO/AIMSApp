export type IndividualizedCarePlan = {
  id: number;
  createdAt: Date;
  modifiedAt: Date;
  appointmentId: number;
  planDetails: Record<string, any>;
};

export type CreateIndividualizedCarePlanDTO = {
  appointmentId: number;
  planDetails: Record<string, any>;
};

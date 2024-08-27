export type Staff = {
  id: number;
  name: string;
  password: string;
  sex: SexEnum;
  ageInYears: number;
  shift: ShiftEnum;
  workExperienceInMonths: number;
  role: RoleEnum;
  createdAt: Date;
  modifiedAt: Date;
  roomId: number;
  patientId: number;
};

export enum SexEnum {
  masculino = "Masculino",
  femenino = "Femenino",
}

export enum ShiftEnum {
  morning = "Matutino",
  afternoon = "Vespertino",
  night = "Nocturno",
}

export enum RoleEnum {
  nurse = "Nurse",
  administrator = "Administrator",
}

export type Nurse = {
  id: number;
  name: string;
  password: string;
  sex: SexEnum;
  ageInYears: number;
  shift: ShiftEnum;
  workExperienceInMonths: number;
  createdAt: Date;
  modifiedAt: Date;
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

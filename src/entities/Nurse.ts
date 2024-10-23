export type Nurse = {
  id: number;
  name: string;
  password: string;
  sex: SexEnum;
  ageInYears: number;
  workshift: ShiftEnum;
  workExperienceInMonths: number;
  createdAt: Date;
  modifiedAt: Date;
};

export enum SexEnum {
  Masculino = "Masculino",
  Femenino = "Femenino",
}

export enum ShiftEnum {
  Morning = "Matutino",
  Afternoon = "Vespertino",
  Night = "Nocturno",
}

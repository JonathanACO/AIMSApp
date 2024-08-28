type Sex = "Male" | "Female";
type Shift = "Morning" | "Evening" | "Night";
type Role = "Admin" | "Nurse";

export type Staff = {
  id: number;
  name: string | null;
  email: string;
  sex: Sex;
  age: number;
  shift: Shift;
  workExperienceInMonths: number | null;
  roomId: number | null;
  role: Role;
  createdAt: Date;
  modifiedAt: Date;
};

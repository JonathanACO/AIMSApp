export type Staff = {
    id: number;
    nombre: string;
    sexo: "Masculino" | "Femenino";
    edad: number;
    turno: "Matutino" | "Vespertino" | "Nocturno";
    experiencia_laboral: string;
    habitacionId: number;
    created_at: Date;
    modified_at: Date | null;
  };
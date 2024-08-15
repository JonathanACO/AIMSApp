export type Staff = {
  id: number;
  nombre: string;
  correo: string;
  telefono: string | null;
  habitacionId: number | null;
  rol: "Administrador" | "Enfermero";
};

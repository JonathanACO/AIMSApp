export function formatDateToLong(date: any) {
  try {
    if (!date) {
      console.warn("La fecha proporcionada es inválida o está vacía");
      return "Fecha no disponible";
    }
    const parsedDate = new Date(date);
    // Si el valor no es una fecha válida
    if (isNaN(parsedDate.getTime())) {
      console.warn("Formato de fecha no válido:", date);
      return "Fecha no disponible";
    }
    // Formateo correcto de la fecha
    const formattedDate = Intl.DateTimeFormat("es-MX", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(parsedDate);
    return formattedDate;
  } catch (error) {
    console.error("Error formateando la fecha:", error);
    return "Fecha no disponible";
  }
}

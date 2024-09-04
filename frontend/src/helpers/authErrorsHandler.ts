import { showErrorToast } from "./swalFunctions";

const errorMessagesMap: Record<string, string> = {
  "Invalid user credentials": "Nombre o contraseña incorrectos",
  "The password field must be defined": "Introduzca una contraseña",
  "The name field must be defined": "Introduzca su nombre",
  "The password field must have at least 8 characters":
    "La contraseña debe tener al menos 8 carateres",
  "Internal Server Error": "Error interno del servidor",
  "Failed to fetch":
    "No se pudo conectar con el servidor. Por favor, verifica tu conexión a Internet o intenta de nuevo más tarde",
};

export function authErrorHandler(error: any) {
  if (error.errors && Array.isArray(error.errors)) {
    error.errors.forEach((err: any) => {
      const translatedMessage = errorMessagesMap[err.message] || err.message;
      showErrorToast(translatedMessage);
    });
  } else {
    const translatedMessage =
      errorMessagesMap[error.message] || error.message || "Ocurrió un error";
    showErrorToast(translatedMessage);
  }
}

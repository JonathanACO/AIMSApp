import { AxiosError } from "axios";
import { showErrorToast } from "./swalFunctions";
import { errorMessagesMap } from "./errorMessagesMap";

export function errorHandler(error: unknown) {
  if (error instanceof AxiosError) {
    let errorMessage = "Ocurrió un error";
    if (error.response && error.response.data) {
      const responseData = error.response.data;

      if (Array.isArray(responseData.errors)) {
        responseData.errors.forEach((err: any) => {
          const translatedMessage =
            errorMessagesMap[err.message] || err.message;
          showErrorToast(translatedMessage);
        });
      } else {
        const serverErrorMessage =
          responseData.message ||
          responseData.error ||
          "Ocurrió un error en el servidor";
        errorMessage =
          errorMessagesMap[serverErrorMessage] || serverErrorMessage;
        showErrorToast(errorMessage);
      }
    } else {
      errorMessage = errorMessagesMap[error.message] || error.message;
      showErrorToast(errorMessage);
      showErrorToast("Ocurrio un error inesperado");
    }
  }
}

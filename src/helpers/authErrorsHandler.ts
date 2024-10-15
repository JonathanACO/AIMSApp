import { AxiosError } from "axios";
import { showErrorToast } from "./swalFunctions";

export function errorHandler(error: unknown) {
  if (error instanceof AxiosError) {
    if (error.response && typeof error.response.data === "string") {
      showErrorToast(error.response.data);
    } else {
      showErrorToast("Ocurrió un error inesperado");
    }
  } else {
    showErrorToast("Ocurrió un error inesperado");
  }
}

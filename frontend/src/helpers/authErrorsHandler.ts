import { showErrorToast } from "./swalFunctions";

export function authErrorHandler(error: any) {
  if (error.errors && Array.isArray(error.errors)) {
    error.errors.forEach((err: any) => {
      showErrorToast(`${err.message}`);
    });
  } else {
    showErrorToast(`${error.message || "An error occurred"}`);
  }
}
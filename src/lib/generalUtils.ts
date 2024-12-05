import { toast } from "react-toastify";

export const showError = (message: string) => {
    return toast.error(message);
  };
  
  export const showSuccess = (message: string) => {
    return toast.success(message);
  };
  
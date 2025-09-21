import Swal from "sweetalert2";

// Success Alert
export const showSuccess = (title, message) => {
  Swal.fire({
    title,
    text: message,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#22c55e", // green-500
  });
};

// Error Alert
export const showError = (title, message) => {
  Swal.fire({
    title,
    text: message,
    icon: "error",
    confirmButtonText: "Try Again",
    confirmButtonColor: "#ef4444", // red
  });
};

// Warning alert
export const showWarning = (title, message) => {
  Swal.fire({
    title,
    text: message,
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "#f59e0b", // amber-500
  });
};

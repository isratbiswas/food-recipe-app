import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops! Something went wrong",
        text:
          error.statusText || error.message || "We couldn’t load this page.",
      });
    }
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">😢 Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">
        {error
          ? error.statusText || error.message
          : "An unexpected error occurred. Please try again."}
      </p>
      <p className="text-gray-500 mb-6">
        It looks like the page you’re looking for isn’t available or something
        went wrong.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;

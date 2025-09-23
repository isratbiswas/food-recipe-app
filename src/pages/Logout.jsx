import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { toast } from "sonner";

const Logout = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      const res = await logout();
      toast.success("User logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error("Logout error:", error);
    }
  };
  return (
    <>
      <button
        onClick={handleLogOut}
        className="bg-red-500 px-4 py-2 text-white rounded"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;

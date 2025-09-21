import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged;
  }, []);
  return <div></div>;
};

export default AuthProvider;

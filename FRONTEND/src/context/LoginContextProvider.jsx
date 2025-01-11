import React, { createContext, useState, useEffect } from "react";

export const loginContext = createContext();

function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </loginContext.Provider>
  );
}

export default LoginContextProvider;

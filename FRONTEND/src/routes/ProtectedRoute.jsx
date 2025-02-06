import React, { useContext, useEffect } from "react";
import { loginContext } from "../context/LoginContextProvider";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(loginContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;
  return <>{children}</>;
}

export default ProtectedRoute;

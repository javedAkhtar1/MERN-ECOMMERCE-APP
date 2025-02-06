import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { cartContext } from "./CartContextProvider";

export const loginContext = createContext();

function LoginContextProvider({ children }) {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const { setCartQuantity, setCart, setCartTotal } = useContext(cartContext)

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });


  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const navigate = useNavigate()

  async function handleLogout() {
    try {
      const response = await axios.post("http://localhost:3000/logout");
      if (response.status == 200) {
        setIsLoggedIn(false)
        setEmailErrorMessage("")
        setPasswordErrorMessage("")
        setCartQuantity(0)
        setCartTotal(0)
        setCart([])
        localStorage.removeItem("isLoggedIn");
        navigate("/")
      }
    }
    catch (e) {
      console.log("logout failed")
      console.log(e)
    }
  }

  return (
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleLogout, emailErrorMessage, setEmailErrorMessage, passwordErrorMessage, setPasswordErrorMessage }}>
      {children}
    </loginContext.Provider>
  );
}

export default LoginContextProvider;

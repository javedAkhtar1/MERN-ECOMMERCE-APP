import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(14);

  function addToCart(product) {
    setCart((prevItems) => [...prevItems, product]);
  }

  return (
    <>
      <cartContext.Provider
        value={{ cart, setCart, cartQuantity, setCartQuantity, addToCart }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}

export default CartContextProvider;

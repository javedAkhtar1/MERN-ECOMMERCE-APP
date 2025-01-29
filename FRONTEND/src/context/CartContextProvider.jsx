import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  function addToCart(product) {
    setCart((prevItems) => [...prevItems, product]);
  }
  
  function removeFromCart(productId) {
    setCart((prevItems) => prevItems.filter(item => item._id !== productId));
  }

  return (
    <>
      <cartContext.Provider
        value={{ cart, setCart, cartQuantity, setCartQuantity, addToCart, removeFromCart }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}

export default CartContextProvider;

import React, { createContext, useState } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  function addToCart(product) {
    setCart((prevItems) => {
      const itemExists = prevItems.some((item) => item._id === product._id);
      if (itemExists) return prevItems; 
      return [...prevItems, product];
    });
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

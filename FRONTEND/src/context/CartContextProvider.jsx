import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartQuantity, setCartQuantity] = useState(() => {
    return localStorage.getItem("cartQuantity")
      ? parseInt(localStorage.getItem("cartQuantity"), 10)
      : 0;
  });

  // Save cart and cartQuantity to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQuantity", cartQuantity);
  }, [cart, cartQuantity]);

  function addToCart(product) {
    setCart((prevItems) => {
      const itemExists = prevItems.some((item) => item._id === product._id);
      if (itemExists) return prevItems;

      return [...prevItems, product];
    });

    setCartQuantity((prev) => prev + 1);
  }

  function removeFromCart(productId) {  
    setCart((prevItems) => prevItems.filter(item => item._id !== productId));
    // setCartQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <cartContext.Provider
      value={{ cart, setCart, cartQuantity, setCartQuantity, addToCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;

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

  const [cartTotal, setCartTotal] = useState(() => {
    return localStorage.getItem("cartTotal")
      ? parseInt(localStorage.getItem("cartTotal"), 10)
      : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQuantity", cartQuantity);
    localStorage.setItem("cartTotal", cartTotal);
  }, [cart, cartQuantity, cartTotal]);

  function addToCart(product) {
    setCart((prevItems) => {
      const itemExists = prevItems.some((item) => item._id === product._id);
      if (itemExists) return prevItems;

      return [...prevItems, product];
    });

    setCartQuantity((prev) => prev + 1);
    setCartTotal((prev) => prev + product.price)
  }
  
  function removeFromCart(product) {  
    setCart((previtems) => {
      const updatedCart = previtems.filter((item) => item._id !== product._id)
      if (updatedCart.length === 0) {
        setCartTotal(0)
      }
      return updatedCart
    })
    
    // setCartTotal((prev) => prev - product.price)
    setCartQuantity((prev) => Math.max(prev - 1, 0));
  }
  

  return (
    <cartContext.Provider
      value={{ cart, setCart, cartQuantity, setCartQuantity, addToCart, removeFromCart, cartTotal, setCartTotal }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;

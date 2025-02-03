import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextProvider";

function CartProductCard({ product }) {
  const { removeFromCart, setCartQuantity, cartQuantity } = useContext(cartContext);

  // Initialize product quantity from localStorage or default to 1
  const [productQuantity, setProductQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem(`quantity_${product._id}`);
    return storedQuantity ? parseInt(storedQuantity) : 1;  // Default to 1 if not found
  });

  // Update localStorage when the quantity changes
  useEffect(() => {
    localStorage.setItem(`quantity_${product._id}`, productQuantity);
  }, [productQuantity, product._id]);

  // Function to add quantity
  function addQuantity() {
    setProductQuantity((prev) => {
      const newQuantity = prev + 1;
      setCartQuantity((prevTotal) => prevTotal + 1);
      return newQuantity;
    });
  }

  // Function to remove quantity
  function removeQuantity() {
    if (productQuantity === 1) return;  // Prevent going below 1
    setProductQuantity((prev) => {
      const newQuantity = prev - 1;
      setCartQuantity((prevTotal) => prevTotal - 1);
      return newQuantity;
    });
  }

  // Handle removing product from cart
  function handleRemoveFromCart() {
    removeFromCart(product._id);
    setCartQuantity((prev) => Math.max(0, prev - productQuantity));

    // Remove the product quantity from localStorage
    localStorage.removeItem(`quantity_${product._id}`);

    // Remove product from the cart in localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.filter((item) => item._id !== product._id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div className="product-card flex flex-col p-3 hover:cursor-pointer">
      <Link to={`/shop/product/${product._id}`}>
        <img
          src={product.image}
          alt={`${product.name}`}
          className="h-[200px] w-[200px] select-none transform transition-transform duration-200 ease-in-out hover:scale-105"
        />
      </Link>
      <h3 className="text-lg font-light font-Nunito mt-2 max-w-44 truncate">{product.name}</h3>
      <div className="flex lg:flex-row flex-col gap-3 lg:justify-between lg:items-center">
        <p className="mt-1 text-lg font-Rubik">Rs. {product.price}</p>
        <button onClick={handleRemoveFromCart} className="bg-gray-400 px-3 rounded-sm hover:bg-gray-300">
          Remove
        </button>
      </div>
      <div className="flex justify-between font-Nunito mt-2">
        <button onClick={removeQuantity} className="bg-gray-400 px-3 rounded-sm hover:bg-gray-300">-</button>
        <p className="text-sm">Quantity: {productQuantity}</p>
        <button onClick={addQuantity} className="bg-gray-400 px-3 rounded-sm hover:bg-gray-300">+</button>
      </div>
    </div>
  );
}

export default CartProductCard;

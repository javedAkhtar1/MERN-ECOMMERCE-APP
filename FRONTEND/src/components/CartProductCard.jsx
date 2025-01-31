import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextProvider";

function CartProductCard({ product }) {
  const [productQuantity, setProductQuantity] = useState(1)
  const { removeFromCart, setCartQuantity } = useContext(cartContext)

  function addQuantity() {
    setProductQuantity(prev => prev+1) 
    setCartQuantity(prev => prev + 1)
  }
  
  function removeQuantity() {
    if (productQuantity === 1) return
    setProductQuantity(prev => prev-1) 
    setCartQuantity(prev => prev - 1)
  }

  return (
    <>
    <div className="product-card flex flex-col p-3 hover:cursor-pointer">
    <Link to={`/shop/product/${product._id}`} >
      <img
        src={product.image}
        alt={`${product.name}`}
        className="h-[200px] w-[200px] select-none transform transition-transform duration-200 ease-in-out hover:scale-105"
      />
      </Link>
      <h3 className="text-lg font-light font-Nunito mt-2 max-w-44 truncate">{product.name}</h3>
      {/* <p className="text-[.8rem] max-w-44 truncate">{product.description}</p> */}
      <div className="flex lg:flex-row flex-col gap-3 lg:justify-between lg:items-center">
      <p className="mt-1 text-lg font-Rubik">Rs. {product.price}</p>
      <button onClick={() => removeFromCart(product._id)} className="bg-gray-400 px-3 rounded-sm hover:bg-gray-300">Remove</button>
      </div>
      <div className="flex justify-between font-Nunito mt-2">
      <button onClick={removeQuantity} className="bg-gray-400 px-3 rounded-sm hover:bg-gray-300">-</button>
      <p className="text-sm">Quantity: {productQuantity}</p>
      <button onClick={addQuantity} className="bg-gray-400 px-3 rounded-sm hover:bg-gray-300">+</button>
      </div>
    </div>
    </>
  );
}

export default CartProductCard;

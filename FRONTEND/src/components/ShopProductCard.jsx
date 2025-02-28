import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/CartContextProvider";
import { loginContext } from "../context/LoginContextProvider";

function ShopProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart, cart} = useContext(cartContext);
  const {isLoggedIn} = useContext(loginContext)
  
  const isInCart = cart.some((item) => item._id === product._id);
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (!isInCart) {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="product-card flex flex-col p-3 hover:cursor-pointer">
        <Link to={`/shop/product/${product._id}`}>
          <img
            src={product.image}
            alt={`${product.name}`}
            className="h-[200px] w-[200px] select-none transform transition-transform duration-200 ease-in-out hover:scale-105"
          />
          <h3 className="text-lg font-light font-Nunito mt-2 max-w-44 truncate">
            {product.name}
          </h3>
          <p className="text-[.8rem] max-w-44 truncate">
            {product.description}
          </p>
        </Link>
        <div className="flex lg:flex-row flex-col gap-3 lg:justify-between mt-2 lg:items-center">
          <span className="mt-1 text-lg font-Rubik cursor-auto">Rs. {product.price}</span>
          { isInCart ? <button
            className="font-Nunito border px-3 py-[0.1rem] rounded-sm text-sm bg-gray-400 cursor-auto"
          >
            In Cart
          </button> :
  
            <button
            onClick={handleAddToCart}
            className="font-Nunito border px-3 py-[0.1rem] rounded-sm text-sm bg-gray-300 hover:bg-gray-400"
          >
            Add to cart
          </button> }
        </div>
      </div>
    </>
  );
}

export default ShopProductCard;

import React, { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(cartContext);
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold mt-5 text-center font-Nunito">
        Your Cart
      </h1>
      {cart.length === 0 && (
          <div className="text-center text-xl font-Nunito flex justify-center mt-36 h-[80%]">
            <p>Your cart is empty. <Link to={"/shop"} className="underline text-blue-800"> Go to Shop </Link> </p>
          </div>
        )}
      <div className="min-h-[100vh] featured-products max-w-6xl px-5 grid grid-rows-2 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 mt-6 mx-auto justify-items-center gap-8">
        {cart.map((item) => {
          return <CartProductCard key={item._id} product={item} />;
        })}
      </div>

      <Footer />
    </>
  );
}

export default Cart;

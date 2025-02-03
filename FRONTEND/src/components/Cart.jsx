import React, { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, cartQuantity } = useContext(cartContext);

  return (
    <>
      <Navbar />
      {
        cart.length === 0 ? (
            <div className="text-center text-xl font-Nunito flex justify-center mt-36 min-h-[80vh]">
              <p>
                Your cart is empty.{" "}
                <Link to={"/shop"} className="underline text-blue-800">
                  Go to Shop
                </Link>
              </p>
            </div>
          ) : (

      <div className="md:flex min-h-[90vh] max-w-5xl mx-auto gap-[16rem] p-7 ">
        <div>
          <h1 className="text-3xl font-bold mt-5 text-center font-Nunito">
            Your Cart
          </h1>
            <div className="min-h-[100vh] featured-products max-w-6xl px-5 grid grid-rows-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 mt-6 mx-auto justify-items-center gap-8">
              {cart.map((item) => {
                return <CartProductCard key={item._id} product={item} />;
              })}
            </div>  
        </div>

        <div>
          <h1 className="text-3xl font-bold mt-5 text-center font-Nunito">
            Summary
          </h1>
          <div>
            <p>Total items: {cartQuantity}</p>
            <p>Total amount: Rs. 1920</p>
            <p>Estimated delivery time: 7 days</p>
            <button className=" border-black px-4 py-1 bg-yellow-300 hover:bg-yellow-400 rounded w-full mt-3">Checkout</button>
          </div>
        </div>
      </div>
    )
    }

      <Footer />
    </>
  );
}

export default Cart;

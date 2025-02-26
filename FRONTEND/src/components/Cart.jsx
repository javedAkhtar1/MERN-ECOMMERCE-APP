import React, { useContext, useState } from "react";
import { cartContext } from "../context/CartContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const { cart, cartQuantity, cartTotal } = useContext(cartContext);
  // const [cartTotal, setCartTotal] = useState(0);

  async function getSessionID() {
    try {
      const res = await axios.get("http://localhost:3000/checkout")
      if (res.data && res.data.payment_session_id) {
        console.log(res.data)
      }
    }
    catch (e) {
      console.log("payment failed", e)
    }
  }

  async function makePayment(e) {
    e.preventDefault()
    try {
      const response = await getSessionID()
      // console.log(response)
    }
    catch (e) {
      console.log("Payment failed!", e)
    }
  }

  return (
    <>
      <Navbar />
      {cart.length === 0 ? (
        <div className="text-center text-xl font-Nunito flex justify-center mt-36 min-h-[80vh]">
          <p>
            Your cart is empty.{" "}
            <Link to={"/shop"} className="underline text-blue-800">
              Go to Shop
            </Link>
          </p>
        </div>
      ) : (
        <div className="lg:flex md:min-h-[90vh] max-w-5xl mx-auto lg:gap-[12rem] gap-3 p-7 ">
          <div>
            <h1 className="text-3xl font-bold mt-5 text-center font-Nunito">
              Your Cart
            </h1>
            <div className="lg:min-h-[100vh] featured-products max-w-6xl px-5 grid grid-rows-1 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 mt-6 mx-auto justify-items-center gap-8">
              {cart.map((item) => {
                return <CartProductCard key={item._id} product={item} />;
              })}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mt-5 text-center font-Nunito">
              Summary
            </h1>
            <div className="p-4">
              <p>Total items: {cartQuantity}</p>
              <p>Total amount: Rs. {cartTotal}</p>
              <p>Estimated delivery time: 7 days</p>
              <div className="flex flex-col mt-3 gap-1">
              <label htmlFor="address">Address line 1</label><input type="text" className="border border-gray-400 rounded-sm px-1" />
              <label htmlFor="address">Address line 2</label><input type="text" className="border border-gray-400 rounded-sm px-1" />
              <label htmlFor="address">Address line 3</label><input type="text" className="border border-gray-400 rounded-sm px-1" />
              </div>
              <button onClick={makePayment} className=" border-black px-4 py-1 bg-yellow-300 hover:bg-yellow-400 rounded w-full mt-3">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Cart;

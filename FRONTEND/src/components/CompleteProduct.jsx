import React, { useContext, useState   } from "react";
import { useNavigate, useParams } from "react-router";
// import { products } from "../shop.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";
import { productsContext } from "../context/ProductsContextProvider.jsx";
import { loginContext } from "../context/LoginContextProvider.jsx";
import { cartContext } from "../context/CartContextProvider.jsx";
import axios from "axios";
import {load} from "@cashfreepayments/cashfree-js"

function CompleteProduct() {
  const { id } = useParams();
  const { products } = useContext(productsContext);
  const { isLoggedIn } = useContext(loginContext);
  const { addToCart, cart } = useContext(cartContext);

  const navigate = useNavigate();

  const product = products.find((p) => p._id === id);
  const similarProducts = products
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 8);

  if (!product) {
    return <p>OOPS! Product not found!</p>;
  }

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

  let cashfree;
  const initializeSDK = async function() {
      cashfree = await load({
        mode: "sandbox",
      })
  }
  initializeSDK()

  const [orderId, setOrderId] = useState("")

  async function getSessionID() {
    try {
      const res = await axios.get(`https://mern-ecommerce-app-final.onrender.com/checkout?amount=${product.price}`)
      if (res.data && res.data.payment_session_id) {
        setOrderId(res.data.order_id)
        return res.data.payment_session_id
      }
    }
    catch (e) {
      console.log("payment failed", e)
    }
  }

  async function verifyPayment(orderId) {
    try {
      let res = await axios.post("http://localhost:3000/verify", {
        orderId: orderId,
      })
      
      if (res && res.data) {
        alert("Payment verified")
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  async function makePayment(e) {
    e.preventDefault()
    
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      let sessionId = await getSessionID()
      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal"
      }
      cashfree.checkout(checkoutOptions).then((res) => {
        console.log("Payment initialized")

        verifyPayment(orderId)
      })

    }
    catch (e) {
      console.log("Payment failed!", e)
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-4 p-5 flex flex-col md:flex-row items-center justify-center md:items-start gap-10">
        <img
          src={product.image}
          alt={`${product.name}'s image`}
          className="h-[400px] w-[400px] p-5"
        />
        <div className="p-5">
          <h1 className="xs:text-4xl text-3xl font-Nunito">{product.name}</h1>
          <p className="text-gray-500">{product.description}</p>
          <div className="flex mt-3 gap-1 font-Rubik text-sm">
            <p> {product.rating} </p>
            <span className="text-yellow-500">&#9733;</span>
            <p className="border-l border-gray-400 px-2">
              {product.ratingCount} Ratings
            </p>
          </div>
          <p className="mt-3 xs:text-2xl font-Rubik">
            Rs. {product.price}{" "}
            <span className="text-xs text-green-600">
              (inclusive of all taxes)
            </span>
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <button onClick={makePayment} className="font-Nunito border py-3 rounded-sm text-md bg-gray-300 hover:bg-gray-400">
              Buy Now
            </button>
            {isInCart ? (
              <button className="font-Nunito border py-3 rounded-sm text-md bg-gray-400 cursor-auto">
                In Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="font-Nunito border py-3 rounded-sm text-md bg-gray-300 hover:bg-gray-400"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
        <div className="max-w-[250px] lg:flex lg:flex-col gap-4 p-5 hidden">
          <h2>About this product:</h2>
          <p className="text-sm text-gray-500">{product.about} </p>
        </div>
      </div>

      {/* For smaller than lg */}
      <div className="flex flex-col gap-2 p-5 items-center justify-center max-w-5xl mx-auto lg:hidden">
        <h2>About this product:</h2>
        <p className="text-sm text-gray-500">{product.about} </p>
      </div>

      {/* Reviews */}
      <h1 className="text-center text-3xl font-Nunito text-gray-700 border-b max-w-5xl mx-auto p-3">
        Reviews
      </h1>
      {product.reviews.map((r) => {
        return (
          <>
            <div className="max-w-5xl mx-auto px-5 py-3 border-b">
              <div className="flex items-center py-2 text-lg font-Nunito gap-1">
                <AccountCircleRoundedIcon className="text-xs text-gray-500" />
                <p>{r.user}</p>
              </div>
              <p className="px-2 text-sm">{r.comment}</p>
            </div>
          </>
        );
      })}

      {/* You might also like */}
      <h1 className="text-center font-light mt-6 text-2xl font-Nunito text-red-900 border-b max-w-5xl mx-auto p-3">
        YOU MIGHT ALSO LIKE
      </h1>
      <div className="max-w-5xl mx-auto p-5 pb-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 truncate">
        {similarProducts.map((product) => (
          <>
            <div className="flex flex-col gap-2 items-center">
              <Link
                to={`/shop/product/${product._id}`}
                className="h-[200px] w-[200px]"
              >
                <img
                  src={product.image}
                  alt={`${product.image} image`}
                  className="h-[200px] w-[200px]"
                />
              </Link>
              <p className="">{product.name}</p>
              <p className="font-Rubik">Rs. {product.price}</p>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default CompleteProduct;

import React from "react";
import { useParams } from "react-router";
import { products } from "../shop.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function CompleteProduct() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>OOPS! Product not found!</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-6xl mx-auto mt-4 p-5 flex gap-10">
        <img
          src={product.image}
          alt={`${product.name}'s image`}
          className="h-[400px] w-[400px] p-5"
        />
        <div className="p-5">
          <h1 className="text-4xl font-Nunito">{product.name}</h1>
          <p className="text-gray-500">{product.description}</p>
          <div className="flex mt-3 gap-1 font-Rubik text-sm">
            <p> {product.rating} </p>
            <span className="text-yellow-500">&#9733;</span>
            <p className="border-l border-gray-400 px-2">
              {product.ratingCount} Ratings
            </p>
          </div>
          <p className="mt-3 text-3xl">
            Rs. {product.price} {" "}
            <span className="text-sm text-green-700">
              (inclusive of all taxes)
            </span>
          </p>
          <div className="flex flex-col gap-4 mt-10">
        <button className="font-Nunito border py-3 rounded-sm text-md bg-gray-300 hover:bg-gray-400">Buy Now</button>
        <button className="font-Nunito border py-3 rounded-sm text-md bg-gray-300 hover:bg-gray-400">Add to Cart</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompleteProduct;

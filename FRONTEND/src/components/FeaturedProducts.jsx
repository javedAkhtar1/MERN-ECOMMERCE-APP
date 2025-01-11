import React, { useContext } from "react";
// import { featuredProducts } from "../featuredProducts.js";
import FeaturedProductCard from "./FeaturedProductCard.jsx";
import { useInView } from "react-intersection-observer";  
import { productsContext } from "../context/ProductsContextProvider.jsx";

function FeaturedProducts() {
  const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });
  const { products } = useContext(productsContext)
  const featuredProducts  = products.filter((p) => p.isFeatured).slice(0, 6)
  return (
    <>
      <div className="mt-12 flex justify-center items-center">
        <h1 className="text-center text-3xl font-Nunito font-thin text-red-900 px-5">
          FEATURED PRODUCTS
        </h1>
      </div>
      <div
        ref={divRef}
        style={{
          opacity: divInView ? 1 : 0,
          transform: divInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity .5s ease, transform .5s ease",
        }}
        className="featured-products max-w-6xl px-5 grid grid-rows-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 mx-auto justify-items-center gap-8"
      >
        {featuredProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;

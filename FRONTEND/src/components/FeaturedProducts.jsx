import React from "react";
import { featuredProducts } from "../featuredProducts.js";
import FeaturedProductCard from "./FeaturedProductCard";
import { useInView } from "react-intersection-observer";

function FeaturedProducts() {
  const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="mt-[110px]">
        <h1 className="text-center text-3xl font-Nunito font-thin text-red-900">
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
        className="featured-products grid grid-rows-2 grid-cols-3 mt-6 mx-auto justify-items-center gap-8"
      >
        {featuredProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;

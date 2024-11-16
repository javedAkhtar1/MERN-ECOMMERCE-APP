import React from "react";
import { products } from "../shop.js";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ShopProductCard from "./ShopProductCard.jsx";

function Shop() {
  const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });

  return (
    <>
    <Navbar />
      <div
        ref={divRef}
        style={{
          opacity: divInView ? 1 : 0,
          transform: divInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity .5s ease, transform .5s ease",
        }}
        className="featured-products max-w-6xl px-5 grid grid-rows-2 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 mt-6 mx-auto justify-items-center gap-8"
      >
        {products.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Shop;

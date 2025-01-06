import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShopProductCard from "../components/ShopProductCard.jsx";
import { productsContext } from "../context/ProductsContextProvider.jsx";

function Deals() {
  const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });
  const { products, loading } = useContext(productsContext);

  const deals = products.filter((p) => p.discount >= 40);

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
        className="flex justify-center mt-5"
      >
        <p className="bg-red-600 px-4 py-1 text-center text-lg font-Rubik">
          Over 40% off on every item!
        </p>
      </div>

      {loading ? (
        <div className="loading text-center mt-20 h-[100vh]">
          Loading products...
        </div>
      ) : (
        <div
          ref={divRef}
          style={{
            opacity: divInView ? 1 : 0,
            transform: divInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .5s ease, transform .5s ease",
          }}
          className="featured-products max-w-6xl px-5 grid grid-rows-2 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 mt-6 mx-auto justify-items-center gap-8"
        >
          {deals.map((product) => (
            <ShopProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Deals;

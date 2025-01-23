import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShopProductCard from "../components/ShopProductCard.jsx";
import { productsContext } from "../context/ProductsContextProvider.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Kids() {
  const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });
  const { filteredProducts, loading } =  useContext(productsContext)
  
  const kidsProducts = filteredProducts.filter((p) => p.category === "kids")

  return (
    <>
      <Navbar />
      <SearchBar />
      {kidsProducts.length == 0 && <div className="text-center text-xl font-Nunito flex justify-center items-center h-[80vh]">Product not found!</div> }
      {loading ? (
        <div className="loading text-center mt-20 h-[100vh]">Loading products...</div>
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
          {kidsProducts.map((product) => (
            <ShopProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Kids;

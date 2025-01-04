import React, { useState, useEffect } from "react";
import axios from "axios"; // For making API requests
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ShopProductCard from "./ShopProductCard.jsx";

function Shop() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <>
      <Navbar />
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
          {products.map((product) => (
            <ShopProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Shop;

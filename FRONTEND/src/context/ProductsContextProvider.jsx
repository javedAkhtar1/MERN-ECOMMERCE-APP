import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const productsContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
        setLoading(false);
      } 
      catch (err) {
        console.log("Error fetching products ", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <productsContext.Provider value={{ products, loading }}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContextProvider;

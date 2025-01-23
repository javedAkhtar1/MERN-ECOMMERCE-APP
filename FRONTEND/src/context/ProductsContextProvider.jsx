import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const productsContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

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

  // it should be based on the tags of the products. tags array in schema
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <productsContext.Provider value={{ products, filteredProducts, query, setQuery, loading}}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContextProvider;

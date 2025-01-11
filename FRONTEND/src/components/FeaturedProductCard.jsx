import React from "react";
import { Link } from "react-router-dom";

function FeaturedProductCard({ product }) {
  return (
    <Link to={`/shop/product/${product._id}`} className="product-card flex flex-col hover:cursor-pointer">
      <img src={product.image} alt={`${product.name}`} className="h-[250px] w-[250px] select-none" />
      <h3 className="text-lg font-light font-Nunito mt-2">{product.name}</h3>
      <p className="text-[.8rem]">{product.description}</p>
      <span className="mt-1 text-lg font-Rubik">Rs. {product.price}</span>
    </Link>
  );
}

export default FeaturedProductCard;

import React from "react";

function FeaturedProductCard({ product }) {
  return (
    <div className="product-card flex flex-col">
      <img src={product.image} alt={`${product.name}`} className="h-[250px] w-[250px]" />
      <h3 className="text-lg font-light font-Nunito mt-2">{product.name}</h3>
      <p className="text-[.8rem]">{product.description}</p>
      <span className="mt-1 text-lg font-Rubik">Rs. {product.price}</span>
    </div>
  );
}

export default FeaturedProductCard;

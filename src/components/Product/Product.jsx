import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="border-2 bg-indigo-300">
      <img className="w-full" src={product.image} alt="" />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <Link to="/services">Go back</Link>
    </div>
  );
};

export default Product;

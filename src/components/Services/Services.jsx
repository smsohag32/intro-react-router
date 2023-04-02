import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Services = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">
        Recently Launces Product: {products.length}
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Services;

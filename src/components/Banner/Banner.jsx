import React from "react";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>this is banner page</h1>
    </div>
  );
};

export default Banner;

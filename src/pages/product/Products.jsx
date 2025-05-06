import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Products = () => {
  return (
    <div className="ms-3">
      <h2 className="mt-4 mb-3">Available Products List</h2>
      <div className="d-flex flex-wrap gap-2 justify-content-between">
        {PRODUCTS.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

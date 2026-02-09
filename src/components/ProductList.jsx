import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onRemove }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </>
  );
}

export default ProductList;
import ProductCard from "./ProductCard";

/**
 * Renders a list of products using ProductCard components
 */
function ProductList({ products, onRemove, onToggleStock }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
          onToggleStock={onToggleStock}
        />
      ))}
    </>
  );
}

export default ProductList;
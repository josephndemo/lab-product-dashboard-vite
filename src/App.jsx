import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const initialProducts = [
    { id: 1, name: "Phone", price: 500, inStock: false },
    { id: 2, name: "Laptop", price: 1200, inStock: true },
    { id: 3, name: "Tablet", price: 300, inStock: true },
  ];

  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <>
      <h1>Product Store</h1>
      <ProductList products={products} onRemove={removeProduct} />
    </>
  );
}

export default App;

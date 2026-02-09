import { useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import ProductList from "./components/ProductList";

// Initial product data
const initialProducts = [
  { id: 1, name: "Phone", price: 500, inStock: false },
  { id: 2, name: "Laptop", price: 1200, inStock: true },
  { id: 3, name: "Tablet", price: 300, inStock: true },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Remove a product by ID
  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // Filter products based on stock status
  const filteredProducts = showInStockOnly
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      {/* MUST match test expectation */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Product Store
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Manage inventory and availability
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        <Button
          variant="contained"
          onClick={() => setShowInStockOnly((prev) => !prev)}
        >
          {showInStockOnly ? "Show All Products" : "Show In-Stock Only"}
        </Button>
      </Stack>

      {/* Conditional rendering */}
      {filteredProducts.length === 0 ? (
        <Typography color="error" data-testid="no-products">
          No products in stock
        </Typography>
      ) : (
        <ProductList products={filteredProducts} onRemove={removeProduct} />
      )}
    </Container>
  );
}

export default App;
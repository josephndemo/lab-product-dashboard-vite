import { useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import ProductList from "./components/ProductList";

// Initial product data (kept outside component to avoid re-creation)
const initialProducts = [
  { id: 1, name: "Phone", price: 500, inStock: false },
  { id: 2, name: "Laptop", price: 1200, inStock: true },
  { id: 3, name: "Tablet", price: 300, inStock: true },
];

function App() {
  // State for products and filtering
  const [products, setProducts] = useState(initialProducts);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Remove a product by id
  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  // Toggle product stock status
  const toggleStock = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  // Filter products based on stock status
  const filteredProducts = showInStockOnly
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Product Dashboard
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

      {/* Conditional rendering based on filtered results */}
      {filteredProducts.length === 0 ? (
        <Typography color="error" data-testid="no-products">
          No products in stock
        </Typography>
      ) : (
        <ProductList
          products={filteredProducts}
          onRemove={removeProduct}
          onToggleStock={toggleStock}
        />
      )}
    </Container>
  );
}

export default App;
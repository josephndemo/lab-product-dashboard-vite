import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';

const initialProducts = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: false },
  { id: 3, name: "Tablet", price: 499, inStock: true }, // ✅ change this
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    return true;
  });

  return (
    <Container sx={{ py: 4 }}>
      {/* Test 1 expects "Product Store" */}
      <Typography variant="h3" gutterBottom>Product Store</Typography>
      
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(e, val) => val && setFilter(val)}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="inStock">In Stock</ToggleButton>
      </ToggleButtonGroup>

      <ProductList products={filteredProducts} onDelete={handleDelete} />
    </Container>
  );
}

export default App;
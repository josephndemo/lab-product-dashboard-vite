import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Typography } from '@mui/material';

const ProductList = ({ products, onDelete }) => {
  if (products.length === 0) {
    return <Typography variant="h6">No products available at the moment.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
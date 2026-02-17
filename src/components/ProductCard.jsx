import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';

const ProductCard = ({ product, onDelete }) => {
  return (
    <>
      <Card 
        /* Test 3: must have literal class "outOfStockClass" */
        className={`${styles.card} ${!product.inStock ? 'outOfStockClass' : ''}`}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            ${product.price}
          </Typography>
          
          <Stack spacing={1} sx={{ mt: 2 }}>
            {product.inStock ? (
              <Button variant="contained" color="primary">Add to Cart</Button>
            ) : (
              <Typography color="error" fontWeight="bold">Out of Stock</Typography>
            )}

            {/* Test 4: expects a button with text "Remove" */}
            <Button 
              variant="outlined" 
              color="error" 
              size="small" 
              onClick={() => onDelete(product.id)}
            >
              Remove
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
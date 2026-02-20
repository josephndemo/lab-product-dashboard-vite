import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card className={styles.card}>
      <CardContent
        className={!product.inStock ? 'outOfStockClass' : ''}
      >
        {/* 👇 CHANGE component to h2 */}
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>

        <Typography color="text.secondary" gutterBottom>
          ${product.price}
        </Typography>

        <Stack spacing={1} sx={{ mt: 2 }}>
          {product.inStock ? (
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          ) : (
            <Typography color="error" fontWeight="bold">
              Out of Stock
            </Typography>
          )}

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
  );
};

export default ProductCard;
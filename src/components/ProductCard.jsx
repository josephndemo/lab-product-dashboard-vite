import React from "react";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product, onRemove }) {
  return (
    <Card
      className={product.inStock ? "" : styles.outOfStockClass}
      sx={{ mb: 2 }}
      data-testid="product-card"
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {product.name}
        </Typography>

        <Typography variant="body2">
          Price: <strong>${product.price}</strong>
        </Typography>

        <Typography
          variant="body2"
          color={product.inStock ? "success.main" : "error.main"}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>

        <Stack direction="row" justifyContent="flex-end" mt={2}>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => onRemove(product.id)}
          >
            Remove
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
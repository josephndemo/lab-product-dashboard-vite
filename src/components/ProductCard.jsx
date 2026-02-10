import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product, onRemove }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      {/* Apply class to CardContent so closest('div') finds it in the test */}
      <CardContent className={!product.inStock ? styles.outOfStockClass : ""}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">{product.price}</Typography>
        <Typography variant="body2">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onRemove(product.id)}
          sx={{ mt: 1 }}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

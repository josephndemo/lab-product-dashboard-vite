import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/ProductCard.module.css"; // CSS Module

export default function ProductCard({ product, onRemove }) {
  const { name, price, inStock } = product;

  // Apply conditional class for out-of-stock products
  const cardClass = inStock ? "" : styles.outOfStockClass;

  return (
    <Card className={cardClass} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">${price}</Typography>
        {!inStock && (
          <Typography color="error" variant="body2">
            Out of Stock
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => onRemove(product.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
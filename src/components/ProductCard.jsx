import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import styles from "../styles/ProductCard.module.css";

/**
 * Displays individual product details
 */
function ProductCard({ product, onRemove, onToggleStock }) {
  return (
    <Card
      className={`${styles.card} ${
        !product.inStock ? styles.outOfStock : ""
      }`}
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

        <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => onToggleStock(product.id)}
          >
            Toggle Stock
          </Button>

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
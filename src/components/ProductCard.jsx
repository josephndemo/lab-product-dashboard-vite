import styles from "../styles/ProductCard.module.css";
import { Button, Card, CardContent, Stack } from "@mui/material";

function ProductCard({ product, onRemove }) {
  return (
    <Card
      className={`${styles.card} ${
        !product.inStock ? styles.outOfStock : ""
      }`}
      sx={{ mb: 2 }}
      data-testid="product-card"
    >
      <CardContent>
        <h3 className={styles.title}>{product.name}</h3>

        <p className={styles.price}>
          Price: <strong>${product.price}</strong>
        </p>

        <p
          className={`${styles.stock} ${
            product.inStock ? styles.inStock : styles.outStockText
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        <Stack direction="row" justifyContent="flex-end">
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
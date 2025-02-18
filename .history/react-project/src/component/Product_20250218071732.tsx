import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Snackbar,
  
} from "@mui/material";
import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement, memo } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  console.log(img);

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "→ Added to the cart ✅" : null;

  const content = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap", // responsif
        gap: "16px",
      }}
    >
      <Card
        sx={{
          width: "30%", // 3 kolom dalam 1 baris
          minWidth: "250px",
          maxWidth: "300px",
          m: 2,
          boxShadow: 3,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt={product.name}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              color: "#333",
            }}
          >
            {product.name}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "#555" }}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "IDR",
            }).format(product.price)}
          </Typography>
          {itemInCart && (
            <Typography
              variant="body2"
              sx={{ color: "green", fontWeight: 500 }}
            >
              {itemInCart}
            </Typography>
          )}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={onAddToCart}
              sx={{
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Add to cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );

  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevInCart === nextInCart
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;

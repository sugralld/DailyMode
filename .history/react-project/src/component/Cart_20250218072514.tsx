import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Cart = () => {
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const navigate = useNavigate();

  const pageContent = (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom> sx={{ textAlign: "center" }}
        Cart
      </Typography>
      <ul className="cart">
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>
      <div className="cart__totals">
        <Typography>Total Items: {totalItems}</Typography>
        <Typography>Total Price: {totalPrice}</Typography>
        <Button
          variant="contained"
          color="secondary"
          disabled={!totalItems}
          onClick={() => navigate("/checkout")}
          sx={{ mt: 2 }}
        >
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );

  const content = <main className="main main--cart">{pageContent}</main>;
  return content;
};

export default Cart;

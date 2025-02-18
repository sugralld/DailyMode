import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Cart = () => {
  const [confirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();
  const navigate = useNavigate();


  const pageContent = confirm ? (
    <Typography variant="h5" align="center" gutterBottom>
      Thank you for your order!
    </Typography>
  ) : (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
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
        <Typography>Total Price: ${totalPrice}</Typography>
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

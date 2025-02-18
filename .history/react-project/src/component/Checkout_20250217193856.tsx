import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import useNaviga
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Transfer");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = { name, address, paymentMethod, note };
    console.log("Order Submitted:", orderData);
    alert("Checkout successful! Order details logged in console.");
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Address"
          margin="normal"
          multiline
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Payment Method</InputLabel>
          <Select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <MenuItem value="Transfer">Transfer</MenuItem>
            <MenuItem value="COD">Cash on Delivery</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Additional Notes"
          margin="normal"
          multiline
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit Order
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;

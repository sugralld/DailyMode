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
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material/Select";
import useCart from "../hooks/useCart";

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "Transfer",
    note: "",
    submitted: false,
  });

  const { dispatch, REDUCER_ACTIONS } = useCart();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({ ...formData, paymentMethod: e.target.value as string });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: REDUCER_ACTIONS. }); // Clear cart
    setFormData({ ...formData, submitted: true });
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
          name="name"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          margin="normal"
          multiline
          rows={3}
          value={formData.address}
          onChange={handleChange}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Payment Method</InputLabel>
          <Select value={formData.paymentMethod} onChange={handleSelectChange}>
            <MenuItem value="Transfer">Transfer</MenuItem>
            <MenuItem value="COD">Cash on Delivery</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Additional Notes"
          name="note"
          margin="normal"
          multiline
          rows={2}
          value={formData.note}
          onChange={handleChange}
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

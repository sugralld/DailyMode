import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Nav from "./Nav";
import useCart from "../hooks/useCart";
import { useLocation } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  const { totalItems, totalPrice } = useCart();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 2 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#333",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            color: "#333",
          }}
        >
          DailyMode
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Total Items: {totalItems}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Toolbar>
      {!isCheckoutPage && <Nav viewCart={viewCart} setViewCart={setViewCart} />}
    </AppBar>
  );
};

export default Header;

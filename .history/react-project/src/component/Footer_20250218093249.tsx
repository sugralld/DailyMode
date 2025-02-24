import useCart from "../hooks/useCart";
import { Box, Typography, Container } from "@mui/material";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <Typography
      variant="body1"
      sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif", color: 
        
      }}
    >
      DailyMode &copy; {year}
    </Typography>
  ) : (
    <>
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
      >
        Total Items: {totalItems}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
      >
        Total Price: {totalPrice}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
      >
        DailyMode &copy; {year}
      </Typography>
    </>
  );

  const content = (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        padding: 2,
        textAlign: "center",
        mt: "auto",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Container>{pageContent}</Container>
    </Box>
  );
  return content;
};

export default Footer;

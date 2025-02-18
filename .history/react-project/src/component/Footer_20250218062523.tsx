import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <Typography
      variant="body1"
      sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
    >
      Shopping Cart &copy; {year}
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
        Total Price: ${totalPrice}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
      >
        Shopping Cart &copy; {year}
      </Typography>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;
  return content;
};

export default Footer;

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const navigate = useNavigate();

  const button = viewCart ? (
    <Button
      onClick={() => {
        setViewCart(false);
        navigate("/");
      }}
      variant="contained"
      color="primary"
      type="button"
      sx={{ 
        m: 1,
        backgroundColor: "#FAFAFA",
        borderRadius: "50px"
      }}
    >
      👔
    </Button>
  ) : (
    <Button
      onClick={() => {
        setViewCart(true);
        navigate("/cart");
      }}
      variant="contained"
      type="button"
      sx={{ 
        m: 1,
        backgroundColor: "#222222",
        borderRadius: "50px"
      }}
    >
      🛒
    </Button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};

export default Nav;

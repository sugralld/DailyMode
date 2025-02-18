import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isNotHomepage = location.pathname === "/cart";

  if (!isNotHomepage) setViewCart(false);

  const button = viewCart ? (
    <button
      onClick={() => {
        setViewCart(false);
        navigate("/");
      }}
    >
      View Products
    </button>
  ) : (
    <button
      onClick={() => {
        setViewCart(true);
        navigate("/cart");
      }}
    >
      View Cart
    </button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};

export default Nav;

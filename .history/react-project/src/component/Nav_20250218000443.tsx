import { useNavigate } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const navigate = useNavigate();
  const redirectToCart = () => {
    // ubah URL jadi /cart
    navigate("/cart");
  };

  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>View Products</button>
  ) : (
    <button onClick={() => setViewCart(true) redirectToCart}>
      View Cart
    </button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};

export default Nav;

import { useNavigate } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const navigate = useNavigate();

  const button = viewCart ? (
    <butt
      onClick={() => {
        setViewCart(false);
        navigate("/");
      }}
    >
      View Products
    </butt>
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

import Nav from "./Nav";
import useCart from "../hooks/useCart";
import { useNavigate, useLocation } from "react-router-dom";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleCart = () => {
    if (location.pathname === "/checkout") {
      navigate("/"); // Kalau sedang di Checkout, langsung kembali ke halaman utama
      setViewCart(false); // Reset viewCart agar kembali ke Product List
    } else {
      setViewCart((prev) => !prev);
    }
  };

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav
        viewCart={viewCart}
        setViewCart={setViewCart}
        onToggleCart={handleToggleCart}
      />
    </header>
  );
  return content;
};

export default Header;

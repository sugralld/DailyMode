import Nav from "./Nav";
import useCart from "../hooks/useCart";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleCart = () => {
    if (location.pathname === "/checkout") {
      navigate("/"); // Dari Checkout → Product List
    } else if (location.pathname === "/cart") {
      navigate("/"); // Dari Cart → Product List
    } else {
      navigate("/cart"); // Dari Product List → Cart
    }
  };

  return (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav onToggleCart={handleToggleCart} />
    </header>
  );
};

export default Header;

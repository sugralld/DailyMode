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

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      {!isCheckoutPage && <Nav viewCart={viewCart} setViewCart={setViewCart} />}
    </header>
  );
  return content;
};

export default Header;

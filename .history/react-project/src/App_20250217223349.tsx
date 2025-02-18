import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>
          }
        />
      </Routes>
      <Footer viewCart={viewCart} />
    </Router>
  );
}

export default App;

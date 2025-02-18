import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  return (
    <Router>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <Routes>
        {/* Route to Product List or Cart based on viewCart state */}
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Optional: Add a 404 Not Found Page */}
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

import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  // render cart component
  const pageContent = viewCart? <Cart /> : <ProductList />

  const content = (
    <>
    </>
  )
  return <div className="App"></div>;
}

export default App;

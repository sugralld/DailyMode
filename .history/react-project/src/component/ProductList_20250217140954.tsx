import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";

const ProductList = () => {
  const {dispatch, REDUCER_ACTIONS, cart} = useCart()
  const {products} = useProducts()

  let pageContent: ReactElement | ReactElement[]
  return <div>ProductList</div>;
};

export default ProductList;

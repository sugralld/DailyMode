import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { UseProductsContextType } from "../context/ProductsProvider";

const ProductList = () => {
  const {dispatch, REDUCER_ACTIONS, cart} = useCart()
  return <div>ProductList</div>;
};

export default ProductList;

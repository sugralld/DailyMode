import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if(products?.length){
    pageContent = products.map(products => {
      const inCart: boolean = cart.some(item -> item.sku === product.sku)
    })
  }

  return <div>ProductList</div>;
};

export default ProductList;

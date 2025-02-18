import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";


type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction]>
}

const Product = () => {
  return <div>Product</div>;
};

export default Product;

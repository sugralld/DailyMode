import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType) ReactElement => {
  
    const img: string = require('<div styleName={} />
    <images />
    <1>product.sku</1>')
    return <div>Product</div>;
};

export default Product;

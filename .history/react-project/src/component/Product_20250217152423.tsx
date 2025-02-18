import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType) ReactElement => {
  
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img);

    const onAddToCart = () => dispatchEvent({type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1}})
    
    const itemInCart = inCart? '→ item successfully added to the cart ✅' : null

    const content = 
        <article className="product">
            <h3>{product</h3>
        </article>

    return <div>Product</div>;
};

export default Product;

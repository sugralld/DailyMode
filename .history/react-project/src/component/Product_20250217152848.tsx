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
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img"></img>
            <p>{new Intl.NumberFormat('en-US', {style: 
                'currency', currency: 'USD'}).format(product.price)}
                {itemInCart}</p>
            <button onClick={onAddToCart}></button>
        </article>

    return <div>Product</div>;
};

export default Product;

import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionType } from "../context/CartProvider";

type PropsType = {
    item: CartItemType,
    dispatch: ,
    REDUCER_ACTIONS: ReducerActionType,
}

const CartLineItem = () => {
  return <div>CartLineItem</div>;
};
export default CartLineItem;

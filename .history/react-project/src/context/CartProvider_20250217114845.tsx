export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUMBIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
        if(!action.payload){
            throw new Error('action.payload missing in ADD action')
        }
        const { sku, name, price } = action.payload
        const filteredCart: CartItemType[] = state.cart.filter
        (item => item.sku !=== sku)
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
        throw new Error('action.payload missing in REMOVE action')
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
        throw new Error('action.payload missing in QUANTITY action')
    }
    case REDUCER_ACTION_TYPE.SUMBIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

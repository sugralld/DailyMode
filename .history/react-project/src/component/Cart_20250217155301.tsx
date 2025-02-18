import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart} = useCart()

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUMBIT})
    setConfirm(true)
  }

  const pageContent = confirm 
    ? <h2>Thank you for your order!</h2>
    : <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map(item => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              
          )
        })}
      </ul>
    </>
  return (
    <div>Cart</div>
  )
}

export default Cart
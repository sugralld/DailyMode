import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart} = useCart()

  const onSubmitOrder = () => {
    
  }
  return (
    <div>Cart</div>
  )
}

export default Cart
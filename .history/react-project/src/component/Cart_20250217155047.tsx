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
  return (
    <div>Cart</div>
  )
}

export default Cart
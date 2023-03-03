import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'

export const CartWidget = () => {

  const { totalItemsCarrito } = useCartContext()

  return (
    <div className='cart-container'>
      <img className='cart-image' src='https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1674440132~exp=1674440732~hmac=6be12887ad53ef2c502cd34c118ea91f005bc3042b0fc52fa3f2b4b28fa0b842' />
      <span className='cart-number'>{totalItemsCarrito() ? totalItemsCarrito() : ''}</span>
    </div>
  )
}

import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'

export const CartList = () => {
	const { cartList, totalPrecioCarrito, vaciarCarrito } = useCartContext()
	return (
		<>
			<ul>
				{cartList.map((el) => { return (<CartItem item={el} />) })}
			</ul>
			<h3>$ {totalPrecioCarrito()}</h3>

			<Button onClick={vaciarCarrito}>Vaciar Carrito</Button>
		</>
	)
}

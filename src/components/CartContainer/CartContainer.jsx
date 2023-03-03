import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { CartForm } from '../CartForm/CartForm'
import { CartList } from '../CartList/CartList'

export const CartContainer = () => {

	const { totalItemsCarrito } = useCartContext()
	const [ordenId, setOrdenId] = useState()

	const handleOrden = (orden) => {
		setOrdenId(orden)
	}
	
	return ( 
		<>
			{ordenId ? (<><h3> El id de tu orden es: {ordenId}</h3><h4>Gracias por tu compra</h4></>) : <></>}
			{
			totalItemsCarrito() ?
				(
				<>
					<CartList/>
					<CartForm handleOrden={handleOrden}/>
				</>	
				)
				:
				<h3>Carrito vacio</h3>
			}
		
		</>
	)
}

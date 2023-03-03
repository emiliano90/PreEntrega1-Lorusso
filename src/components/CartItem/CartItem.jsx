import React from 'react'
import { Button } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import { useCartContext } from '../../context/CartContext'

export const CartItem = ({ item }) => {
	const { eliminarItemCarrito } = useCartContext()

	return (
		<li><img src={item.foto} style={{ width: 60 }}></img>
			<p>{item.nombre}</p>
			<p>Cantidad: {item.cantidad}</p>
			<Button onClick={() => eliminarItemCarrito(item.id)} size="md" variant="info">
				<Trash /> Quitar Producto
			</Button>
		</li>
	)
}

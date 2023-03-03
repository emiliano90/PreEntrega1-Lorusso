import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ producto }) => {
	const [productoAgregado, setProductoAgregado] = useState(false)
	const { cartList, agregarCarrito } = useCartContext()

	const handleAgregar = (cantidad) => {

		agregarCarrito({ ...producto, cantidad })
		setProductoAgregado(true)
	}

	return (

		<Card>
			<Card.Body>
				<Card.Title>{producto.name}</Card.Title>
				<Card.Img variant="top" src={producto.foto} />
				<Card.Text>
					${producto.price}

				</Card.Text>


			</Card.Body>
			<Card.Footer>
				{productoAgregado ? <>
					<Link to="/cart"><Button>Terminar Compra</Button></Link>
					<Link to="/"><Button>Seguir Comprando</Button></Link>
				</>
					:
					<>

						<ItemCount handleAgregar={handleAgregar} stock={producto.stock} />
						<p> Stock: {producto.stock}</p>

					</>
				}
			</Card.Footer>
		</Card>


	)
}

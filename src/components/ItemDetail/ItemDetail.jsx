import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ producto }) => {
	const [productoAgregado, setProductoAgregado] = useState(false)

	const handleAgregar = () => {
		setProductoAgregado(true)
	}
	console.log(producto)
	return (

		<Card>
			<Card.Body>
				<Card.Title>{producto.name}</Card.Title>
				<Card.Img variant="top" src={producto.foto} />
				<Card.Text>
					<h3>
						${producto.price}
					</h3>
				</Card.Text>


			</Card.Body>
			<Card.Footer>
				{productoAgregado ? <>
					<Link to="/cart"><Button>Terminar Compra</Button></Link>
					<Link to="/"><Button>Seguir Comprando</Button></Link>
				</>
					:
					<>
						<ItemCount stock={producto.stock} />
						<p> Stock: {producto.stock}</p>

						<Button onClick={handleAgregar}>Agregar al Carrito</Button>
					</>
				}
			</Card.Footer>
		</Card>


	)
}

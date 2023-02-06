import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
	return (
		<Col >
			<Link to={`/item/${producto.id}`} >
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={producto.foto} />
					<Card.Body>
						<Card.Title>{producto.name}</Card.Title>
						<Card.Text>${producto.price}</Card.Text>
						<Button variant="primary">Detalle</Button>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	)
}

import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export const ItemCount = ({ stock }) => {
	const [cantidad, setCantidad] = useState(1)

	const handleMinus = () => {
		if (cantidad > 1)
			setCantidad(cantidad - 1)
	}
	const handlePlus = () => {
		if (cantidad < stock)
			setCantidad(cantidad + 1)
	}
	
	return (
		<center>
			<InputGroup className="w-25 center">
				<Button onClick={handleMinus}>-</Button>
				<Form.Control
					readonly="true"
					type="number"
					value={cantidad}
					/>
				<Button onClick={handlePlus}>+</Button>
			</InputGroup>
		</center>

	)
}

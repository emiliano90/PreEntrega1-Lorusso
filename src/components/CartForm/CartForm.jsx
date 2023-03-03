import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

export const CartForm = ({ handleOrden }) => {

	const { cartList, vaciarCarrito, totalPrecioCarrito } = useCartContext()
	const [formData, setFormData] = useState({ name: '', phone: '', mail: '', repetirMail: '' })

	const insertarOrden = (evt) => {
		evt.preventDefault()
		const form = evt.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		else {

			const orden = {}
			orden.buyer = { name: formData.name, phone: formData.phone, mail: formData.mail }
			orden.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
			orden.total = totalPrecioCarrito()
			orden.isActive = true

			const db = getFirestore()
			const ordersCollection = collection(db, 'orders')

			addDoc(ordersCollection, orden)
				.then(resp => {
					handleOrden(resp.id)

					//update
					cartList.forEach(item => {
						const itemUpdate = doc(db, 'items', item.id)
						updateDoc(itemUpdate,
							{ stock: item.stock - item.cantidad })
							.then(resp => console.log(resp))
					});
				}
				)
				.finally(() => vaciarCarrito())
			
			
		}
	}

	const handleChange = (evt) => {

		setFormData({
			...formData,
			[evt.target.name]: evt.target.value
		})
	}

	return (
		<form onSubmit={insertarOrden}>
			<input required name='name' placeholder='Nombre' onChange={handleChange} value={formData.name} /><br/>
			<input required name='phone' placeholder='Telefono' onChange={handleChange} value={formData.phone} /><br/>
			<input required name='mail' type='email' placeholder='Mail' onChange={handleChange} value={formData.mail} /><br/>
			<input required name='repetirMail' type='email' placeholder='Repetir Mail' onChange={handleChange} value={formData.repetirMail} /><br/>
			<br/>
			<Button type='onSubmit'>Generar Orden</Button>
		</form>
	)
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetchProducto } from '../../utils/gFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
	const { idProducto } = useParams()
	const [producto, setProducto] = useState({})
	const [loading, setLoading] = useState(true)
	
	console.log(idProducto)
	useEffect(() => {
		gFetchProducto(idProducto)
		.then(res => {
			setProducto(res)
		} )
		.catch(err => { console.log(err) })
		.finally(() => setLoading(false))
	}, [idProducto])
	//mock con id
	return (
		<center>
			{loading ? <h2>Cargando...</h2> :
				<ItemDetail producto={producto} />}
		</center>
	)
}

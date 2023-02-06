import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetchProductos } from '../../utils/gFetch';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = ({ greeting }) => {
	const { idCategoria } = useParams()
	const [productos, setProductos] = useState([])
	const [loading, setLoading] = useState(true)
	console.log(idCategoria);

	useEffect(() => {
		setLoading(true)
		if (idCategoria) {
			gFetchProductos(idCategoria).then(res => {
				setProductos(res)

			}).
				catch(err => { console.log(err) })
				.finally(() => setLoading(false))
		}
		else {
			gFetchProductos().then(res => {
				setProductos(res)

			}).
				catch(err => { console.log(err) })
				.finally(() => setLoading(false))
		}

	}, [idCategoria])
	console.log(productos)
	return (
		<center>
			{loading ? <h2>Cargando...</h2> :
				<ItemList productos={productos} />}
		</center>
	)
}

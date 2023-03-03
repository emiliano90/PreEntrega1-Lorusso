import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDocs, collection, where, query } from 'firebase/firestore';
import { ItemList } from '../ItemList/ItemList';
import { Loading } from '../Loading/Loading';

export const ItemListContainer = () => {
	const { idCategoria } = useParams()
	const [productos, setProductos] = useState([])
	const [loading, setLoading] = useState(true)

	console.log(idCategoria);

	useEffect(() => {

		console.log('hola111')
		setLoading(true)
		setProductos([])
		const db = getFirestore()
		const queryCollection = collection(db, 'items')
		const queryFilter = idCategoria ? query(queryCollection, where('categoria', '==', idCategoria)) : queryCollection


		getDocs(queryFilter)
			.then(resp => {
				console.log('hola')
				console.log(resp.data)
				setProductos(resp.docs.map(product => ({ id: product.id, ...product.data() })))

			})
			.catch(err => { console.log(err) })
			.finally(() => setLoading(false))



	}, [idCategoria])


	console.log(productos)
	return (
		<center>
			{loading ? <Loading /> :
				<ItemList productos={productos} />}
		</center>
	)
}

import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading/Loading'

export const ItemDetailContainer = () => {
	const { idProducto } = useParams()
	const [producto, setProducto] = useState({})
	const [loading, setLoading] = useState(true)


	useEffect(() => {

		const db = getFirestore()
		const query = doc(db, 'items', idProducto)
		getDoc(query)
			.then(resp => setProducto({ id: resp.id, ...resp.data() }))
			.catch(err => { console.log(err) })
			.finally(() => setLoading(false))
	}, [idProducto])
	//mock con id
	return (
		<center>
			{loading ? <Loading /> :
				<ItemDetail producto={producto} />}
		</center>
	)
}

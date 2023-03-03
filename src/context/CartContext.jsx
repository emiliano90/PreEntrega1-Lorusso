import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([])

	//isInCart
	const agregarCarrito = (newProducto) => {
		let prodIndex = cartList.findIndex((prod => prod.id === newProducto.id))

		if (prodIndex != -1) {
			const cloneArray = [...cartList];
			cloneArray[prodIndex].cantidad += newProducto.cantidad

			setCartList(cloneArray)
		}
		else
			setCartList([...cartList, newProducto])
	}
	//eliminat item por id
	const eliminarItemCarrito = (id) => {
		const cloneArray = [...cartList];
		let prodIndex = cloneArray.findIndex((prod => prod.id === id))
		cloneArray.splice(prodIndex, 1);
		setCartList(cloneArray)
	}
	//vaciar carrito
	const vaciarCarrito = () => {
		setCartList([])
	}
	//cantidad total
	const totalItemsCarrito = () => {
		let total = 0
		cartList.forEach((value, index) => {
			total += value.cantidad
		})
		return total
	}
	//precio total
	const totalPrecioCarrito = () => {
		let total = 0
		cartList.forEach((value, index) => {
			total += value.price * value.cantidad
		})
		return total
	}



	return (
		<CartContext.Provider value={{
			cartList,
			agregarCarrito,
			vaciarCarrito,
			totalItemsCarrito,
			totalPrecioCarrito,
			eliminarItemCarrito

		}}>
			{children}
		</CartContext.Provider>
	)

}

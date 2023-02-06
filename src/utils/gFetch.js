const productos = [
	{ id: "1", categoria: "Sillones", name: "Futon", price: "58100", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/3046.jpg" },
	{ id: "2", categoria: "Sillones", name: "Divan", price: "75600", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/1596.jpg" },
	{ id: "3", categoria: "Sillones", name: "Sillon Doble", price: "50700", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/2233.jpg" },
	{ id: "4", categoria: "Sillones", name: "Juego Doble", price: "128700", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/3033.jpg" },
	{ id: "5", categoria: "Camas", name: "Juego Dormitorio", price: "65500", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/2152.jpg" },
	{ id: "6", categoria: "Camas", name: "Box Cama", price: "91500", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/2859.jpg" },
	{ id: "7", categoria: "Camas", name: "Cuna Funcional", price: "48500", stock: 4, foto: "https://www.amoblamientoscapri.com.ar/img/productos/grande/desktop/598.jpg" },
]

export const gFetchProductos = (category) => {
	return new Promise((res, err) => {
		setTimeout(() => {
			if (category)
			{
				console.log("category filter")
				res(productos.filter((el) => {
					return el.categoria === category
				}))
			}
			else
				res(productos)
		},
			1000)

	})

}

export const gFetchProducto = (id) => {
	return new Promise((res, err) => {
		setTimeout(() => {
			if (id)
			{
				res(productos.find((el) => {
					return el.id === id
				}))
			}
			
		},
			1000)

	})

}
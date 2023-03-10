import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';

import './App.css'
import { CartContextProvider } from './context/CartContext';

function App() {

	return (

		<BrowserRouter>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:idCategoria' element={<ItemListContainer />} />
					<Route path='/item/:idProducto' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<CartContainer />} />

					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</CartContextProvider>
		</BrowserRouter>

	)
}

export default App

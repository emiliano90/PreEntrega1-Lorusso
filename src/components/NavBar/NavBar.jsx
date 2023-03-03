import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

import { CartWidget } from '../CartWidget/CartWidget'

export default function NavBar() {

	const categorias = [{ id: 1, name: "Sillones", link: "/category/Sillones" },
	{ id: 2, name: "Camas", link: "/category/Camas" }]
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to='/' className='mx-2'>Capri</Link>
				<Nav className="me-auto">
					{categorias.map(categoria => <NavLink key={categoria.id} to={categoria.link} className={({ isActive }) => isActive ? 'fw-bold mx-2' : 'mx-2'}>{categoria.name}</NavLink>)}

				</Nav>
				<Nav>
					<Link to='cart'>
						<CartWidget />
					</Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

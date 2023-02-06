import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { CartWidget } from '../CartWidget/CartWidget'

export default function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				{/*<Navbar.Brand href="#home">Capri</Navbar.Brand>*/}
				<Link to='/' className='mx-2'>Capri</Link>
				<Nav className="me-auto">
					<NavLink to="/category/Sillones" className={({ isActive }) => isActive ? 'fw-bold mx-2' : 'mx-2'}>Sillones</NavLink>
					<NavLink to="/category/Camas" className={({ isActive }) => isActive ? 'fw-bold mx-2' : 'mx-2'}>Camas</NavLink>
					

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

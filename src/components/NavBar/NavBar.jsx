import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Capri</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Quienes somos</Nav.Link>
        <NavDropdown title="Productos" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sillas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mesas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Modulares</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Camas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Comodas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Mesas de luz</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">Escritorios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.8">Roperos</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Nav>
      <CartWidget/>
      </Nav>
    </Container>
  </Navbar>
  )
}

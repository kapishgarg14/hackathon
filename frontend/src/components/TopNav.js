import React from 'react'
import '../styles/navbar.css'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const TopNav = () => {
  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark" className='customNavbar py-3 px-5'>
      <LinkContainer to='/'>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to='/covid'>
            <Nav.Link inactive>COVID-19</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/bloodTest'>
            <Nav.Link >Blood Tests</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item >Covid Test</NavDropdown.Item>
            <NavDropdown.Item >Covid Detection</NavDropdown.Item>
            <NavDropdown.Item >Heart Disease Detection</NavDropdown.Item>
            <NavDropdown.Item >Doctors Near Me</NavDropdown.Item>
            <NavDropdown.Item >Book an Appointment</NavDropdown.Item>
          </NavDropdown>
          <LinkContainer to='/about'>
            <Nav.Link >About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/faq'>
            <Nav.Link >FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contactus'>
            <Nav.Link >Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
            <Nav.Link >Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/register'>
            <Nav.Link >Register</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav

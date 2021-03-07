import React from 'react'
import '../styles/navbar.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');

console.log(userData)
console.log(doctorData)


const userLogout = () => {
  localStorage.removeItem('userData')

  window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';

}

const doctorLogout = () => {
  localStorage.removeItem('doctorData')

  window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';

}



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
            <Nav.Link>COVID-19</Nav.Link>
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
          {
            userData &&
            <LinkContainer to='/'>
              <Nav.Link onClick={userLogout()}>Logout</Nav.Link>
            </LinkContainer>
          }
          {
            doctorData &&
            <LinkContainer to='/'>
              <Nav.Link onClick={doctorLogout()}>Logout</Nav.Link>
            </LinkContainer>
          }
          {
            !userData &&
            !doctorData &&
            <LinkContainer to='/loginchoice'>
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
          }
          {
            !userData &&
            !doctorData &&
            <LinkContainer to='/registerchoice'>
              <Nav.Link >Register</Nav.Link>
            </LinkContainer>
          }


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav

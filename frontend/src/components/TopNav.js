import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');



const userLogout = () => {
  localStorage.removeItem('userData')

  window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';

}

const doctorLogout = () => {
  localStorage.removeItem('doctorData')

  window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';

}



const TopNav = ({ data, type }) => {

  const [userlogin, setUserlogin] = useState(false)
  const [doctorlogin, setDoctorlogin] = useState(false)

  useEffect(() => {
    if (type) {
      userData = data
      //fillState(type);
      //setUserlogin(true);
      //setDoctorlogin(false)
    }
    else {
      doctorData = data
      //fillState(type);
      //setUserlogin(false)
      //setDoctorlogin(true);
    }
    function fillState(type) {
      if (type) {
        setUserlogin(true);
        setDoctorlogin(false)
      }
      else {
        setUserlogin(false)
        setDoctorlogin(true);
      }
    }
    console.log(userData)
    console.log(doctorData)
  }, [data, type])

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
          <LinkContainer to='/testing'>
            <Nav.Link >Blood Tests</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item >
              <LinkContainer to='/appointment'>
                <Nav.Link>Book an Appointment</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <LinkContainer to='/testing'>
                <Nav.Link>Book a Test</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <LinkContainer to='/heartprediction'>
                <Nav.Link>Heart Disease Detection</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <LinkContainer to='/covidprediction'>
                <Nav.Link>Covid Detection</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <LinkContainer to='/medicine'>
                <Nav.Link>Find Medicine</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <LinkContainer to='/vaccination'>
                <Nav.Link>Covid Vaccination</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
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

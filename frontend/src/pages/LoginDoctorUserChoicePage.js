import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Row, Col } from 'react-bootstrap'
import '../styles/DoctorUserChoice.css'

const LoginDoctorUserChoicePage = () => {
  return (
    <Row>
      <Col sm={6} className='p-0 m-0'>
        <img src='/images/doctorChoice.jpg' alt='doctor' className='doctorChoice'></img>
        <LinkContainer to='/doctorlogin'>
          <Button variant="outline-warning" size="lg" className='DoctorBtn'>
            Doctor
        </Button>
        </LinkContainer>
      </Col>
      <Col sm={6} className='p-0 m-0'>
        <img src='/images/userChoice.jpg' alt='user' className='userChoice'></img>
        <LinkContainer to='/userlogin'>
          <Button variant="outline-warning" size="lg" className='UserBtn'>
            User
        </Button>
        </LinkContainer>
      </Col>
    </Row>
  )
}

export default LoginDoctorUserChoicePage

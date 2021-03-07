import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import '../styles/login.css'

let userData = localStorage.getItem('userData');




const UserLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')





  const loginUser = async (email, password) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post('/api/users/login', { email, password }, config)
      console.log(data)
      localStorage.setItem('userData', JSON.stringify(data))

      window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';


    } catch (err) {
      console.error(err)
    }
  }



  const submitHandler = (e, data) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    //login api
    loginUser(email, password)

  };

  return (
    <div className='loginContainer pb-5 my-5'>
      <FormContainer>
        <h1>Login </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder='Enter email ...'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>

          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder='Enter Password ...'
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>

          </Form.Group>

          <Button type='submit' variant='info'>Sign In</Button>
        </Form>

        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link to={'/registerchoice'}>
              Register
        </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );

}

export default UserLoginPage

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import '../styles/login.css'

const UserLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  //const redirect = location.search ? location.search.split('=') : '/'
  //console.group(redirect)
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, [history, userInfo, redirect])


  const loginUser = async (email, password) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post('/api/users/login', { email, password }, config)
      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data))

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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import '../styles/register.css'
import FormContainer from '../components/FormContainer'

const Register = ({ location, history }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [name, setName] = useState('')
  const [validated, setValidated] = useState(false);


  const redirect = location.search ? location.search.split('=') : '/'
  console.group(redirect)
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, [history, userInfo, redirect])



  const submitHandler = (data, event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    //registration api
    event.preventDefault()

    // if (password === confirmPassword) {

    // }
    console.log(data)





  };

  return (
    <div className='registerContainer pb-5 my-5'>
      <FormContainer>
        <h1>Sign Up</h1>
        <Form noValidate validated={validated} onSubmit={submitHandler}>

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="number"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid age.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="contact">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              required
              type="number"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid contact number.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" required />
          </Form.Group>



          <Form.Group controlId="validationCustom01">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="validationCustom01">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button variant='info' type="submit" className='registerBtn'>Register</Button>
        </Form>
        <Row className='py-3'>
          <Col>
            Have an Account?{' '}
            <Link to={'/loginchoice'}>
              Login
        </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );

}

export default Register

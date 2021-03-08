import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/covidpage.css'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'



let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');


console.log(userData)
console.log(doctorData)

const CovidPage = ({ history }) => {


  const [age, setAge] = useState(0)
  const [gender, setGender] = useState(null)
  const [temp, setTemp] = useState(null)
  const [cough, setCough] = useState(null)
  const [throat, setThroat] = useState(null)
  const [weakness, setWeakness] = useState(null)
  const [breathing, setBreathing] = useState(null)
  const [drowsiness, setDrowsiness] = useState(null)
  const [chest, setChest] = useState(null)
  const [travel, setTravel] = useState(null)
  const [diabetes, setDiabetes] = useState(null)
  const [heart, setHeart] = useState(null)
  const [lung, setLung] = useState(null)
  const [stroke, setStroke] = useState(null)
  const [symptoms, setSymptoms] = useState(null)
  const [BP, setBP] = useState(null)
  const [kidney, setKidney] = useState(null)
  const [appetite, setAppetite] = useState(null)
  const [smell, setSmell] = useState(null)
  const [loading, setLoading] = useState(false)

  // const checkCovid = async (email, password) => {
  //   try {

  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     const { data } = await axios.post('/api/doctors/login', { email, password }, config)
  //     console.log(data)
  //     localStorage.setItem('doctorData', JSON.stringify(data))
  //     history.push('/')
  //     //window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';


  //   } catch (err) {
  //     console.error(err)
  //   }
  // }




  const submitHandler = (e, data) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    //login api
    //checkCovid(email, password)

  };

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />

          <div className='p-0'>
            <FormContainer>
              <h1>Take the Survey </h1>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder='Enter email ...'
                    value={stroke}

                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter Password ...'
                    value={smell}

                  ></Form.Control>

                </Form.Group>

                <Button type='submit' variant='success'>Detect</Button>
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
          <Footer />
        </>
      )}
    </>
  )
}

export default CovidPage

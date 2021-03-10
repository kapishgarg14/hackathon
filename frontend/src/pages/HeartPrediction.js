import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/covidpage.css'
import { Button, Row, Col, Form, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'



let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');


console.log(userData)
console.log(doctorData)

const HeartPage = ({ history }) => {


  const [age, setAge] = useState(18)
  const [gender, setGender] = useState(null);
  const [cp, setCP] = useState(null)
  const [trestbps, setTrestbps] = useState(0)
  const [col, setCol] = useState(null)
  const [fbs, setFbs] = useState(null)
  const [ecg, setEcg] = useState(null)
  const [thalach, setThalach] = useState(null)
  const [exang, setExang] = useState(null)
  const [oldpeak, setOldpeak] = useState(null)
  const [thal, setThal] = useState(null)
  const [result, setResult] = useState(null)


  const [loading, setLoading] = useState(false)

  const checkHeart = async (age, gender, cp, trestbps, col, fbs, ecg, thalach, exang, oldpeak, thal) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          q1: age,
          q2: gender,
          q3: cp,
          q4: trestbps,
          q5: col,
          q6: fbs,
          q7: ecg,
          q8: thalach,
          q9: exang,
          q10: oldpeak,
          q11: thal
        }
      }
      const data = await axios.post('https://hacknsut21api.herokuapp.com/heart/', config)
      console.log(data)
      setResult(data)
      // localStorage.setItem('doctorData', JSON.stringify(data))
      // history.push('/')
      //window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';


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

                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter Age ...'
                    value={age}
                    onChange={e => setAge(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>


                <Form.Group controlId="gender">
                  <Form.Label>Sex</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Male"
                    value="0"
                    checked={gender === "0"}
                    onChange={e => setGender(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="Female"
                    value="1"
                    checked={gender === "1"}
                    onChange={e => setGender(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="cp">
                  <Form.Label>Enter your chest pain type</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Value of 0/1/2/3 ...'
                    value={cp}
                    onChange={e => setCP(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="trestbps">
                  <Form.Label>Enter your resting blood pressure</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter BP ...'
                    value={trestbps}
                    onChange={e => setTrestbps(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="col">
                  <Form.Label>Enter serum cholestrol in mg/dl</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter cholestrol ...'
                    value={col}
                    onChange={e => setCol(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="fbs">
                  <Form.Label>Enter your fasting blood sugar</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={fbs}
                    onChange={e => setFbs(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="ecg">
                  <Form.Label>Enter your resting ecg values</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='valu between 0 to 4 ...'
                    value={ecg}
                    onChange={e => setEcg(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="thalach">
                  <Form.Label>Enter maximum heart rate achieved</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={thalach}
                    onChange={e => setThalach(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="exang">
                  <Form.Label>Have you experienced exercise induced angina?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={exang === "0"}
                    onChange={e => setExang(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={exang === "1"}
                    onChange={e => setExang(e.currentTarget.value)}
                  />

                </Form.Group>


                <Form.Group controlId="oldpeak">
                  <Form.Label>Enter ST depression induced by exercise relative to rest </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={oldpeak}
                    onChange={e => setOldpeak(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="thal">
                  <Form.Label>Enter thal value</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={thal}
                    onChange={e => setThal(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>


                <Button type='button'
                  variant='success'
                  onClick={submitHandler}
                >Detect</Button>
              </Form>
            </FormContainer>
            {
              result === null ? (
                <>
                </>
              ) : (
                  <>
                    {
                      result === 1 ? (
                        <Container className='text-center my-5'>
                          <h3 variant='danger' className='mb-4' style={{ fontWeight: 'bolder', color: 'red' }}>
                            You might be infected with CoronaVirus.
                          </h3>
                          <Button variant='warning'>Book a Test</Button>
                        </Container>
                      ) : (
                          <Container className='text-center my-5'>
                            <h3 variant='success' className='mb-4' style={{ fontWeight: 'bolder', color: 'green' }}>You don't seem to be positive for Covid-19</h3>
                            <h4>Take Precautions and Stay Safe !!</h4>
                          </Container>
                        )
                    }
                  </>
                )
            }
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default HeartPage

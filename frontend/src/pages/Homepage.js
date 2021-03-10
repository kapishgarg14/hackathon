import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/homepage.css'
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import HomepageCard from '../components/HomepageCard'
import Loader from '../components/Loader'




const Homepage = ({ history }) => {
  const token = useRecoilValue(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  const [doctors, setDoctors] = useState(null)
  const [loading, setLoading] = useState(true)




  useEffect(() => {
    async function getDoctors() {
      try {

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const { data } = await axios.get('/api/doctors', config)
        console.log(data)
        setDoctors(data)
        setLoading(false)
        console.log(user)

      } catch (err) {
        console.error(err)
      }
    }

    getDoctors()
  }, [])



  return (
    <>
      <TopNav />
      {loading ? <Loader /> : (
        <>

          <div className='p-0'>

            <img src='/images/homepage.jpg' alt='default' className='homepageImg' />
            <div className='tagline'>
              <p>Your wellness,</p>
              <p className='pl-5 ml-5'>our mission</p>
            </div>
            <LinkContainer to='/appointment'>
              <Button variant="outline-warning" size="lg" className='AppointmentBtn' onClick={() => {
                console.log(user)
                if (user === null) {
                  history.push('/loginchoice')
                } else {
                  history.push('/appointment')
                }
              }}>
                Make an Appointment
        </Button>
            </LinkContainer>
            <Container>
              <div>
                <h1 className='text-center py-5'>Our Services</h1>
                <Row className='pb-5'>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-4-3.png'
                      title='Book Appointment'
                      description='Get yourself checked by leading doctors!'
                      onClick={() => { history.push('/appointment') }}
                    />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-16-3.png'
                      title='Heart Risk Prediction'
                      description='"heart is health". We will give you a reliable picture of your heart health, fully online!'
                      onClick={() => { history.push('/heartprediction') }}
                    />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-13-3.png'
                      title='Find Medicine'
                      description='Know your medicine. search all kinds of medicines from our database'
                      onClick={() => { history.push('/medicine') }}
                    />
                  </Col>

                </Row>
                <Row className='pb-5'>

                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-14-3.png'
                      title='Book a Test'
                      description='Have your doubts? Get tested for covid-19.'
                      onClick={() => { history.push('/testing') }}
                    />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-9-3.png'
                      title='Covid Vaccination'
                      description='Opt for vaccination at nearby centres'
                      onClick={() => { history.push('/vaccination') }}
                    />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-6-3.png'
                      title='Covid Prediction'
                      description='Get a fairly potential self-test result at home'
                      onClick={() => { history.push('/covidprediction') }}
                    />
                  </Col>

                </Row>
              </div>


              {doctors &&
                <div className='doctorsDiv my-5 py-3'>
                  <h1 className='text-center py-5'>Meet our Doctors</h1>
                  <br />
                  <br />
                  <Carousel fade className='doctorsCarousel'>
                    {doctors.map(doctor => (
                      <Carousel.Item key={doctor._id}>
                        <img
                          className="d-block w-100"
                          src='/images/doctorTest.jpg'
                          alt="slide"
                        />
                        <Carousel.Caption>
                          <h3>{doctor.name}</h3>
                          <p>{doctor.speciality}</p>
                          <p>{doctor.contact}</p>
                        </Carousel.Caption>
                      </Carousel.Item>

                    ))}
                  </Carousel>
                </div>
              }

            </Container>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default Homepage

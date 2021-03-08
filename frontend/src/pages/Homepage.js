import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/homepage.css'
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import HomepageCard from '../components/HomepageCard'
import Loader from '../components/Loader'


let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');


console.log(userData)
console.log(doctorData)

const Homepage = () => {

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
        // userData = localStorage.getItem('userData');
        // doctorData = localStorage.getItem('doctorData');
        // localStorage.setItem('userData', userData)
        // localStorage.setItem('doctorData', doctorData)

      } catch (err) {
        console.error(err)
      }
    }

    getDoctors()
  }, [])



  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />

          <div className='p-0'>

            <img src='/images/homepage.jpg' alt='default' className='homepageImg' />
            <LinkContainer to='/appointment'>
              <Button variant="outline-warning" size="lg" className='AppointmentBtn'>
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
                      title='Primary Care'
                      description='dxgcfvgsjdhkfwndcvhubhinj' />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-16-3.png'
                      title='Covid'
                      description='dxgcfvhubfcygvubhijnfregfsdcahinj' />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-13-3.png'
                      title='Heart Disease'
                      description='dxgcfvugyihfrgnejtk fshubhinj' />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-2-3.png'
                      title='Urgent Care'
                      description='dxgcfvhudefrgbjnkdcndbhinj' />
                  </Col>
                </Row>
                <Row className='pb-5'>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-12-3.png'
                      title='Home Test'
                      description='dxgcfvhgvudcivubvcdnasbj dcubhinj' />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-14-3.png'
                      title='Routine Checkup'
                      description='dxgcfvhuxtuvghvutcyxtycvubibhinj' />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-9-3.png'
                      title='Care'
                      description='dxgcfvhutgyihvjhbouivcyfygbhinj' />
                  </Col>
                  <Col>
                    <HomepageCard
                      img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-6-3.png'
                      title='Test'
                      description='dxgcfvhutfugyivctfygiubhinj' />
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
                          src='https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg'
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

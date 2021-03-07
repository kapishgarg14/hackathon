import React from 'react'
import '../styles/homepage.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HomepageCard from '../components/HomepageCard'


let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');

console.log(userData)
console.log(doctorData)

const Homepage = () => {
  return (
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

      </Container>
    </div>
  )
}

export default Homepage

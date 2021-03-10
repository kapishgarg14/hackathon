import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/covidpage.css'
import '../styles/map.css'
import { DisplayMapFC } from '../components/DisplayMapFC'
import { Button, Container, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'



const VaccinationPage = () => {

  const [loading, setLoading] = useState(false)





  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />
          <div className='p-0 content'>

            <h1 className='titleHeading'> Covid Vaccination Centres</h1>
            <Container style={{ marginTop: '24vh' }}>
              <div>
                <Row className='pb-5'>
                  <Col sm={6}>
                    <h3 className='mb-4'>Covid - 19 Test Centres Near You</h3>
                    <DisplayMapFC codeword='hospitals' />
                  </Col>

                  <Col sm={6}>
                    <h3 className='mb-4'>Covid - 19 CoronaVirus Prediction and Testing</h3>
                    <p>
                      DocTap has carried out over 80,000 Covid-19 tests from our 30+ London locations, many open 7 days per week. We specialise in PCR, antigen and antibody tests, with results available in under 3 hours. All tests include a doctor's results certificate detailing your results and suitability to travel or work. We also provide same day Test to Release certificates for travellers wishing to reduce their quarantine upon returning to England.
                    </p>
                    <p>
                      Given the importance and urgency of Covid testing, we do not provide postal tests. All our tests are taken in a medical facility, either by a healthcare professional or as a guided self swab.
                    </p>
                    <p>
                      Choose from 3 hour, same day or next day results. Your results will be simultaneously emailed to you and uploaded to your DocTap account. In the exceptionally unlikely event of your results not being available within the guaranteed timeframe then we would refund the cost of your test in full.
                    </p>

                  </Col>

                </Row>



              </div>




            </Container>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default VaccinationPage

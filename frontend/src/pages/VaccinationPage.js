import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/covidpage.css'
import { Button, Container, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'


let userData = localStorage.getItem('userData');
let doctorData = localStorage.getItem('doctorData');


const VaccinationPage = () => {

  const [doctors, setDoctors] = useState(null)
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   async function getDoctors() {
  //     try {

  //       const config = {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //       const { data } = await axios.get('/api/doctors', config)
  //       console.log(data)
  //       setDoctors(data)
  //       setLoading(false)
  //       userData = localStorage.getItem('userData');
  //       doctorData = localStorage.getItem('doctorData');
  //       localStorage.setItem('userData', userData)
  //       localStorage.setItem('doctorData', doctorData)

  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }

  //   getDoctors()
  // }, [])



  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />

          <div className='p-0'>

            <img src='https://cdn.buttercms.com/5hvuIprQSW28dpjJrp0I' alt='default' className='covidImg' />
            <h1 className='titleHeading'> Covid - 19</h1>
            <Container style={{ marginTop: '20vh' }}>
              <div>
                <Row className='pb-5'>
                  <Col sm={6}>
                    data 1
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

                    <LinkContainer to='/covidprediction'>
                      <Button variant="success" size="lg" className='covidPredictionBtn mt-3 mx-5'>
                        Prediction
                      </Button>
                    </LinkContainer>
                    <LinkContainer to='/testing'>
                      <Button variant="danger" size="lg" className='testingBtn mt-3 mx-5'>
                        Book a Test Online
                      </Button>
                    </LinkContainer>



                  </Col>

                </Row>
                <h3 className='mb-4'>Covid-19 Tests</h3>

                <Row>

                  <Col className='mb-2'><h5>Name</h5></Col>
                  <Col className='mb-2'><h5>Price</h5></Col>
                  <Col className='mb-2'><h5>Results</h5></Col>
                  <Col className='mb-2'><h5>Accuracy</h5></Col>

                  <Table striped bordered hover variant="secondary" className='mb-5'>
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>PCR 3 hours</th>
                        <th style={{ width: '25%' }}>249</th>
                        <th style={{ width: '20%' }}>3 Hours</th>
                        <th style={{ width: '30%' }}>Sensitivity: 98%, Specificity: 100%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5">
                          Our fastest Covid-19 PCR test, available at London Bridge and Heathrow airport.  There's no need to arrange a test days in advance of your flight.  Simply take your test at the airport entrance and have your results certificiate in your inbox 3 hours later. This is a RT-PCR test from a UKAS accredited laboratory and is accepted by all countries.  Not flying today? That's fine, this test is available to anyone.
                        </td>

                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered hover variant="secondary" className='mb-5'>
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>PCR Same Day</th>
                        <th style={{ width: '25%' }}>199</th>
                        <th style={{ width: '20%' }}>By 10pm Same Day</th>
                        <th style={{ width: '30%' }}>Sensitivity: 98%, Specificity: 100%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5">
                          Guaranteed same day PCR results from 10+ locations across London. This is ideal for last minute travel or the added piece of mind which comes from receiving your results and certificate a couple of days before flying. This is a RT-PCR test from a UKAS accredited laboratory and is accepted by all countries.                        </td>

                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered hover variant="secondary" className='mb-5'>
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>PCR Next Day</th>
                        <th style={{ width: '25%' }}>139</th>
                        <th style={{ width: '20%' }}>By 11pm next day</th>
                        <th style={{ width: '30%' }}>Sensitivity: 98%, Specificity: 100%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5">
                          Our standard Covid-19 PCR test has guaranteed results by 11pm the next day, or your money back. To guarantee consistency of supply, we work with 2 laboratories for this test.  All our tests are processed at a laboratory which operates according to the ISO 17025 standard and has been validated against a UKAS-accredited method.  One of them is still awaiting formal UKAS accreditation. If you require a test from a UKAS lab, please book at one of the following locations: Oxford Street, London Bridge, Victoria, Pimlico, Tower Bridge, Battersea Chelsea, Mornington Crescent, Angel, Holborn, Highbury and Islington and Clapham South.                        </td>

                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered hover variant="secondary" className='mb-5'>
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>Antigen Test</th>
                        <th style={{ width: '25%' }}>79</th>
                        <th style={{ width: '20%' }}>3 Hours</th>
                        <th style={{ width: '30%' }}>Sensitivity: 98.3%, Specificity: 99.6%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5">
                          Our Orient Gene Covid-19 antigen test is one of only a few UK Public Health assessed antigen tests. A healthcare professional will take a swab from your nose. You will receive your results and doctor's certificate by email within 3 hours. NB. Many countries require a PCR test for entry.  Please check the latest travel advice. This is not suitable for children under 5, who should have a PCR test.                        </td>

                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered hover variant="secondary" className='mb-5'>
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>Antibody Test (IgM & IgG)</th>
                        <th style={{ width: '25%' }}>59</th>
                        <th style={{ width: '20%' }}>3 Hours</th>
                        <th style={{ width: '30%' }}>Sensitivity: 100%, Specificity: 100%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5">
                          Public Health England have declared lateral flow (point of care) tests accurate enough for use in the community, including for asymptomatic patients. Our Orient Gene Covid-19 IgM/IgG antibody test was used by Imperial College London in the largest Covid-19 seroprevalence population study in the world. A healthcare professional will take a blood sample. You will receive your results and doctor's certificate by email within 3 hours. Antibody tests check whether you have had the virus in the past, NOT whether you are currently infected. We can only do antibody tests 14+ days after all your symptoms have cleared up.                        </td>

                      </tr>
                    </tbody>
                  </Table>
                  <Table striped bordered hover variant="secondary" className='mb-5'>
                    <thead>
                      <tr>
                        <th style={{ width: '25%' }}>Antibody (IgG) Lab Test</th>
                        <th style={{ width: '25%' }}>45 + Consultaion Fee</th>
                        <th style={{ width: '20%' }}>2-3 days</th>
                        <th style={{ width: '30%' }}>	Sensitivity:99%, Specificity:99%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5">
                          Should you would prefer a Covid-19 test which is analysed in a laboratory then any of our GPs can take this for you.  Please select Laboratory Antibody Test on the booking page.  The GP consultation fee is payable on booking (typically £49) and the test itself (£45) will be payable in the consultation once you have discussed it with the doctor. Antibody tests check whether you have had the virus in the past, NOT whether you are currently infected. We can only do antibody tests 14+ days after all your symptoms have cleared up.                        </td>

                      </tr>
                    </tbody>
                  </Table>

                </Row>
                <div className='text-center mb-5'>
                  <LinkContainer to='/covidprediction'>
                    <Button variant="success" size="lg" className='covidPredictionBtn mt-3 mx-5'>
                      Prediction
                      </Button>
                  </LinkContainer>
                  <LinkContainer to='/testing'>
                    <Button variant="danger" size="lg" className='testingBtn mt-3 mx-5'>
                      Book a Test Online
                      </Button>
                  </LinkContainer>
                </div>


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

import React, { useState } from 'react'
import '../styles/covidpage.css'
import '../styles/map.css'
import { DisplayMapFC } from '../components/DisplayMapFC'
import { Container, Row, Col } from 'react-bootstrap'
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
                      We at ChikitsApp understand the ultimate need of the dire situation, a Covid-19 vaccine. Fortunately, the Govt. of India has approved the emergency distribution of Covishied and Covaxin, the two finished vaccines released by Serum Institute of India (SII) & Bharat Biotech respectively.
                      </p>
                    <p>
                      Now the question arises – how can you apply for vaccination? Worry not because ChikitsApp has got you covered. Here, we will list on a real time map all the registered vaccination centers near you, giving you the liberty to choose only the best out of all the available options.
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

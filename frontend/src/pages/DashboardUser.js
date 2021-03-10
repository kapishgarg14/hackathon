import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import TopNav from "../components/TopNav";
import '../styles/DashboardDoc.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HomepageCard from '../components/HomepageCard'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Footer from "../components/Footer";


const DashboardUser = ({ history }) => {
  const token = useRecoilValue(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);


  useEffect(() => {
    async function getDetails() {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            'id': user._id
          }
        }
        const { data } = await axios.get('/api/users/getPrescriptions', config)
        console.log(data)
        setUser(data)

      } catch (err) {
        console.error(err)
      }
    }
    getDetails()

  }, []);



  return (
    <>
      <TopNav />

      <h1>Welcome {user.name}</h1>

      <Row>
        <Col sm={4} className='text-center px-5'>
          <h3>Your Appointments</h3>
          {
            user.appointment && (
              user.appointment.map((appt) => (
                <Card border="primary" style={{ margin: '30px 15px 30px 15px' }}>
                  <Card.Header style={{ fontSize: '12px' }}>Appointment Id : <b>{appt._id}</b></Card.Header>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '24px' }}><b>{appt.doctor}</b></Card.Title>
                    <Card.Text>
                      <h5>Symptoms</h5>
                      {appt.symptoms}
                      <br />
                      <br />
                      <h5>Prescription from Doctor</h5>
                      {user.appointment && user.appointment.prescription ? (
                        <>
                        </>
                      ) : (
                          <div><b>
                            Yet to Prescribe
                            </b></div>
                        )}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Appointment Date : {appt.appointmentDate.substring(0, 10)}</small>
                  </Card.Footer>
                </Card>

              ))
            )
          }

        </Col>
        <Col sm={8} className='text-center'>
          <div className='mb-5'>
            <h3>Services Provided</h3>
          </div>
          <Row className='pb-5'>
            <Col>
              <HomepageCard
                img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-4-3.png'
                title='Book Appointment'
                description='Get yourself checked by leading doctors!'
                onClick={() => { history.push('') }}
              />
            </Col>
            <Col>
              <HomepageCard
                img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-16-3.png'
                title='Heart Risk Prediction'
                description='"heart is health". We will give you a reliable picture of your heart health, fully online!'
                onClick={() => { history.push('') }}
              />
            </Col>
            <Col>
              <HomepageCard
                img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-13-3.png'
                title='Find Medicine'
                description='Know your medicine. search all kinds of medicines from our database'
                onClick={() => { history.push('') }}
              />
            </Col>

          </Row>
          <Row className='pb-5'>

            <Col>
              <HomepageCard
                img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-14-3.png'
                title='Book a Test'
                description='Have your doubts? Get tested for covid-19.'
                onClick={() => { history.push('') }}
              />
            </Col>
            <Col>
              <HomepageCard
                img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-9-3.png'
                title='Covid Vaccination'
                description='Opt for vaccination at nearby centres'
                onClick={() => { history.push('') }}
              />
            </Col>
            <Col>
              <HomepageCard
                img='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-6-3.png'
                title='Covid Prediction'
                description='Get a fairly potential self-test result at home'
                onClick={() => { history.push('') }}
              />
            </Col>

          </Row>

        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default DashboardUser;
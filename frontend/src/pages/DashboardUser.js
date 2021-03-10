import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import TopNav from "../components/TopNav";
import '../styles/DashboardDoc.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
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
      <Container>
        <h1>Welcome {user.name}</h1>

        <Row>
          <Col sm={6} className='text-center'>
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
          <Col sm={6} className='text-center'>
            <h3>Services Provided</h3>


          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardUser;
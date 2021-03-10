import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import TopNav from "../components/TopNav";
import '../styles/DashboardDoc.css'
import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
//import Footer from "../components/Footer";


const DashboardDoc = ({ history }) => {
  const token = useRecoilValue(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  //State
  const [symptoms, setSymptoms] = useState("");
  const [medicine, setMedicine] = useState("");
  const [comments, setComments] = useState("");
  const [current, setCurrent] = useState("");

  const givePrescription = (userID, objID) => {
    axios.post(
      `/api/doctors/givePrescription`,
      {
        userId: userID,
        symptoms,
        medicine,
        objID,
        comments,
        date: Date.now(),
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        console.log(res.data, "give pres");
        // setUser(res.data);
        // localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'id': user._id
      }
    }

    axios.get(`/api/doctors/upcomingAppointments`, config)
      .then((res) => {
        console.log(res.data)
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // const toggleCurrent = (_id) => {
  //   if (current === _id) {
  //     setCurrent("");
  //   } else {
  //     setCurrent(_id);
  //   }
  // };
  return (
    <>
      <TopNav />
      <Container>
        <h1>Welcome {user.name}</h1>
        <Col sm={6} className='text-center'>
          <h3>Your Appointments</h3>
          {
            user.appointments && (
              user.appointments.map((appt) => (
                <Card border="primary" style={{ margin: '30px 15px 30px 15px' }}>
                  <Card.Header style={{ fontSize: '12px' }}>Appointment Id : <b>{appt._id}</b></Card.Header>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '24px' }}><b>{appt.doctor}</b></Card.Title>
                    <Card.Text>
                      <h5>Symptoms</h5>
                      {appt.symptoms}
                      <br />
                      <br />

                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Appointment Date : {appt.appointmentDate.substring(0, 10)}</small>
                    {user.appointments.prescription ? (
                      <>
                      </>
                    ) : (
                        <Button variant='warning'> Prescribe</Button>
                      )}

                  </Card.Footer>
                </Card>

              ))
            )
          }
        </Col>
        <Col sm={6} className='text-center'>
          { }
        </Col>

      </Container>
    </>
  );
};

export default DashboardDoc;
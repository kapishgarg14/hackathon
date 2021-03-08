import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/covidpage.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

let userData = localStorage.getItem("userData");
let doctorData = localStorage.getItem("doctorData");

console.log(userData);
console.log(doctorData);

const GetMedicine= ({ history }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const checkCovid = async (name
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };
      const { data } = await axios.get(
        "https://hacknsut21api.herokuapp.com/medicine?medicine_name="+name,
        config
      );
      console.log(data);

      //localStorage.setItem('doctorData', JSON.stringify(data))
      //history.push('/')
      //window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e, data) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    //login api
    checkCovid(
      name
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TopNav />

          <div className="p-0">
            <FormContainer>
              <h1>Find Medicines </h1>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="age">
                  <Form.Label>Medicine Name</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Medicine Name ..."
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  ></Form.Control>
                </Form.Group>

                
                <Button type="button" variant="success" onClick={submitHandler}>
                  Detect
                </Button>
              </Form>
            </FormContainer>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default GetMedicine;

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


const CovidPage = () => {

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
          {userData ? (
            <div className='p-0'>
              helllo
            </div>
          ) :
            (
              <h2>fuckyou</h2>
            )}

          <Footer />
        </>
      )}
    </>
  )
}

export default CovidPage

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { Container } from 'react-bootstrap'

import Homepage from './pages/Homepage'
import CovidPage from './pages/CovidPage'
import CovidPrediction from './pages/CovidPrediction'
import UserLoginPage from './pages/UserLoginPage'
import DoctorLoginPage from './pages/DoctorLoginPage'
import UserRegister from './pages/UserRegister'
import DoctorRegister from './pages/DoctorRegister'
import LoginDoctorUserChoicePage from './pages/LoginDoctorUserChoicePage'
import RegisterDoctorUserChoicePage from './pages/RegisterDoctorUserChoicePage'
import HeartPage from './pages/HeartPrediction'


function App() {
  return (
    <Router>

      <main>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/userlogin' component={UserLoginPage} />
        <Route exact path='/doctorlogin' component={DoctorLoginPage} />
        <Route exact path='/userregister' component={UserRegister} />
        <Route exact path='/doctorregister' component={DoctorRegister} />
        <Route exact path='/loginchoice' component={LoginDoctorUserChoicePage} />
        <Route exact path='/registerchoice' component={RegisterDoctorUserChoicePage} />
        <Route exact path='/heartprediction' component={HeartPage} />
        <Route exact path='/covid' component={CovidPage} />
        <Route exact path='/covidprediction' component={CovidPrediction} />
      </main>
    </Router>
  );
}

export default App;

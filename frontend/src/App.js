import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { Container } from 'react-bootstrap'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import UserLoginPage from './pages/UserLoginPage'
import DoctorLoginPage from './pages/DoctorLoginPage'
import UserRegister from './pages/UserRegister'
import DoctorRegister from './pages/DoctorRegister'
import LoginDoctorUserChoicePage from './pages/LoginDoctorUserChoicePage'
import RegisterDoctorUserChoicePage from './pages/RegisterDoctorUserChoicePage'


function App() {
  return (
    <Router>
      <TopNav />
      <main>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/userlogin' component={UserLoginPage} />
        <Route exact path='/doctorlogin' component={DoctorLoginPage} />
        <Route exact path='/userregister' component={UserRegister} />
        <Route exact path='/doctorregister' component={DoctorRegister} />
        <Route exact path='/loginchoice' component={LoginDoctorUserChoicePage} />
        <Route exact path='/registerchoice' component={RegisterDoctorUserChoicePage} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

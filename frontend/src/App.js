import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'


function App() {
  return (
    <Router>
      <TopNav />
      <main>
        <Route exact path='/' component={Homepage} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

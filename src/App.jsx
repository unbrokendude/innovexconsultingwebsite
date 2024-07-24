import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Client from './Components/Client/Client';
import Chiffre from './Components/Chiffre/Chiffre';
import Footer from './Components/Footer/Footer'; // Import the Footer component
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Carriere from './Components/Carriere/Carriere';
import JobDetails from './Components/JobDetails/JobDetails';

const App = () => {
  return (
    <div id="root">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="container">
                <Service />
                <Client />
                <Chiffre />
              </div>
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
              <ChooseUs />
               <Client />
            </>
          } />
          <Route path="/careers" element={
            <>
              <div className="container">
                <Carriere />
              </div>
            </>
          } />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/contact" element={
            <>
              <div className="container">
                <Contact />
              </div>
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

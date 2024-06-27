import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <Service />
            </div>
          </>
        } />
        <Route path="/about" element={
          <>
              <About />
          </>
        } />
        <Route path ="/contact" element={
          <>
          <div className="container">

          <Contact />
          </div>
          </>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;

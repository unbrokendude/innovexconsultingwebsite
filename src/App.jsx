import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/MuiNavbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Service/Service";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Clients from "./Components/Client/Client";
import Chiffre from "./Components/Chiffre/Chiffre";
import Footer from "./Components/Footer/Footer";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import Carriere from "./Components/Carriere/Carriere";
import JobDetails from "./Components/JobDetails/JobDetails";
import Consultant from "./Components/Consultant/Consultant";
import ConsultantDetail from "./Components/ConsultantDetail/ConsultantDetail"; // Import the ConsultantDetail component
import SearchResults from "./Components/SearchResults/SearchResults"; // Import the SearchResults component
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail"; // Import the ServiceDetail component

const App = () => {
  return (
    <div id="root">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="container">
                  <Services />
                  <Clients />
                  <Chiffre />
                </div>
              </>
            }
          />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Clients />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <div className="container">
                  <Carriere />
                </div>
              </>
            }
          />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route
            path="/consultants"
            element={
              <>
                <div className="container">
                  <Consultant />
                </div>
              </>
            }
          />
          <Route path="/consultant/:id" element={<ConsultantDetail />} />
          <Route
            path="/contact"
            element={
              <>
                <div className="container">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

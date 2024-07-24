import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <div className='service-section'>
      <h2>Nos Services</h2>
      <h3 className="services-subtitle">Ce que nous offrons</h3>
      <div className='services'>
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={faMobileAlt} className="icon" />
          </div>
          <h3 className="service-title">Service Mobile</h3>
          <p>Innovex Consulting vous propose son catalogue d’outils maison pour enrichir votre expérience SAP.</p>
        </div>
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLaptop} className="icon" />
          </div>
          <h3 className="service-title">Service Laptop</h3>
          <p>Grâce à son expérience dans le domaine des SIRH et son expertise métier, HCM Consulting Plus accompagne ses clients dans la mise en œuvre de solutions de gestion des ressources humaines.</p>
        </div>
        <div className="service">
          <div className="icon-container">
            <FontAwesomeIcon icon={faDesktop} className="icon" />
          </div>
          <h3 className="service-title">Service Desktop</h3>
          <p>HCM-CP vous propose différentes prestations d’expertise.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;

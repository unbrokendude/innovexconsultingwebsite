// Service.js
import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHolding, faLightbulb, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className='service-section'>
      <h2>Nos Services</h2>
      <h3 className="services-subtitle">Ce que nous offrons</h3>
      <div className='services'>
        <div className="service">
          <Link to="/service/conseil" className="service-link">
            <div className="icon-container">
            <FontAwesomeIcon icon={faHandsHolding}  className="icon" />
            </div>
            <h3 className="service-title">Conseil</h3>
            <p>Innovex consulting propose un conseil de qualité aux entreprises pour les aider à tirer le meilleur parti des solutions SAP dans le domaine des ressources humaines.</p>
          </Link>
        </div>
        <div className="service">
          <Link to="/service/implementation" className="service-link">
            <div className="icon-container">
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            </div>
            <h3 className="service-title">Implémentation</h3>
            <p>Notre équipe de consultants expérimentés se charge du processus complet de la mise en place de la solution SAP HR dans une entreprise.</p>
          </Link>
        </div>
        <div className="service">
          <Link to="/service/accompagnement" className="service-link">
            <div className="icon-container">
            <FontAwesomeIcon icon={faHandshakeAngle} className="icon" />
            </div>
            <h3 className="service-title">Accompagnement</h3>
            <p>Nos experts offrent un soutien continu et une guidance pour aider l'entreprise à réussir l'implémentation et l'utilisation de la solution SAP HR.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;

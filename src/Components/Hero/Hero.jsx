import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Votre chemin vers le succès à travers des solutions innovantes</h1>
        <p>Innovex Consulting est votre partenaire en excellence RH avec SAP. Nous sommes passionnés par l'optimisation des processus RH grâce à la puissance de SAP. Nous sommes une équipe d'experts SAP HR dédiés à aider les entreprises à tirer le meilleur parti de leurs ressources humaines</p>
        <div className='btns'>
        <Link to="/about" className='btn'>À propos de nous <i className="fas fa-arrow-right"></i></Link>
        <Link to="/contact" className='btn secondary'>Nous contactez <i className="fas fa-arrow-right"></i></Link>
        </div>
       
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Hero;

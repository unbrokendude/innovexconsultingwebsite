import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Leading to success through innovative solutions</h1>
        <p>Innovex Consulting connue en tant que spécialiste indépendant des solutions SAP, concevant, développant et mettant en œuvre des systèmes pour de grandes entreprises multinationales complexes.</p>
        <Link to="/about" className='btn'>À propos de nous <i className="fas fa-arrow-right"></i></Link>
        <Link to="/contact" className='btn secondary'>Nous contactez <i className="fas fa-arrow-right"></i></Link>
      </div>
    </div>
  );
}

export default Hero;

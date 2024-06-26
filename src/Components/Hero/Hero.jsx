import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Expertise solutions SAP</h1>
            <p>Innovex Consulting connue en tant que spécialiste indépendant des solutions SAP, concevant, développant et mettant en œuvre des systèmes pour de grandes entreprises multinationales complexes.</p>
            <button className='btn'>A propos de nous <i className="fas fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default Hero
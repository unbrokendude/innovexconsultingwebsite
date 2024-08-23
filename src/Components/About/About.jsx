import React from 'react';
import './About.css';
import about_img from '../../assets/about_img.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-content">
        <h3>Plus d'informations</h3>
        <h2>À propos de nous</h2>
      </div>
      <div className="about-image">
        <img src={about_img} alt="À propos de nous" className='about-img' />
      </div>
      <div className="about-content">
      <p>
          Innovex Consulting est votre partenaire en excellence RH avec SAP. Nous sommes passionnés par l'optimisation des processus RH grâce à la puissance de SAP. Nous sommes une équipe d'experts SAP HR dédiés à aider les entreprises à tirer le meilleur parti de leurs ressources humaines.
      </p>
        <ul>
          <li>💡 <b>Notre mission?</b> Transformer la gestion des ressources humaines en une expérience transparente et efficace pour les entreprises de toutes tailles. Que vous cherchiez à simplifier la gestion de la paie, à améliorer la gestion du personnel, Innovex Consulting est là pour vous guider à chaque étape.</li>
          <li>🏆 <b>Notre équipe est fière de ses réalisations récentes,</b> notamment la mise en place réussie de projets SAP HR pour des entreprises de renommée internationale. Nous croyons en la puissance de la technologie pour stimuler la croissance et l'excellence opérationnelle.</li>
          <li>✨ <b>Chez Innovex Consulting, nous offrons une gamme complète de services,</b> de la consultation initiale à la mise en œuvre complète et au soutien continu. Notre objectif est de vous aider à atteindre vos objectifs RH avec succès.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

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
          Nous sommes une Société de Services et d’Ingénierie Informatique qui positionne le capital humain au cœur de ses valeurs d’engagement et d’évolution, notre préoccupation essentielle est d’accompagner nos clients dans la conception, la planification et la mise en œuvre opérationnelle de leurs projets pour faciliter la mise en place de leur projet de transformation et d’expérience digitale. Avec une équipe d’experts ayant au moins 10 ans d’expérience, nous pouvons vous garantir les avantages suivants :
          <ul>
            <li>Une relation client qui met en valeur le capital humain</li>
            <li>La maîtrise de la solution à intégrer</li>
            <li>L’efficacité de travail avec une simplification des processus de gestion</li>
            <li>Encadrement et formation de vos équipes pour vous mettre en confiance après la transition</li>
          </ul>
          Notre force d’engagement et notre expertise nous permettent d’intervenir sur plusieurs phases de projet, notamment :
          <ul>
            <li>L’Expertise des projets SAP</li>
            <li>Phase amont d’un projet (cadrage, maîtrise d’ouvrage, conception de l’architecture du système)</li>
            <li>Implication sur toutes les phases clés du projet</li>
            <li>Intervention efficace sur la résolution des points de blocage</li>
            <li>Adaptation de l’outil aux contraintes métiers</li>
            <li>La formation standard aux modules SAP et aux différents processus métier</li>
            <li>Formation ciblée concernant vos processus spécifiques et vos besoins métier</li>
            <li>L’audit et validation de votre solution SAP par rapport à vos besoins</li>
          </ul>
          Nos consultants peuvent intégrer directement vos équipes pour vous assister sur vos différents projets, ou prendre en charge une partie ou la totalité de votre projet.
        </p>
      </div>
    </div>
  );
}

export default About;

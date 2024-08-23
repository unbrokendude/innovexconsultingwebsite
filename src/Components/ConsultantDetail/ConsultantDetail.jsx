import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ConsultantDetail.css';
import consultant2 from '../../assets/consultant2.png';
import consultant1 from '../../assets/consultant1.png';
import consultant3 from '../../assets/consultant3.png';

const consultants = [
  { 
    id: 1,
    title: 'Consultant expert SAP HR', 
    anneeExperience: 14,
    projetImplementation: 6,
    image: consultant2, 
    modulesSAP: [
      { title: 'Administration du personnel', stars: 5 },
      { title: 'Gestion de l\'organisation', stars: 5 },
      { title: 'Gestion de la paie', stars: 5 },
      { title: 'Gestion des temps', stars: 4 },
      { title: 'DSN et reporting', stars: 5 }
    ],
    competences: [
      { title: 'Paramétrage des tables', stars: 5 },
      { title: 'Cycles et schémas', stars: 5 },
      { title: 'ABAP', stars: 5 },
      { title: 'LSMW', stars: 5 },
      { title : 'SAP Query', stars: 5 }
    ],
    langues: [
      { title: 'Français', stars: 5 },
      { title: 'Anglais', stars: 4 }
    ],
    contact: {
      email: 'contact@innovexconsulting.com',
      website: 'https://innovexconsulting.com/',
      address: 'Hay Riad, Rabat, Maroc'
    },
  },
  { 
    id: 2,
    title: 'Consultante senior SAP HR', 
    anneeExperience: 6,
    projetImplementation: 2,
    image: consultant1, 
    modulesSAP: [
      { title: 'Administration du personnel', stars: 5 },
      { title: 'Gestion de l\'organisation', stars: 4 },
      { title: 'Gestion de la paie', stars: 4 },
      { title: 'Gestion des temps', stars: 4 },
      { title: 'DSN et reporting', stars: 4 }
    ],
    competences: [
      { title: 'Paramétrage des tables', stars: 4 },
      { title: 'Cycles et schémas', stars: 3 },
      { title : 'SAP Query', stars: 4 },
      { title: 'HRA suite 9', stars: 4 }
    ],
    langues: [
      { title: 'Français', stars: 5 },
      { title: 'Anglais', stars: 4 }
    ],
    contact: {
      email: 'contact@innovexconsulting.com',
      website: 'https://innovexconsulting.com/',
      address: 'Hay Riad, Rabat, Maroc'
    },
  },
  { 
    id: 3,
    title: 'Consultant junior SAP HR', 
    anneeExperience: 1,
    projetImplementation: 1,
    image: consultant3, 
    modulesSAP: [
      { title: 'Administration du personnel', stars: 2 },
      { title: 'Gestion de l\'organisation', stars: 2 },
      { title: 'Gestion de la paie', stars: 2 },
      { title: 'Gestion des temps', stars: 2 }
    ],
    competences: [
      { title: 'Paramétrage des tables', stars: 2 },
      { title: 'ABAP', stars: 3 }
    ],
    langues: [
      { title: 'Français', stars: 4 },
      { title: 'Anglais', stars: 4 }
    ],
    contact: {
      email: 'contact@innovexconsulting.com',
      website: 'https://innovexconsulting.com/',
      address: 'Hay Riad, Rabat, Maroc'
    },
  }
];

const ConsultantDetail = () => {
  const { id } = useParams();
  const consultant = consultants.find(c => c.id === parseInt(id));

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  return (
    <div className="consultant-detail">
      <div className="consultant-header">
        <img src={consultant.image} alt={consultant.title} className="consultant-detail-image" />
        <div className="consultant-title">
          <h1>{consultant.title}</h1>
          <h2>Années d'expériences<div className="anneeexperience">{consultant.anneeExperience}</div> </h2>
          <h3>Nombre de projets d'implémentation réalisés <div className="projets">{consultant.projetImplementation}</div></h3>
        </div>
      </div>
      <div className="consultant-content">
        <div className="competences-details">
          <div className="competences">
            <h2>Maîtrise fonctionnelle des modules SAP</h2>
            {consultant.modulesSAP.map((module, index) => (
              <div key={index} className="competence">
                <strong>{module.title}</strong>
                <span className="stars">
                  {'★'.repeat(module.stars)}
                  {'☆'.repeat(5 - module.stars)}
                </span>
              </div>
            ))}
            <h2>Compétences clés</h2>
            {consultant.competences.map((competence, index) => (
              <div key={index} className="competence">
                <strong>{competence.title}</strong>
                <span className="stars">
                  {'★'.repeat(competence.stars)}
                  {'☆'.repeat(5 - competence.stars)}
                </span>
              </div>
            ))}
            <h2>Langues</h2>
            {consultant.langues.map((langue, index) => (
              <div key={index} className="competence">
                <strong>{langue.title}</strong>
                <span className="stars">
                  {'★'.repeat(langue.stars)}
                  {'☆'.repeat(5 - langue.stars)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetail;

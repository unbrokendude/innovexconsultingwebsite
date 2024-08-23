import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';

// Import images for each service
import conseilImage from '../../assets/conseil.png'; 
import implementationImage from '../../assets/implementation.png'; 
import accompagnementImage from '../../assets/accompagnement.png';

const serviceDetails = {
  conseil: {
    title: 'Conseil',
    description: `Innovex consulting propose un conseil de qualité aux entreprises pour les aider à tirer le meilleur parti des solutions SAP dans le domaine des ressources humaines. Cela inclut :`,
    points: [
      <span><strong>Analyse des besoins :</strong> Compréhension des besoins spécifiques de l'entreprise en matière de gestion des ressources humaines.</span>,
      <span><strong>Conception de solutions :</strong> Élaboration de solutions adaptées basées sur le logiciel SAP pour répondre aux exigences de l'entreprise.</span>,
      <span><strong>Planification et stratégie :</strong> Développement de plans et de stratégies pour une mise en œuvre efficace des solutions SAP HR.</span>,
      <span><strong>Optimisation des processus :</strong> Conseils pour améliorer les processus RH en utilisant au mieux les fonctionnalités de SAP HR.</span>,
    ],
    summary: 'En résumé, le service de conseil en SAP HR aide les entreprises à concevoir, mettre en œuvre et optimiser les solutions SAP HR pour améliorer leur gestion des ressources humaines.',
    image: conseilImage,
  },
  implementation: {
    title: 'Implémentation',
    description: `Notre équipe de consultants expérimentés se charge du processus complet de la mise en place de la solution SAP HR dans une entreprise. Cela inclut :`,
    points: [
      <span><strong>Configuration :</strong> Paramétrage du logiciel SAP HR pour qu'il réponde aux besoins particuliers de l'entreprise.</span>,
      <span><strong>Développement :</strong> Personnalisation et développement éventuel de modules ou de fonctionnalités supplémentaires pour adapter SAP HR aux besoins spécifiques de l'entreprise.</span>,
      <span><strong>Intégration :</strong> Connexion de SAP HR avec d'autres systèmes ou applications utilisés par l'entreprise pour assurer une cohérence des données et une fluidité des processus.</span>,
    ],
    image: implementationImage,
    summary: '',
  },
  accompagnement: {
    title: 'Accompagnement',
    description : `Nos experts offrent un soutien continu et une guidance pour aider l'entreprise à réussir l'implémentation et l'utilisation de la solution SAP HR. Cela comprend :`,
    points: [
      <span><strong>Support Technique :</strong> Assistance pour résoudre les problèmes techniques et assurer le bon fonctionnement du système SAP HR.</span>,
      <span><strong>Formation et Développement :</strong> Formation des utilisateurs et développement des compétences nécessaires pour utiliser efficacement le système.</span>,
      <span><strong>Suivi et Évaluation :</strong> Surveillance continue des performances du système et évaluation des résultats pour garantir que les objectifs sont atteints.</span>,
      <span><strong>Gestion du Changement :</strong> Aide dans la gestion des aspects organisationnels et humains liés à l'adoption de SAP HR, y compris la communication et la gestion des résistances.</span>      
    ],
    image: accompagnementImage,
    summary: `L'accompagnement vise à garantir une transition fluide vers le nouvel outil et à maximiser les bénéfices de SAP HR pour l'entreprise.`,
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  useEffect(() => {
    const backClicked = sessionStorage.getItem('backToServicesClicked');
    if (!backClicked) {
      window.scrollTo(0, 0);
    } else {
      sessionStorage.removeItem('backToServicesClicked');
    }
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail">
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <ul>
        {service.points && service.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {service.summary && <p>{service.summary}</p>}
      {service.image && <img src={service.image} alt={`${service.title} Service`} />} {/* Render the image dynamically */}
    </div>
  );
};

export default ServiceDetail;

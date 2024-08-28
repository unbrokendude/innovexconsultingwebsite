// Service.js
import React from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHolding,
  faLightbulb,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";

const ServiceDetails = [
  {
    id: 1,
    title: "Conseil",
    description:
      "Innovex consulting propose un conseil de qualité aux entreprises pour les aider à tirer le meilleur parti des solutions SAP dans le domaine des ressources humaines.",
    icon: faHandsHolding,
    to: "/service/conseil",
  },
  {
    id: 2,
    title: "Implémentation",
    description:
      "Notre équipe de consultants expérimentés se charge du processus complet de la mise en place de la solution SAP HR dans une entreprise.",
    icon: faLightbulb,
    to: "/service/implementation",
  },
  {
    id: 3,
    title: "Accompagnement",
    description:
      "Nos experts offrent un soutien continu et une guidance pour aider l'entreprise à réussir l'implémentation et l'utilisation de la solution SAP HR.",
    icon: faHandshakeAngle,
    to: "/service/accompagnement",
  },
];

const Service = (prop) => {
  return (
    <div className="service">
      <Link to={prop.to} className="service-link">
        <div className="icon-container">
          <FontAwesomeIcon icon={prop.icon} className="icon" />
        </div>
        <h3 className="service-title">{prop.title}</h3>
        <p>{prop.description}</p>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <div className="service-section">
      <h2>Nos Services</h2>
      <h3 className="services-subtitle">Ce que nous offrons</h3>
      <Grid container spacing={2} className="services">
        {ServiceDetails.map((service) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <Service
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              to={service.to}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;

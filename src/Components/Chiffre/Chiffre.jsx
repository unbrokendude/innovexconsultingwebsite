import React, { useEffect, useState } from 'react';
import './Chiffre.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Chiffre = () => {
  const [clients, setClients] = useState(0);
  const [chiffreAffaire, setChiffreAffaire] = useState(0);
  const [experience, setExperience] = useState(0);
  const [consultants, setConsultants] = useState(0);

  useEffect(() => {
    const clientsInterval = setInterval(() => {
      setClients(prev => (prev < 5 ? prev + 1 : prev));
    }, 100);

    const chiffreAffaireInterval = setInterval(() => {
      setChiffreAffaire(prev => (prev < 2750000 ? prev + 10000 : prev));
    }, 1);

    const experienceInterval = setInterval(() => {
      setExperience(prev => (prev < 15 ? prev + 1 : prev));
    }, 100);

    const consultantsInterval = setInterval(() => {
      setConsultants(prev => (prev < 3 ? prev + 1 : prev));
    }, 100);

    return () => {
      clearInterval(clientsInterval);
      clearInterval(chiffreAffaireInterval);
      clearInterval(experienceInterval);
      clearInterval(consultantsInterval);
    };
  }, []);

  return (
    <div className="chiffre-container">
      <h3 className="chiffre-title">POUR MIEUX NOUS CONNAÎTRE</h3>
      <h1 className="chiffre-heading">Quelques chiffres clés</h1>
      <div className="chiffre-content">
        <div className="chiffre-item chiffre-circle">
          <span className="chiffre-number">{clients}</span>
          <span className="chiffre-text">Clients grands comptes</span>
        </div>
        <div className="chiffre-other-items">
          <div className="chiffre-item chiffre-item-right">
            <span className="chiffre-large-number">{chiffreAffaire.toLocaleString()}</span>
            <span className="chiffre-text"> Chiffre d'affaire</span>
          </div>
          <div className="chiffre-item chiffre-item-right">
            <span className="chiffre-large-number">{experience}</span>
            <span className="chiffre-text"> Le nombre moyen d'années d'expérience de nos consultants</span>
          </div>
          <div className="chiffre-item chiffre-item-right">
            <span className="chiffre-large-number">{consultants}</span>
            <span className="chiffre-text"> Consultants</span>
          </div>
        </div>
      </div>
      <div className="chiffre-decorative-circle chiffre-decorative-circle1">
        <i className="fa-solid fa-magnifying-glass-chart"></i>
      </div>
      <div className="chiffre-decorative-circle chiffre-decorative-circle2">
        <i className="fa-solid fa-euro-sign"></i>
      </div>
      <div className="chiffre-decorative-circle chiffre-decorative-circle3">
        <i className="fa-solid fa-money-bill-trend-up"></i>
      </div>
    </div>
  );
}

export default Chiffre;

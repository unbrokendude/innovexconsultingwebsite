import React from 'react';
import './Client.css';
import vinci from '../../assets/vinci.png';
import luxottica from '../../assets/luxottica.png';
import groupePomona from '../../assets/group-pomona.png';
import esteeLauder from '../../assets/estee-lauder.png';

const Client = () => {
  return (
    <div className="clients-section">
      <h3>Nos clients</h3>
      <p>Nous avons le privilège de travailler avec des entreprises tournées vers l’avenir.</p>
      <p>Ils nous ont fait confiance : </p>
      <div className="clients-container">
        <div className="client-card">
          <div className="client-img">
            <img src={luxottica} alt='Luxottica' />
          </div>
        </div>
        <div className="client-card">
          <div className="client-img">
            <img src={groupePomona} alt='Groupe Pomona' />
          </div>
        </div>
        <div className="client-card">
          <div className="client-img">
            <img src={vinci} alt='Vinci Construction' />
          </div>
        </div>
        <div className="client-card">
          <div className="client-img">
            <img src={esteeLauder} alt='Estee Lauder Companies' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;

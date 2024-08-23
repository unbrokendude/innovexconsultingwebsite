import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Consultant.css';
import consultant1 from '../../assets/consultant1.png';
import consultant2 from '../../assets/consultant2.png';
import consultant3 from '../../assets/consultant3.png';

const Consultant = () => {
  const navigate = useNavigate();
  const consultants = [
    { id: 1, date: 'novembre 6, 2020', title: 'Consultant expert SAP HR', image: consultant2 },
    { id: 2, date: 'juillet 27, 2020', title: 'Consultante senior SAP HR', image: consultant1 },
    { id: 3, date: 'juillet 21, 2020', title: 'Consultant junior SAP HR', image: consultant3 },
  ];

  const handleCardClick = (id) => {
    navigate(`/consultant/${id}`);
  };

  return (
    <div className="consultants">
      <h1>Notre équipe</h1>
      <div className="consultants-list">
        {consultants.map((consultant) => (
          <div key={consultant.id} className="consultant-card" onClick={() => handleCardClick(consultant.id)}>
            <img src={consultant.image} alt={consultant.title} className="consultant-image" />
            <div className="consultant-info">
              <div className="consultant-title">{consultant.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultant;

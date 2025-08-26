import React, { useEffect, useState, useRef } from "react";
import "./Chiffre.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Box } from "@mui/material";

const Chiffre = () => {
  const [clients, setClients] = useState(0);
  const [chiffreAffaire, setChiffreAffaire] = useState(0);
  const [experience, setExperience] = useState(0);
  const [consultants, setConsultants] = useState(0);
  const chiffreRef = useRef(null);

  useEffect(() => {
    let clientsInterval,
      chiffreAffaireInterval,
      experienceInterval,
      consultantsInterval;

    const startIncrementation = () => {
      clientsInterval = setInterval(() => {
        setClients((prev) => (prev < 7 ? prev + 1 : prev));
      }, 100);

      chiffreAffaireInterval = setInterval(() => {
        setChiffreAffaire((prev) => {
          if (prev + 1110 < 326610) {
            return prev + 1110;
          } else {
            clearInterval(chiffreAffaireInterval);
            return 326610;
          }
        });
      }, 1);

      experienceInterval = setInterval(() => {
        setExperience((prev) => (prev < 10 ? prev + 1 : prev));
      }, 100);

      consultantsInterval = setInterval(() => {
        setConsultants((prev) => (prev < 98 ? prev + 1 : prev));
      }, 10);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startIncrementation();
          observer.unobserve(chiffreRef.current);
        }
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (chiffreRef.current) {
      observer.observe(chiffreRef.current);
    }

    return () => {
      clearInterval(clientsInterval);
      clearInterval(chiffreAffaireInterval);
      clearInterval(experienceInterval);
      clearInterval(consultantsInterval);
      if (chiffreRef.current) {
        observer.unobserve(chiffreRef.current);
      }
    };
  }, []);

  return (
    <div className="chiffre-container" ref={chiffreRef}>
      <h3 className="chiffre-title">POUR MIEUX NOUS CONNAÎTRE</h3>
      <h1 className="chiffre-heading">Quelques chiffres clés</h1>
      <div className="chiffre-content">
        <div className="chiffre-item chiffre-circle">
          <span className="chiffre-number">{clients}</span>
          <span className="chiffre-text">Clients grands comptes</span>
        </div>
        <div className="chiffre-other-items">
          <div className="chiffre-item chiffre-item-right">
            <span className="chiffre-large-number">
              {chiffreAffaire.toLocaleString()}
            </span>
            <span className="chiffre-text">Chiffre d'affaire 2024</span>
          </div>
          <div className="chiffre-item chiffre-item-right">
            <span className="chiffre-large-number">{experience}</span>
            <span className="chiffre-text">
              Le nombre moyen d'années d'expérience de nos consultants
            </span>
          </div>
          <div className="chiffre-item chiffre-item-right">
            <span className="chiffre-large-number">{consultants} % </span>
            <span className="chiffre-text">
              Taux de satisfaction des clients
            </span>
          </div>
        </div>
      </div>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box className="chiffre-decorative-circle chiffre-decorative-circle1">
          <i className="fa-solid fa-magnifying-glass-chart"></i>
        </Box>
        <Box className="chiffre-decorative-circle chiffre-decorative-circle2">
          <i className="fa-solid fa-euro-sign"></i>
        </Box>
        <Box className="chiffre-decorative-circle chiffre-decorative-circle3">
          <i className="fa-solid fa-money-bill-trend-up"></i>
        </Box>
      </Box>
    </div>
  );
};

export default Chiffre;

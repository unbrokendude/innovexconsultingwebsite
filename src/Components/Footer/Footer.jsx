// Footer.js
import React from "react";
import "./Footer.css"; // Create a CSS file for styling
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/about">A propos de nous</a>
            <a href="/careers">Carrières</a>
            <a href="/consultants">Nos consultants</a>
            <a href="/contact">Nous contacter</a>
          </div>
          <div className="footer-social">
            <p>Vous pouvez également nous suivre sur Linkedin:</p>
            <a
              href="https://www.linkedin.com/company/innovex-consulting-france/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Mentions légales</p>
          <p>&copy; 2024 Innovex Consulting. Tous droits réservés.</p>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;

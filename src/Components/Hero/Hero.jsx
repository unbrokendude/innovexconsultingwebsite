import React from "react";
import "./Hero.css";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import heroImg from "../../assets/hero.png";

const MuiHero = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ my: 10 }}>
          <Typography
            variant="h2"
            sx={{
              m: 4,
              fontSize: { xs: 30, md: 40, lg: 48 },
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Outfit",
              fontWeight: 600,
            }}
          >
            Votre chemin vers le succès à travers des solutions innovantes
          </Typography>
          <Typography
            variant="body1"
            sx={{
              m: 4,
              textAlign: "justify",
            }}
          >
            Innovex Consulting est votre partenaire en excellence RH avec SAP.
            Nous sommes passionnés par l'optimisation des processus RH grâce à
            la puissance de SAP. Nous sommes une équipe d'experts SAP HR dédiés
            à aider les entreprises à tirer le meilleur parti de leurs
            ressources humaines
          </Typography>
          <div className="btns">
            <Link to="/about" className="btn">
              À propos <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn secondary">
              Nous contacter <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </Box>
      </Grid>
      <Grid
        size={{ md: 4, lg: 6 }}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            width: { md: "150%", lg: "100%" },
            height: { md: "480px", lg: "100%" },
          }}
          className="hero-image"
        ></Box>
      </Grid>
    </Grid>
  );
};

export default MuiHero;

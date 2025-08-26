import React from "react";
import "./Client.css";
import vinci from "../../assets/vinci.png";
import luxottica from "../../assets/luxottica.png";
import groupePomona from "../../assets/group-pomona.png";
import esteeLauder from "../../assets/estee-lauder.png";
import gsk from "../../assets/gsk.png";
import ca from "../../assets/ca.png";
import airFrance from "../../assets/Air-France.png";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const ClientDetails = [
  {
    id: 1,
    name: "GSK",
    image: gsk,
  },
  {
    id: 2,
    name: "C&A",
    image: ca,
  },
  {
    id: 3,
    name: "Air France",
    image: airFrance,
  },
  {
    id: 4,
    name: "Vinci Construction",
    image: vinci,
  },
  {
    id: 5,
    name: "Luxottica",
    image: luxottica,
  },
  {
    id: 6,
    name: "Groupe Pomona",
    image: groupePomona,
  },
  {
    id: 7,
    name: "Estee Lauder Companies",
    image: esteeLauder,
  },
];

const Client = (prop) => {
  return (
    <div className="client-card">
      <div className="client-img">
        <img src={prop.image} alt={prop.name} />
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <Box className="clients-section" maxWidth={"lg"}>
      <h3>Nos clients</h3>
      <p>
        Nous avons le privilège de travailler avec des entreprises tournées vers
        l’avenir.
      </p>
      <p>Ils nous ont fait confiance : </p>
      <Grid container spacing={2}>
        {ClientDetails.map((client) => (
          <Grid size={{ xs: 6, md: 3 }}>
            <Client key={client.id} name={client.name} image={client.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clients;

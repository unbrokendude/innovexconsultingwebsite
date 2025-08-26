import React from "react";
import { useNavigate } from "react-router-dom";
import "./Consultant.css";
import consultant1 from "../../assets/consultant1.png";
import consultant2 from "../../assets/consultant2.png";
import consultant3 from "../../assets/consultant3.png";
import Grid from "@mui/material/Grid2";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

const ConsultantsDetails = [
  {
    id: 1,
    date: "novembre 6, 2020",
    title: "Consultant expert SAP HR",
    image: consultant2,
  },
  {
    id: 2,
    date: "juillet 27, 2020",
    title: "Consultante senior SAP HR",
    image: consultant1,
  },
  {
    id: 3,
    date: "juillet 21, 2020",
    title: "Consultant junior SAP HR",
    image: consultant3,
  },
];

const Consultant = (prop) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/consultant/${id}`);
  };
  return (
    <Paper
      key={prop.id}
      onClick={() => handleCardClick(prop.id)}
      maxWidth={200}
    >
      <Box sx={{ m: "16px" }}>
        <img src={prop.image} alt={prop.title} className="consultant-image" />
      </Box>
      <div className="consultant-info">
        <div className="consultant-title">{prop.title}</div>
      </div>
    </Paper>
  );
};

const Consultants = () => {
  return (
    <div className="consultants">
      <h1>Notre équipe</h1>
      <Grid
        container
        className="consultants-list"
        spacing={2}
        maxWidth={{ xs: "300px", md: "md" }}
      >
        {ConsultantsDetails.map((consultant) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <Consultant key={consultant.id} {...consultant} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Consultants;

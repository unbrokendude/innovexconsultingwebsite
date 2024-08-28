import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg.png";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/submit-form`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setResult("Formulaire soumis avec succès");
        event.target.reset();
      } else {
        const errorData = await response.text();
        console.error("Erreur:", errorData);
        setResult("Erreur: " + response.statusText);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setResult("Erreur: " + error.message);
    }
  };

  return (
    <div className="contact">
      <h3>Contactez Nous</h3>
      <h2>Restons en contact</h2>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="contact-col2">
            <form onSubmit={onSubmit}>
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Entrez votre nom"
                required
              />
              <label>Prénom</label>
              <input
                type="text"
                name="prenom"
                placeholder="Entrez votre prénom"
                required
              />
              <label>Téléphone</label>
              <input
                type="tel"
                name="telephone"
                placeholder="Entrez votre numéro de téléphone"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Entrez votre email"
                required
              />
              <label>Objet</label>
              <input
                type="text"
                name="objet"
                placeholder="Entrez l'objet de votre message"
                required
              />
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Entrez votre message"
                required
              ></textarea>
              <button type="submit" className="btn dark-btn">
                Envoyer <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <span>{result}</span>
          </div>
        </Grid>
        <Grid className="contact-col" size={{ xs: 12, md: 6 }}>
          <Typography
            variant={"h3"}
            sx={{ fontFamily: "Outfit", mt: 6, mb: 2, textAlign: "left" }}
          >
            Envoyez nous un message
          </Typography>
          <Typography
            variant={"body1"}
            sx={{ fontFamily: "Outfit", textAlign: "justify", mb: 4 }}
          >
            N'hésitez pas à nous contacter via le formulaire de contact ou
            trouvez nos coordonnées ci-dessous. Vos commentaires, questions et
            suggestions sont importants pour nous car nous nous efforçons de
            fournir un service exceptionnel à notre communauté.
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <i className="fas fa-envelope"></i> contact@innovex-consulting.com
            </li>
            <li>
              <i className="fas fa-phone"></i> + 33 7 55 77 61 89 | +212 7 08 08
              81 30
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 46, Rue El Batinia,
              Immeuble la Rose III, Maarif - Casablanca
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;

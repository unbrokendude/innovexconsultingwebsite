import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg.png';

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd5c45f2-aa89-4774-af85-f7ab674a0010");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <h3>Contactez Nous</h3>
      <h2>Restons en contact</h2>
      <div className="contact-container">
        <div className="contact-col">
          <h3>
            Envoyez nous un message 
            <img className="msg-icon" src={msg_icon} alt="Message Icon" />
          </h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><i className="fas fa-envelope"></i> Contact@InnovexConsulting.com</li>
            <li><i className="fas fa-phone"></i> +1 222 222 2222</li>
            <li><i className="fas fa-map-marker-alt"></i> 77 Massachusetts Ave, Cambridge MA 02139, United States</li>
          </ul>
        </div>
        <div className="contact-col2">
          <form onSubmit={onSubmit}>
            <label>Nom</label>
            <input type="text" name='nom' placeholder="Entrez votre nom" required />
            <label >Téléphone</label>
            <input type="tel" name='téléphone' placeholder='Entrez votre numéro de téléphone'/>
            <label >Email</label>
            <input type="email" name='email' placeholder="Entrez votre Email" required/>
            <label >Message</label>
            <textarea name="messgae" rows="6" placeholder='Entrez votre message' required></textarea>
            <button type="submit" className='btn dark-btn'>Envoyer  <i className="fas fa-paper-plane"></i></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

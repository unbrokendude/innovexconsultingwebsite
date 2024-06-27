import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg.png';

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contactez Nous</h3>
      <h2>Restons en contact</h2>
      <div className="contact-container">
        <div className="contact-col">
          <h3>Envoyez nous un message </h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><i className="fas fa-envelope"></i> Contact@InnovexConsulting.com</li>
            <li><i className="fas fa-phone"></i> +1 222 222 2222</li>
            <li><i className="fas fa-map-marker-alt"></i> 77 Massachusetts Ave, Cambridge MA 02139, United States</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

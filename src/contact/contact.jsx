import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>LeaderIA</h2>
          <address>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://www.google.com/maps/search/?api=1&query=128+rue+la+Boétie,+Paris,+75008" target="_blank" rel="noopener noreferrer">128 rue la Boétie, Paris, 75008</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@mister-ia.com">contact@mister-ia.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /><a href="tel:+06 79 53 29 05">06 79 53 29 05</a> 
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </p>
          </address>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Formations IA</li>
            <li>Audit & conseil</li>
            <li>Conférences</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <ul>
            <li>CGV</li>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Autres</h3>
          <ul>
            <li>Règlement intérieur</li>
            <li>Attestation Qualiopi</li>
            <li>Annuaire personne en situation de handicap</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024  MathildaLearning. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

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
          <h2>MathildaIA</h2>
          <address>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://www.google.com/maps/search/?api=1&query=128+rue+la+Boétie,+Paris,+75008" target="_blank" rel="noopener noreferrer">128 rue la Boétie, Paris, 75008</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@mister-ia.com">contact@mister-ia.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /><a href="tel:+33 7 66 14 52 38">+33 7 66 14 52 38</a> 
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </p>
          </address>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <a href="/formation"><li>Formations IA</li></a>
            <a href="/audit"><li>Audit & conseil</li></a>
            <a href="/cof"><li>Conférences</li></a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <ul>
            <a href="pdf/cgv.pdf" target='_blank'><li>CGV</li></a>
            <a href="pdf/cgv.pdf" target='_blank'><li>Mentions légales</li></a>
            <a href="pdf/cgv.pdf" target='_blank'><li>Politique de confidentialité</li></a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Autres</h3>
          <ul>
          <a href="pdf/reglement.pdf" target='_blank'><li>Règlement intérieur</li></a>
          <a href="pdf/cgv.pdf" target='_blank'><li>Attestation Qualiopi</li></a>
          <a href="pdf/cgv.pdf" target='_blank'><li>Annuaire personne en situation de handicap</li></a>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024  MathildaIA. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

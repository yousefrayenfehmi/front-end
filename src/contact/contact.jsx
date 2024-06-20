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
          <h2>Mathilda IA</h2>
          <address>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://www.google.fr/maps/place/Rue+de+saussure/@48.8873734,2.3146357,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f0078688c1b:0x173ae88e3b6bc42!8m2!3d48.8873734!4d2.3120608!16s%2Fg%2F11vq3vfx2w?entry=ttu" target="_blank" rel="noopener noreferrer">158 RUE DE SAUSSURE 75017 PARIS</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="">contact@Mathilda_IA.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /><a href="tel:08 92 97 61 48">08 92 97 61 48</a> 
            </p>
          </address>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <a href="/formation"><li>Formations IA</li></a>
            <a href="/audit"><li>Audit & intègration</li></a>
            <a href="/cof"><li>Conférences</li></a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <ul>
            <a href="pdf/CGV_Mathilda_IA.pdf" target='_blank'><li>CGV</li></a>
            <a href="pdf/dmention.pdf" target='_blank'><li>Mentions légales</li></a>
            <a href="pdf/politique.pdf" target='_blank'><li>Politique de confidentialité</li></a>
            <a href="pdf/reglement.pdf" target='_blank'><li>Règlement intérieur</li></a>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024  Mathilda IA. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

// src/ContactBanner.js
import React from 'react';
import './contactbanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="contact-text">
        <p className="call-us">Appelez-nous !</p>
        <a href="tel:+33 7 66 14 52 38"><p className="phone-number">+33 7 66 14 52 38</p></a>
      </div>
    </div>
  );
};

export default ContactBanner;

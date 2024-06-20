// src/ContactBanner.js
import React from 'react';
import './contactbanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="contact-text">
        <p className="call-us">Appelez-nous !</p>
        <a href="tel:08 92 97 61 48"><p className="phone-number">08 92 97 61 48</p></a>
      </div>
    </div>
  );
};

export default ContactBanner;

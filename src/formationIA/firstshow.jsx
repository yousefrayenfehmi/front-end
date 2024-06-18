// src/HomePage.js
import React from 'react';
import './firstshow.css'; // We'll create this CSS file next
import backgroundImage from '../../public/img/formation.jpg'; // Assurez-vous que l'image est placée correctement dans le répertoire src
import ContactBanner from './contactbanner';
const Firstshow = () => {
    return (
        <div>
        <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
          
          <main className="main-content">
            <h1>LA FORMATION EN LIGNE ET PRESENTIELLE AVEC WALTER LEARNING</h1>
            <p className="description">
              Experts de la formation en ligne et presentielle, nous vous accompagnons dans le développement de vos compétences professionnelles
            </p>
            <ul className="features">
              <li>Des formateurs experts spécialistes de leur discipline</li>
              <li>Suivez votre formation continue où vous voulez, quand vous voulez, à votre rythme</li>
              <li>Un accompagnement au financement : CPF, Pôle emploi, OPCO, paiement en plusieurs fois</li>
            </ul>
            <div className="buttons">
             <a href="#section-title"> <button className="btn">NOS FORMATIONS</button></a>
             <div className="header">
            <ContactBanner />
          </div>
            </div>
          </main>
        </div>
        </div>
      );


    };
    
  

export default Firstshow;

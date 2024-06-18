import React from 'react';
import './firstshow.css'; // Import du fichier CSS pour d'autres styles si nécessaire
import backgroundImage from '../../public/img/formation.jpg'; // Assurez-vous que l'image est correctement importée
import ContactBanner from './contactbanner';
import CheckIcon from '@mui/icons-material/Check';
const Firstshow = () => {
  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <main className="main-content">
          <h1 style={{ textAlign: 'left' }}>LA FORMATION EN LIGNE AVEC MATHILDAIA</h1>
          <p className="description" style={{ textAlign: 'left' }}>
            Experts de la formation en ligne, nous vous accompagnons dans le développement de vos compétences professionnelles
          </p>
          <ul className="features" style={{ textAlign: 'left' }}>
            <li>{<CheckIcon/>}Des formations professionnelles 100% en ligne</li>
            <li>{<CheckIcon/>}Des formateurs experts spécialistes de leur discipline</li>
            <li>{<CheckIcon/>}Suivez votre formation continue où vous voulez, quand vous voulez, à votre rythme</li>
            <li>{<CheckIcon/>}Un accompagnement au financement : CPF, Pôle emploi, OPCO, paiement en plusieurs fois</li>
          </ul>
          <div className="buttons">
            <a href="#section-title"><button className="btn">NOS FORMATIONS</button></a>
          </div>
        </main>
        <div className="header">
          <ContactBanner />
        </div>
      </div>
    </div>
  );
};

export default Firstshow;

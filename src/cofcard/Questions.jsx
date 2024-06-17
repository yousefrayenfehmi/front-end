import React from 'react';
import './Question.css';

const FAQ = () => {
  return (
    <div className="faq-details-container">
      <div className="faq-details-left">
        <h2>FAQ : <span className="highlight">Questions</span> fréquentes sur l’IA</h2>
        <p>Découvrez toutes les réponses aux questions relatives à nos offres de conférence.</p>
        <a href="mailto:contact@mister-ia.com"><button className="contact-button">Une question ? Contactez-nous <span className="email-icon">✉️</span></button></a>
      </div>
      <div className="faq-details-right">
        <details>
          <summary>Qu'est-ce qu'une conférence d'acculturation à l'IA ?</summary>
          <p>Une conférence d'acculturation à l'IA permet de sensibiliser et d'informer sur les bases de l'intelligence artificielle, ses applications et ses impacts.</p>
        </details>
        <details>
          <summary>À qui s'adressent nos conférences ?</summary>
          <p>Nos conférences s'adressent à tous les professionnels souhaitant comprendre et intégrer l'IA dans leurs activités, du novice au spécialiste.</p>
        </details>
        <details>
          <summary>Quels thèmes sont abordés lors des conférences ?</summary>
          <p>Nous abordons des thèmes variés comme l'IA générative, la productivité, la sécurité des données, et les enjeux éthiques et réglementaires.</p>
        </details>
        <details>
          <summary>Comment se déroulent vos conférences ?</summary>
          <p>Nos conférences sont interactives et incluent des présentations, des discussions, des études de cas, et des sessions de questions-réponses.</p>
        </details>
        <details>
          <summary>Pourquoi choisir Mister IA pour vos conférences ?</summary>
          <p>Mister IA propose des conférences animées par des experts de l'IA, avec des contenus adaptés à vos besoins et des exemples concrets pour une meilleure compréhension.</p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;

import React from 'react';
import '../cofcard/Question.css';

const FAQ = () => {
    const faqs = [
        {
          question: "Quels sont les principaux risques de l'intelligence artificielle ?",
          answer: "Les principaux risques de l'intelligence artificielle incluent les biais algorithmiques, les atteintes à la vie privée, l'impact sur l'emploi, et les décisions automatisées sans supervision humaine."
        },
        {
          question: "Quels domaines sont concernés par l'intelligence artificielle ?",
          answer: "L'intelligence artificielle concerne de nombreux domaines comme la santé, la finance, les transports, l'éducation, le service client, et bien d'autres."
        },
        {
          question: "Quel est le pays le plus avancé en intelligence artificielle ?",
          answer: "Les États-Unis et la Chine sont souvent considérés comme les pays les plus avancés en intelligence artificielle en raison de leurs investissements massifs et de leur écosystème technologique dynamique."
        },
        {
          question: "Comment parler à une intelligence artificielle générative ?",
          answer: "Pour parler à une intelligence artificielle générative, il est important de formuler des questions claires et précises, d'utiliser un langage naturel et de fournir autant de contexte que possible."
        },
        {
          question: "Comment rendre l'IA éthique ?",
          answer: "Pour rendre l'IA éthique, il faut intégrer des principes comme la transparence, l'équité, la responsabilité, et la protection de la vie privée dès la conception des systèmes d'IA."
        },
        {
          question: "Quel impact à l'IA en entreprise ?",
          answer: "L'IA peut améliorer l'efficacité opérationnelle, réduire les coûts, personnaliser les services clients, et offrir des insights prédictifs pour la prise de décision stratégique en entreprise."
        },
        {
          question: "Quelles entreprises utilisent l'IA aujourd'hui ?",
          answer: "De nombreuses entreprises utilisent l'IA aujourd'hui, notamment Google, Amazon, Microsoft, Facebook, IBM, et des startups innovantes dans divers secteurs."
        },
      ];
  return (
    <div className="faq-details-container">
      <div className="faq-details-left">
        <h2>FAQ : <span className="highlight">Questions</span> fréquentes sur l’IA</h2>
        <p>Découvrez toutes les réponses aux questions relatives à nos offres de conférence.</p>
        <a href="mailto:contact@mister-ia.com"><button className="contact-button">Une question ? Contactez-nous <span className="email-icon">✉️</span></button></a>
      </div>
      <div className="faq-details-right">
      {faqs.map((faq, index) => (
        <details key={index}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
        
      </div>
    </div>
  );
};

export default FAQ;

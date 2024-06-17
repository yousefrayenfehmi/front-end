// ImageWithCards.js
import React from 'react';
import Card from './cards';
import './ImageWithCards.css';

const ImageWithCards = ({ imgSrc, imgAlt, cards }) => {
  return (
    <div className="image-with-cards">
      <img src={imgSrc} alt={imgAlt} className="background-image" />
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default ImageWithCards;

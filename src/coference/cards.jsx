import React from 'react';
import { useInView } from 'react-intersection-observer';
import './cards.css';

const Card = ({ title, content }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`card ${inView ? 'animated-card' : ''}`}>
      <div className="card-header">
        <span className="bullet-point">•</span>
        <h2>{title}</h2>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Card;

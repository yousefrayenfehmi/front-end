import React from 'react';
import { useInView } from 'react-intersection-observer';
import './etape.css';

const TimelineStep = ({ stepNumber, title, description, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`timeline-step ${inView ? 'animated' : ''}`}>
      <div className="timeline-content">
        <h3>etape {stepNumber}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <img src={image}  alt={title} />
    </div>
  );
};

const Timeline = ({ steps }) => (
  <div className="timeline">
    {steps.map((step, index) => (
      <TimelineStep
        key={index}
        stepNumber={index + 1}
        title={step.title}
        description={step.description}
        image={step.image}
      />
    ))}
  </div>
);

export default Timeline;

import React from 'react';
import './AnimatedShapes.css';

const AnimatedShapes: React.FC = () => {
  return (
    <div className="shapes-container">
      <div className="shape circle"></div>
      <div className="shape circle circle2"></div>
      <div className="shape square"></div>
      <div className="shape square square2"></div>
      <div className="shape triangle"></div>
      <div className="shape triangle triangle2"></div>
      <div className="shape rectangle"></div>
      <div className="shape diamond"></div>
    </div>
  );
};

export default AnimatedShapes; 
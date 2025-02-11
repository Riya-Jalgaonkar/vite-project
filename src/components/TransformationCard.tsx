import React from 'react';
import '../styles/cards.css';

interface CardProps {
  image: string;
  name: string;
  message: string;
}

const TransformationCard: React.FC<CardProps> = ({ image, name, message }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={`${name}'s picture`} />
      </div>
      <h3 className="name">{name}</h3>
      <p className="message">“{message}”</p>
    </div>
  );
};

export default TransformationCard;

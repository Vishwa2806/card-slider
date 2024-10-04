import React from 'react';
import './App.css';
import datas from './data.json'; 
const Card = ({ title, description, rating, percentage,category }) => {
  return (
    <div className="card">
      <div className="badge">
      </div>
      <small>{category}</small>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="ratings">
        <span className="star">★</span> {rating}
        <span className="percentage">✔ {percentage}%</span>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="container">
      {datas.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          rating={card.rating} 
          percentage={card.percentage} 
          category={card.category} 
        />
      ))}
    </div>
  );
};

export default CardContainer;


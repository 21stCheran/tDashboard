import React from 'react';
import './Card.css';

const Card = ({ title, value, icon, color }) => {
    return (
        <div className="card" style={{ borderColor: color }}>
            <div className="card-icon" style={{ backgroundColor: color }}>
                <img src={icon} alt={title} />
            </div>
            <div className="card-content">
                <h3>{value}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import redLogo from '/src/images/red-logo.png';

const Card = () => {
    return (
        <div className="small-grid">
                <div className="card-icon">
                    <img src={redLogo} alt="Red Logo" className="logo" />
                </div>
                <div className="card-content">
                    <h2 className="card-title">Title</h2>
                    <p className="card-description">This is a description text in grey color.</p>
                </div>
        </div>
    );
};

export default Card;
// src/components/StatCard/StatCard.jsx
import React from 'react';

const StatCard = ({ value, label }) => {
    return (
        <div className="card text-center p-3">
            <h5>{value}</h5>
            <p className="text-muted">{label}</p>
        </div>
    );
};

export default StatCard;

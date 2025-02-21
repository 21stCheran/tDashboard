import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <button className="header-button">View</button>
            <button className="add-ticket-button">+ Add Ticket</button>
        </div>
    );
};

export default Header;

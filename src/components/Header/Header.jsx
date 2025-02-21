import React from "react";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header-container">
            {/* First Row */}
            <div className="header-row first-row">
                <FaTimes className="close-icon thin-icon" />
            </div>

            {/* Gray Line */}
            <hr className="divider" />

            {/* Second Row */}
            <div className="header-row second-row">
                {/* Left Side */}
                <button className="view-button">
                    <FaBars className="options-icon" /> View
                </button>

                {/* Right Side */}
                <div className="right-buttons">

                    <button className="append-bonus-button">Append, take off bonus</button>
                    <button className="add-ticket-button">+ Add Ticket</button>

                </div>
            </div>
            <hr className="divider"></hr>
        </div>
    );
};

export default Header;

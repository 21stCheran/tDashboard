import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="user-details">
                <img src="user-image.png" alt="Driver" className="user-image" />
                <h3>Driver</h3>
                <p>Standard</p>
                <p>Rating: 5.0 | Experience: 1</p>
            </div>

            <div className="user-contact">
                <p>Contact: +91 9876543210</p>
                <p>Email: driver@roadpilot.co.in</p>
                <p>Address: India</p>
            </div>

            <div className="documents">
                <button>Aadhar Card Front</button>
                <button>Aadhar Card Back</button>
                <button>Driving License Front</button>
                <button>Driving License Back</button>
            </div>

            <div className="sidebar-actions">
                <button className="edit-button">Edit</button>
                <button className="suspend-button">Suspend</button>
            </div>
        </div>
    );
};

export default Sidebar;

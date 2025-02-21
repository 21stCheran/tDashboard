import React from "react";
import "./Sidebar.css";
import truckerLogo from '/src/images/trucker-logo.png';
import expLogo from '/src/images/exp-logo.png';
import ratingLogo from '/src/images/rating-logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            {/* Profile Section */}
            <div className="profile-section">
                <img
                    src={truckerLogo}
                    alt="Profile Logo"
                    className="profile-logo"
                />
                <h3 className="profile-title">Driver</h3>
                <span className="membership-tag">Standard</span>
            </div>

            {/* Rating and Experience Section */}
            <div className="stats-section">
                <div className="stat-item">
                    <img
                        src={ratingLogo}
                        alt="Rating Icon"
                        className="stat-icon"
                    />
                    <p className="stat-value">5.0</p>
                    <p className="stat-label">Rating</p>
                </div>
                <div className="stat-item">
                    <img
                        src={expLogo}
                        alt="Experience Icon"
                        className="stat-icon"
                    />
                    <p className="stat-value">1</p>
                    <p className="stat-label">Experience</p>
                </div>
            </div>

            {/* Details Section */}
            <div className="details-section">
                <h4 className="section-title">Details</h4>
                <hr className="divider"></hr>
                <p>Contact: +91 9876543210</p>
                <p>Email: driver@roadpilot.co.in</p>
                <p>Membership: Standard</p>
                <p>Address: India</p>
            </div>

            {/* Documents Section */}
            <div className="documents-section">
                <h4 className="section-title">Documents</h4>
                <hr className="divider"></hr>
                <div className="document-tags">
                    <span className="document-tag green">Aadhar Card Front</span>
                    <span className="document-tag orange">Aadhar Card Back</span>
                    <span className="document-tag blue">Driving License Front</span>
                    <span className="document-tag">Character</span>
                    <span className="document-tag red">Driving License Back</span>
                    <span className="document-tag dark-blue">Insurance</span>
                </div>
                <button className="verify-button">Verified</button>
            </div>

            {/* Actions Section */}
            <div className="actions-section">
                <button className="edit-button">Edit</button>
                <button className="suspend-button">Suspend</button>
            </div>
        </div>
    );
};

export default Sidebar;

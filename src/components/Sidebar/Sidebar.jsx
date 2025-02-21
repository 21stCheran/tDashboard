// src/components/Sidebar/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-light p-3 h-100">
            <h5>Documents</h5>
            <button className="btn btn-outline-primary w-100 mb-2">Aadhar Card Front</button>
            <button className="btn btn-outline-primary w-100 mb-2">Aadhar Card Back</button>
            <button className="btn btn-outline-primary w-100 mb-2">Driving License Front</button>
            <button className="btn btn-outline-primary w-100 mb-2">Driving License Back</button>
            <button className="btn btn-outline-success w-100 mb-2">Verified</button>
            <div className="mt-3">
                <button className="btn btn-primary w-100 mb-2">Edit</button>
                <button className="btn btn-danger w-100">Suspend</button>
            </div>
        </div>
    );
};

export default Sidebar;

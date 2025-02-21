import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Card from "./components/Card/Card.jsx";

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <div className="main">
                    <div className="cards">
                        <Card title="Jobs Applied" value="1,250" icon="icon1.png" color="#f00" />
                        <Card title="Jobs Accepted" value="12" icon="icon2.png" color="#0f0" />
                        {/* Add more cards here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App

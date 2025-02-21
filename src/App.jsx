// App.jsx
import './App.css';
import Header from "./components/Header/Header.jsx";
import Map from './components/Map/Map.jsx';
import Timeline from './components/Timeline/Timeline.jsx';
import TopTimeline from './components/TopTimeline/TopTimeline.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx'
//import SmallGrid from "./components/Card/SmallGrid.jsx";
import redLogo from '/src/images/red-logo.png';
import greenLogo from '/src/images/green-logo.png';
import purpleLogo from '/src/images/purple-logo.png';
import blueLogo from '/src/images/blue-logo.png';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="main-body">
                {/* Left Sidebar */}
                <div className="left-sidebar">
                    <Sidebar />
                </div>

                {/* Center Grid */}
                <div className="center-grid">
                    {/* Group Grid */}
                    <div className="group-grid">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="small-grid">
                                <div className="card-icon">
                                    <img src={redLogo} alt="Red Logo" className="logo" />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-title">12</h2>
                                    <p className="card-description">This is a description text in grey color.</p>
                                </div>
                            </div>
                        ))}
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="small-grid">
                                <div className="card-icon">
                                    <img src={purpleLogo} alt="Red Logo" className="logo" />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-title">12</h2>
                                    <p className="card-description">This is a description text in grey color.</p>
                                </div></div>
                        ))}{Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="small-grid">
                                <div className="card-icon">
                                    <img src={greenLogo} alt="Red Logo" className="logo" />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-title">12</h2>
                                    <p className="card-description">This is a description text in grey color.</p>
                                </div></div>
                        ))}{Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="small-grid">
                                <div className="card-icon">
                                    <img src={blueLogo} alt="Red Logo" className="logo" />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-title">12</h2>
                                    <p className="card-description">This is a description text in grey color.</p>
                                </div></div>
                        ))}
                    </div>

                    {/* Center Nested Grids */}
                    <div className="center-nested-grid">
                        <div className="top-timeline-grid">
                            <TopTimeline />
                        </div>
                        <div className="location-grid">
                            <div className="card-title">Last Location</div>
                            <Map coordinates={[11.2588, 75.7804]} />
                        </div>
                    </div>

                    {/* Timeline Grid */}
                    <div className="activity-timeline-grid">
                        <Timeline /></div>
                </div>
            </div>
        </div>
    );
};

export default App;
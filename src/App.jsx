// App.jsx
import './App.css';
import Header from "./components/Header/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="main-body">
                {/* Left Sidebar */}
                <div className="left-sidebar"></div>

                {/* Center Grid */}
                <div className="center-grid">
                    {/* Group Grid */}
                    <div className="group-grid">
                        {Array.from({ length: 16 }).map((_, index) => (
                            <div key={index} className="small-grid"></div>
                        ))}
                    </div>

                    {/* Center Nested Grids */}
                    <div className="center-nested-grid">
                        <div className="top-timeline-grid"></div>
                        <div className="location-grid"></div>
                    </div>

                    {/* Timeline Grid */}
                    <div className="activity-timeline-grid"></div>
                </div>
            </div>
        </div>
    );
};

export default App;
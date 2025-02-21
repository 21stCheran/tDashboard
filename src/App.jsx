import './App.css';
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import StatCard from "./components/StatCard/StatCard.jsx";
import Timeline from "./components/Timeline/Timeline.jsx";
import TopTimelineChart from "./components/Chart/TopTimelineChart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <Header />
            
        </div>
    );
};

export default App;

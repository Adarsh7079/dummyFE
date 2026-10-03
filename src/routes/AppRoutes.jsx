
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GolfHills from '../pages/ProjectPages/M3M/GolfHills';
import About from '../pages/About';
import M3MIndia from '../pages/BuilderPages/M3MIndia';
import ProjectDetails from '../pages/ProjectDetails';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/m3m/golfhills" element={<GolfHills />} />
                <Route path="/about" element={<About/>} />
                <Route path="/m3mIndia" element={<M3MIndia/>} />
                <Route path="/projects" element={<ProjectDetails />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

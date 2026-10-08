
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GolfHills from '../pages/ProjectPages/M3M/GolfHills';
import About from '../pages/About';
import M3MIndia from '../pages/BuilderPages/M3MIndia';
import ProjectDetails from '../pages/ProjectDetails';
import Altitude from '../pages/ProjectPages/M3M/alltitude/Alltitude';
import Mansion from '../pages/ProjectPages/M3M/mansion/Mansion';
import TheArbour from '../pages/ProjectPages/dlf/thearbour/Thearbour';
import UrbanResort from '../pages/ProjectPages/whiteland/urbanresort/Urbanresort';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/m3m/golfhills" element={<GolfHills />} />
                <Route path="/about" element={<About/>} />
                <Route path="/m3mIndia" element={<M3MIndia/>} />
                <Route path="/projects" element={<ProjectDetails />} />
                <Route path='/m3m/golfhills' element={<GolfHills/>} />
                <Route path='/m3m/alltitude' element={<Altitude/>} />
                <Route path='/m3m/mansion' element={<Mansion/>} />
                <Route path='/dlf/the-arbour' element={<TheArbour/>} />
                <Route path='/whiteland/urban-resort' element={<UrbanResort/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

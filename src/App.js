import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Agents from "./Components/Agentes/Agents";
import './App.css';
import Navbar from "./Components/Navbar";
import AgentDescription from "./Components/Agentes/AgentDescription";
import Weapons from "./Components/Weapons/Weapons";
import Maps from "./Components/Mapas/Maps";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Agentes" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentDescription />} />
          <Route path="/Armas" element={<Weapons />} />
          <Route path="/Mapas" element={<Maps />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

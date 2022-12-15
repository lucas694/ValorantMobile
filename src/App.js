import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Agents from "./Components/Agents";
import './App.css';
import Navbar from "./Components/Navbar";
import AgentDescription from "./Components/AgentDescription";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Agentes" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentDescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

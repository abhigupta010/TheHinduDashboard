import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import NavRoutes from "./routes";

function App() {
  return (
    <>
      <Router>
      <nav className="navbar">
    <div className="logo">
      <h3><Link to="/">THE HINDU</Link></h3>
      <p><Link to="/">Dashboard</Link></p>
      </div>
    <ul className="nav-links">
      <div className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </div>
    </ul>
  </nav>
      <NavRoutes/>
  </Router>
    </>
  );
}
export default App;

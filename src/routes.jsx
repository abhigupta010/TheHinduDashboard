import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import About from './Components/About/index';
// import ContactUs from "./Components/ContactUs/index";
// import Home from "./Components/Home/index";
import './App.css';
// import Services from "./Components/Services";
// import Header from "./Components/Header";

function NavRoutes() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <div className="flex">
          <nav>
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/services">Services</Link>
            <Link className="navLink" to="/contact">Contact</Link>
            <Link className="navLink" to="/about">About</Link>
            <div className="animation-start-home"></div>
          </nav>
          <Routes>
            <Route exact path='/' element=""></Route>
            <Route path='/about' element=""></Route>
            <Route path='/contact' element=""></Route>
            <Route path='/services' element=""></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default NavRoutes;

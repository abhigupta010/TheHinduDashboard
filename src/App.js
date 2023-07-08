import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom
// import About from './Components/About/index';
// import ContactUs from "./Components/ContactUs/index";
// import Home from "./Components/Home/index";
import './App.css';
import NavRoutes from './routes.jsx';
// import Services from "./Components/Services";
// import Header from "./Components/Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <NavRoutes/>
    </>
  );
}
export default App;

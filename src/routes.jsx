import React from "react";
import {Routes, Route } from 'react-router-dom';
import './App.css';

function NavRoutes() {
  return (
    <>
          <Routes>
            <Route exact path='/' element=""></Route>
            <Route path='/about' element=""></Route>
            <Route path='/contact' element=""></Route>
            <Route path='/services' element=""></Route>
          </Routes>
    </>
  );
}
export default NavRoutes;

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";

function App() {
  return (

      <BrowserRouter> 
      
    <div>
      <Navbar/>
      <Route path ="/Home" component = {Home}/>
      <Route path ="/About" component = {About}/>
      <Route path ="/Contact" component = {Contact}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

// eslint-disable-next-line
import logo from './logo.svg';
import './Sass/main.css'
import React, { Component } from 'react';
// eslint-disable-next-line
import { Routes, Route, Link } from 'react-router-dom';
import Links from './Links/Links';
import Home from './Commoncmp/Home';
import About from './Commoncmp/About';
import Services from './Commoncmp/Services';
class App extends Component {
  state = {  } 
  render() { 
    return(
      <div className="App">
        <>
        <Links/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        </>      
      </div>
      )
    };
  }
 
export default App;


import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Aboutme from './components/Aboutme';
import Resume from './components/Resume';
import { render } from '@testing-library/react';

 function App () {
   render()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Projects' element={<Projects/>} />
      <Route exact path='/Aboutme' element={<Aboutme/>} />
      <Route exact path='/Resume' element={<Resume/>} />
      <Route exact path='/Contact' element={<Contact/>} />  
      </Routes>
    </BrowserRouter>
  );
}
export default App;
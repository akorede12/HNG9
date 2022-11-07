import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Tester from './pages/Tester';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />} />
      <Route path="/tester" element={<Tester/>}/>
    </Routes>
  </BrowserRouter>
);

}

export default App;

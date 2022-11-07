import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

}

export default App;

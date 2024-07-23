import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<Aboutus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
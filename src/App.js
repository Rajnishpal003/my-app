// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Ensure Navbar is correctly exported
import Home from './pages/home';           // Default export
import { Workouts } from './pages/Workouts';  // Named export


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        {/* Add other routes similarly */}
      </Routes>
    </Router>
  );
}

export default App;

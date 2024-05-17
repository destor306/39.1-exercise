import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Soda from './soda';
import Sardine from './sardines';
import Chip from './chips';
import VendingMachine from './VendingMachine';
import Home from './Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />

          <Route path="/soda" element={<Soda />} />
          <Route path="/chip" element={<Chip />} />
          <Route path="/sardine" element={<Sardine/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

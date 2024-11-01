import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Registeruser from './pages/Registeruser';

import Categories2 from './pages/Categories2';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>} /> 
      <Route path="/Products" element={<Products />} />  
         <Route path="/home" element={<Homepage />} />   
        <Route path="/login" element={<Login />} /> 
        <Route path="/registers" element={<Registeruser />} /> 
        <Route path="/categories" element={<Categories2 />} /> 
   
        
  
      </Routes>
    </Router>
  );
}

export default App;

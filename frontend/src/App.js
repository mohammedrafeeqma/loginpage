import './App.css';
import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

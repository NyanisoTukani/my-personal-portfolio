import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,  Routes } from 'react-router-dom';
import Home from './Pages/Home/HomeScreen';
import NavBar from './Pages/Home/NavBar';
import MyPortFolio from './Pages/Home/MyPortfolio';
import AboutMe from './Pages/Home/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/" element={<MyPortFolio/>}></Route>
              <Route path="/" element={<AboutMe/>}></Route>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

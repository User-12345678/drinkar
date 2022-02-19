import React from 'react';
import Header from './features/Header/Header';
import MainPage from './features/MainPage/MainPage';
import Sprits from './features/Spirits/Spirits';
import Shots from "./features/Shots/Shots";
import Syrup from "./features/Syrup/Syrup";
import './App.css';
import {BrowserRouter as Router,
  Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
                <Route path="/" element={<MainPage/>} />  
                <Route path="/syrup" element={<Syrup/>}/>  
                <Route path="/shots" element={<Shots/>}/>
        </Routes>
      </Router>
    
    <Sprits />
    </div>

  );
}

export default App;

import React from 'react';
import Header from './features/Header/Header';
import MainPage from './features/MainPage/MainPage';
import Sprits from './features/Spirits/Spirits';
import Shots from "./components/Shots/Shots";
import Syrups from "./components/Syrups/Syrups";
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
                <Route path="/syrups" element={<Syrups/>}/>  
                <Route path="/shots" element={<Shots/>}/>
        </Routes>
      </Router>
    
    <Sprits />
    </div>

  );
}

export default App;

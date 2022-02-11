import React from 'react';
import Header from './features/Header/Header';
import MainPage from './features/MainPage/MainPage';
import Sprits from './features/Spirits/Spirits';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Header />
    <Sprits />
    <MainPage />
    </div>

  );
}

export default App;

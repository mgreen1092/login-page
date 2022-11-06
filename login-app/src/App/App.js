import './App.css';
import React from 'react'
import Login from '../Login/login'
import Help from '../Help/help'
// import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='help'>
        <Login />
        <Help />
      </div>
    </div>
  );
}

export default App;

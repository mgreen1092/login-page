import './App.css';
import React from 'react'
import Login from '../Login/login'
import Help from '../Help/help'
import {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from '../Home/home';
import Main from '../Main/main'
// import { Route, Routes, Link } from 'react-router-dom'
//useState is a hook - allows you to 

function App() {
  //not sure to put the const in App or login??
  return (
    <div className="App">
        <Routes>
          <Route path='/' element = { <Main />}></Route>
          <Route path='/home' element = { <Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;

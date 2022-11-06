import './App.css';
import React from 'react'
import Login from '../Login/login'
import Help from '../Help/help'
import {useState} from 'react'
// import { Route, Routes, Link } from 'react-router-dom'
//useState is a hook - allows you to 

function App() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  //not sure to put the const in App or login??
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

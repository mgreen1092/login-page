import React from 'react'
import Login from '../Login/login'
import Help from '../Help/help'
import './main.css'

const Main = () => {
    return (
        <div className='Login-Container'>
            <Login />
            <Help />
        </div>
    )
}
export default Main
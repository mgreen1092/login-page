import React from 'react'
import Home from '../Home/home'
import { Route, Routes, Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className = 'Email-password'>
                <input type='text' name='email' placeholder='Email' />
                <input type='text' name='password' placeholder='Password' />
                <Link to={'/home'}>
                    <button>Login</button>
                </Link>
                <main>
                    <Routes>
                        <Route path='/home' element = { <Home />} />
                    </Routes>
                </main>
            </div>
            <div className = 'App-register'>
                <a href='#' >Forgot my password</a>
                {/* <Link to={'/forgot-password'}>Forgot my password</Link> */}
                <a href='#' >Sign Up </a>
                <p>© 2019 A Company</p>
            </div>
        </div>
    )
}

export default Login

//Email conditions:

//If email has text but no @ or '.':
//"Email should contain an '@' symbol."
//"Email should contain at least one dot."

//If click on email and value is empty:
//"Must provide an email"
//"Email should contain an '@' symbol."
//"Email should contain at least one dot."


//Password Conditions:
//If you click password then click out and text is empty
//"Must provide a password"

//If start typing in password and it's less than 8 characters
//"Password must be at least 8 characters long"
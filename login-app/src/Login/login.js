import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Conditions } from '../Conditions/conditions'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [p, setP] = useState({
        at: '',
        dot: '',
        empty: ''
    })
    const handleEmail = (event) => {
        console.log(event.target.value)
        setEmail (event.target.value)
    
    }
    const handleBlur = () => {
        console.log('focus')
        console.log(email)
        setP({
           at: email.includes('@')? "" : "Email should contain an '@' symbol.",
           dot: email.includes('.')? "" : "Email should contain at least one dot.",
           empty: email === ''?  "Must provide an email." : "",
        })
    }
    const handlePassword = (event) => {
        console.log(event.target.value)
        setPassword (event.target.value)
    }
    return (
        <div className = 'Login'>
            <div className = 'Logo'>
                <img className='Image' src='https://media.git.generalassemb.ly/user/21811/files/546c2880-af58-11ec-917c-d9bd1e9dbecd'></img>
            </div>
            <div className = 'Email-password'>
                <input className = 'Email' type='text' name='email' value={email} placeholder='Email' onChange = {handleEmail} onBlur = {handleBlur}/>
                {p.empty ? <p>{p.empty}</p> : ""}
                {p.at ? <p>{p.at}</p> : ""}
                {p.dot ? <p>{p.dot}</p> : ""}
                <input className = 'Password' type='password' name='password' value={password} placeholder='Password' onChange = {handlePassword} />
                <Link to={'/home'}>
                    <button className = 'Login-button'>Login</button>
                </Link>
                <main>
                    <Link to={'/home'} />

                </main>
            </div>
            <div className = 'App-register'>
                <div className = 'Forgot-signup'>
                    <a className='Forgot' href='#' >Forgot my password</a>
                    <p className='Separator'> | </p>
                    {/* <Link to={'/#'}>Forgot my password</Link> */}
                    <a className = 'Sign-Up' href='#' >Sign Up </a>
                    {/* <Link to={'/#'}>Sign Up</Link> */}
                    <p className = 'Copyright'>© 2019 A Company</p>
                </div>
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
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" className="login__logo"/>
                
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE FOR WEB DEV PURPOSES Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notices and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton'>Create your Amazon A ccount</button>
            </div>
        </div>
    )
}

export default Login
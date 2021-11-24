import React from 'react'

import classes from '../assets/styles/views/auth.module.css';

import logo from '../assets/images/GoogleLogo.svg';

const Login = () => {
    return (
        <div className={classes.body}>
            <div className={classes.form__container}>
                <h3>GooLnk Login</h3>
                <div className={classes.form__google}>
                    <img src={logo} />
                    <p>Login with Google</p>
                </div>
                <form className={classes.form} autocomplete="off">
                    <input type="text" name="email" placeholder="Enter Your Email..." autoComplete={`false`} />
                    <input type="password" name="password" placeholder="Enter Your Password..." />
                    <button type="submit" onClick={e => e.preventDefault()}>Submit</button>
                </form>
                <p className={classes.options}>Don't have an account? <span>Register</span></p>
            </div>
        </div>
    )
}

export default Login

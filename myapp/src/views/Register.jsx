import React from 'react'

import classes from '../assets/styles/views/auth.module.css';


import logo from '../assets/images/GoogleLogo.svg';


const Register = () => {
    return (
        <div className={classes.body}>
            <div className={classes.form__container}>
                <h3>GooLnk Registration</h3>
                <div className={classes.form__google}>
                    <img src={logo} />
                    <p>Login with Google</p>
                </div>
                <form className={classes.form} autocomplete="off">
                    <input type="text" name="username" placeholder="Enter Username" />
                    <input type="text" name="email" placeholder="Enter Your Email..." autoComplete={`false`} />
                    <input type="password" name="password" placeholder="Enter Your Password..." />
                    <input type="password"  name="confirm" placeholder="Confirm Password..." />
                    <button type="submit" onClick={e => e.preventDefault()}>Submit</button>
                </form>
                <p className={classes.options}>Already have an Account? <span>Login</span></p>
            </div>
        </div>
    )
}

export default Register

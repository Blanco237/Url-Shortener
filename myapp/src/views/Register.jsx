import React, { useState } from 'react'

import classes from '../assets/styles/views/auth.module.css';


import logo from '../assets/images/GoogleLogo.svg';
import { createUser,googleSignIn } from '../firebaseUtils';


const Register = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function checkValidEntry(){
        if(email.length<0 || password.length<0){
            return false;
        }
        if(!checkPasswords()){
            return false;
        }
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return regex.test(email);
    }

    function checkPasswords(){
        return password==confirm;
    }

    function register(){
        if(!checkValidEntry()){
            alert("Please Enter Data Correctly");
            setEmail("");
            setPassword("");
            setConfirm("");
            return;
        }
        createUser(email,password);
    }

    function loginWithGoogle(){
        let size = window.innerWidth;
        let state = size<600? 'mobile' : 'desktop';
        googleSignIn(state);
    }

    return (
        <div className={classes.body}>
            <div className={classes.form__container}>
                <h3>GooLnk Registration</h3>
                <div className={classes.form__google} onClick={loginWithGoogle}>
                    <img src={logo} />
                    <p>Login with Google</p>
                </div>
                <form className={classes.form} autocomplete="off">
                    <input type="text" name="username" placeholder="Enter Username" />
                    <input type="text" name="email" placeholder="Enter Your Email..." autoComplete={`false`} />
                    <input type="password" name="password" placeholder="Enter Your Password..." />
                    <input type="password"  name="confirm" placeholder="Confirm Password..." />
                    <button type="submit" onClick={register}>Submit</button>
                </form>
                <p className={classes.options}>Already have an Account? <span>Login</span></p>
            </div>
        </div>
    )
}

export default Register

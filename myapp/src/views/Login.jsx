import React,{ useState } from 'react'

import classes from '../assets/styles/views/auth.module.css';

import logo from '../assets/images/GoogleLogo.svg';
import { googleSignIn, signIn } from '../firebaseUtils';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function checkValidEntry(){
        if(email.length<0 || password.length<0){
            return false;
        }
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return regex.test(email);
    }

    function loginUser(){
        if(!checkValidEntry()){
            alert("Please Enter Data Correctly");
            setEmail("");
            setPassword("");
            return;
        }
        signIn(email,password);
    }

    function loginWithGoogle(){
        let size = window.innerWidth;
        let state = size<600? 'mobile' : 'desktop';
        googleSignIn(state);
    }

    return (
        <div className={classes.body}>
            <div className={classes.form__container}>
                <h3>GooLnk Login</h3>
                <div className={classes.form__google} onClick={loginWithGoogle}>
                    <img src={logo} />
                    <p>Login with Google</p>
                </div>
                <form className={classes.form} autocomplete="off">
                    <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Enter Your Email..." autoComplete={`false`} />
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Your Password..." />
                    <button type="submit" onClick={loginUser}>Submit</button>
                </form>
                <p className={classes.options}>Don't have an account? <span>Register</span></p>
            </div>
        </div>
    )
}

export default Login

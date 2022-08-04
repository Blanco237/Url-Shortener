import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'

import classes from "../assets/styles/views/auth.module.css";

import logo from "../assets/images/GoogleLogo.svg";

import { loginUser } from '../apis/Auth'

import { AlertContext } from '../providers/AlertProvider';
import { LoadingContext } from '../providers/LoadingProvider';
import { UserContext } from '../providers/UserProvider';

const Login = () => {

  const { handleAlert } = useContext(AlertContext);
  const { handleLoading } = useContext(LoadingContext);
  const { updateUser } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (type) => {
    handleLoading(true);
    if(email.length<0 || password.length<0){
      handleAlert("Please fill all fields");
      handleLoading(false);
      return;
    }
    const data = {
      email, password
    }
    const res = await loginUser(data,type);
    if(res.error){
      handleAlert(res.error);
      handleLoading(false);
      return;
    }
    updateUser(res);
    redirect();
    handleLoading(false);
  }
  const redirect = () => {
    history.push('/');
  }

  return (
    <div className={classes.body}>
      <div className={classes.form__container}>
        <h3>GooLnk Login</h3>
        <div className={classes.form__google} onClick={() => handleSubmit('google')}>
          <img src={logo} />
          <p>Login with Google</p>
        </div>
        <form className={classes.form} autocomplete="off" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email..."
            autoComplete={`false`}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Your Password..."
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <p className={classes.options}>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

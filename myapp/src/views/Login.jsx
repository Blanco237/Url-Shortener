import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import classes from "../assets/styles/views/auth.module.css";

import logo from "../assets/images/GoogleLogo.svg";

import { loginUser } from '../apis/Auth'

const Login = () => {
//   const navigate = useNavigate();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (type) => {
    if(email.length<0 || password.length<0){
      alert("Please fill all fields");
    }
    const data = {
      email, password
    }
    await loginUser(data,type);
  }

  return (
    <div className={classes.body}>
      <div className={classes.form__container}>
        <h3>GooLnk Login</h3>
        <div className={classes.form__google} onClick={() => handleSubmit('google')}>
          <img src={logo} />
          <p>Login with Google</p>
        </div>
        <form className={classes.form} autocomplete="off">
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

import React, { useState, useContext, useEffect } from "react";

import classes from "../assets/styles/views/auth.module.css";

import logo from "../assets/images/GoogleLogo.svg";

import { register } from "../apis/Auth";

import { AlertContext } from "../providers/AlertProvider";
import { LoadingContext } from "../providers/LoadingProvider";
import { UserContext } from "../providers/UserProvider";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { handleAlert } = useContext(AlertContext);
  const { handleLoading } = useContext(LoadingContext);
  const { user, updateUser } = useContext(UserContext);

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    if(user) console.log(user);
  }, []);

  function checkValidEntry() {
    if (email.length < 0 || password.length < 0) {
      return false;
    }
    if (password !== confirm) {
      return false;
    }
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
  }

  const handleSubmit = async (type) => {
    handleLoading(true);
    if (type === "google") {
      const res = await register({}, type);
      console.log(res);
      if (res?.error) {
        handleLoading(false);
        handleAlert(res.error);
        return;
      }
      updateUser(res);
    } else {
      if (!checkValidEntry()) {
        handleLoading(false);
        handleAlert("Please Enter Data Correctly");
        setEmail("");
        setPassword("");
        setConfirm("");
        return;
      }
      const data = {
        username,
        email,
        phoneNumber,
        password,
      };
      const res = await register(data, type);
      if (res?.error) {
        handleLoading(false);
        handleAlert(res.error);
        return;
      }
      updateUser(res);
      history.push("/");
    }
    handleLoading(false);
  };

  return (
    <div className={classes.body}>
      <div className={classes.form__container}>
        <h3>GooLnk Registration</h3>
        <div
          className={classes.form__google}
          onClick={() => handleSubmit("google")}
        >
          <img src={logo} />
          <p>Login with Google</p>
        </div>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email..."
            autoComplete={`false`}
          />
          <input
            type="number"
            name="phone"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Phone Number..."
            autoComplete={`false`}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password..."
          />
          <input
            type="password"
            name="confirm"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm Password..."
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <p className={classes.options}>
          Already have an Account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

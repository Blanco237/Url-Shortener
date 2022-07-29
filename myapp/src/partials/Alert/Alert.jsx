import React from "react";

import styles from "./alert.module.css";

import { FaBan } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";

import { AlertContext } from "../../providers/AlertProvider";

const Alert = () => {
  const { alert, showAlert, closeAlert } = useContext(AlertContext);

  const [time, setTime] = useState(100);

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime(time - 0.5), 30);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    setTime(100);
    console.log(time);
  }, [showAlert]);

  useEffect(() => {
    if(time == 0){
        closeAlert();
    }
  }, [time]);

  const timerStyle = {
    "--width": `${time}%`,
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className={styles.body}>
      <span>
        <FaBan />
      </span>
      <p>{alert}</p>
      <span className={styles.timer} style={timerStyle}></span>
    </div>
  );
};

export default Alert;

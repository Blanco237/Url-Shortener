import React from "react";
import { useParams } from "react-router-dom";

import FaqItem from "../partials/FaqItem";
import classes from "../assets/styles/views/faq.module.css";

import data from "../faqs";
import { useCallback, useState, useEffect, useContext } from "react";
import axios from "axios";

import { AlertContext } from "../providers/AlertProvider";

const Faq = () => {
  const { short_url } = useParams();
  const { handleAlert } = useContext(AlertContext);
  const url = `https://randly-server.herokuapp.com/${short_url}`;
  const [number, setNumber] = useState(5);
  const [full, setFull] = useState('');

  const clickElem = (link) => {
    const a = document.createElement("a");
    a.href = "https://" + link;
    a.click();
  };

  const getFullUrl = useCallback(async () => {
    const result = await axios.get(url);
    if (result.data.error) {
      handleAlert(result.data.error);
      return;
    }
    let link = result.data.long_url;
    link = link.split("//")[1] || link.split("//")[0];
    setFull(link);
  }, [url]);

  useEffect(() => {
    if (short_url === undefined) return;
    if (number === 0){
        if(full){
            clickElem(full);
        }
        return;
    } 
    if (number === 5) {
      getFullUrl();
    }
    const interval = setInterval(() => {
      setNumber(number - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.body}>
      {short_url && (
        <div className={classes.loaderWrapper}>
          <h2>Your Page is Loading, Please Be Patient</h2>
          <button>Donate To Developer</button>
          <div className={classes.loaderBody}>
            <div className={classes.loader}>
              <p>{number}</p>
            </div>
          </div>
        </div>
      )}
      <div className={classes.faqs}>
        <h3>Frequently Asked Questions</h3>
        {data.map((item, index) => {
          return (
            <FaqItem
              question={item.question}
              answer={item.answer}
              key={index}
            />
          );
        })}
      </div>
      <div className={classes.others}></div>
    </div>
  );
};

export default Faq;

import React from "react";

import classes from "../assets/styles/partials/linkItem.module.css";

import { FaCopy } from "react-icons/fa";

const LinkItem = ({ item }) => {
  const [text, setText] = React.useState("");

  const copy = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(item.short_url);
        setText("Copied");
        setTimeout(() => {
          setText("");
        }, 1500);
      } catch (e) {
        alert(e.message);
      }
    }
    else{
        let textArea = document.createElement("textarea");
        textArea.value = item.short_url;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setText("Copied");
        setTimeout(() => {
          setText("");
        }, 1500);
    }
  };

  return (
    <div className={classes.linkItem}>
      <p className={classes.linkP}>
        <span>Long Link: </span>
        {item.long_url} ``
      </p>
      <p className={`${classes.linkP} ${classes.short}`}>
        <p>
          <span>Short Link: </span>{" "}
          <a href={`http://localhost:3000/${item.short_url}`} target="_blank">
            rand.ly/{item.short_url}
          </a>
        </p>
        <button onClick={copy} data-tooltip={text}>
          Copy <FaCopy />
        </button>
      </p>
    </div>
  );
};

export default LinkItem;

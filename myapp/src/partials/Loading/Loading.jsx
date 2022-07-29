import React, { useContext } from "react";

import styles from "./loading.module.css";

import { LoadingContext } from "../../providers/LoadingProvider";

const Loading = () => {
  const { loading } = useContext(LoadingContext);

  if (!loading) {
    return null;
  }

  return <div className={styles.body}></div>;
};

export default Loading;

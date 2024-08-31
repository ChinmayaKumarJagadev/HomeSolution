import Header from "@/components/Home/Header";
import React from "react";
import styles from "../../styles/about.module.css";
import AboutTopContainer from "./components/AboutTopContainer";
import AboutMiddleContainer from "./components/AboutMiddleContainer";
import AboutVideoContainer from "./components/AboutVideoContainer";

function ABoutMain() {
  return (
    <div>
      <Header />
      <AboutTopContainer />
      <div className={styles.arrow_container}>
        <div className={styles.arrowDown}></div>
        <div className={styles.arrowDown}></div>
      </div>
      <AboutMiddleContainer />
      <AboutVideoContainer />
    </div>
  );
}

export default ABoutMain;

import React from "react";
import styles from "../../styles/about.module.css";
import AboutLeftContainer from "./Component/AboutLeftContainer";
import AboutRightContainer from "./Component/AboutRightContainer";
import AboutCompany from "./Component/AboutCompany";

function Services() {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <AboutLeftContainer />
        <AboutRightContainer />
      </div>

      <AboutCompany />
    </div>
  );
}

export default Services;

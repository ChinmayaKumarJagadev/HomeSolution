import React from "react";
import styles from "../../../styles/services.module.css";
import AboutCompany from "@/components/about/Component/AboutCompany";

function ServiceMiddle() {
  return (
    <div className={styles.serviceMiddleContainer}>
      <div className={styles.overlayServiceMiddle}></div>
      <div className="relative z-10">
        <AboutCompany/>
      </div>
    </div>
  );
}

export default ServiceMiddle;

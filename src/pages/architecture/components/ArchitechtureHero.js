import React from "react";
import styles from "../../../styles/designAndPlanning.module.css";

function DesignScreenHero() {
  return (
    <div className={styles.architectureRouteHeroContainer}>
      <div className={styles.designHeroOverlay}></div>
      <div className={styles.designHeroTitle}>
        Architectural Services and Planning
      </div>
      <button className={styles.designHeroBookButton}>
        Start Building with Us
      </button>
    </div>
  );
}

export default DesignScreenHero;

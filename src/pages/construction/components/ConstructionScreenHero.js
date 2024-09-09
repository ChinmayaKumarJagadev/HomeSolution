import React from "react";
import styles from '../../../styles/designAndPlanning.module.css'

function DesignScreenHero() {
  return (
    <div className={styles.designRouteHeroContainer}>
        <div className={styles.designHeroOverlay}></div>
      <div className={styles.designHeroTitle}>Construction and Building</div>
      <button className={styles.designHeroBookButton}>Start Building with Us</button>
    </div>
  );
}

export default DesignScreenHero;

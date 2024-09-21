import React from "react";
import Image1 from "../assets/Images/interiorOffer1.png";
import Image2 from "../assets/Images/interiorOffer2.png";
import Image3 from "../assets/Images/interiorOffer3.png";
import Image4 from "../assets/Images/interiorOffer4.png";
import Image from "next/image";
import styles from "../styles/interios.module.css";

function InteriorOfferSection() {
  return (
    <div className={styles.interiorOfferMainContainer}>
      <h2 className={styles.interiorOfferTitle}>Why Choose Our Living Room Designs</h2>

      <div className={styles.interiorOfferContainer}>
        <div className={styles.interiorOfferItem}>
          <Image src={Image1} alt="10 Years Warranty" width={80} height={80} className={styles.interiorOfferImage} />
          <div className={styles.interiorOfferText}>10 Years Warranty</div>
        </div>

        <div className={styles.interiorOfferItem}>
          <Image src={Image2} alt="25% Extra Space" width={80} height={80} className={styles.interiorOfferImage} />
          <div className={styles.interiorOfferText}>25% Extra Space</div>
        </div>

        <div className={styles.interiorOfferItem}>
          <Image src={Image3} alt="Smart Storage Solutions" width={80} height={80} className={styles.interiorOfferImage} />
          <div className={styles.interiorOfferText}>Smart Storage Solutions</div>
        </div>

        <div className={styles.interiorOfferItem}>
          <Image src={Image4} alt="24/7 Customer Support" width={80} height={80} className={styles.interiorOfferImage} />
          <div className={styles.interiorOfferText}>24/7 Customer Support</div>
        </div>
      </div>
    </div>
  );
}

export default InteriorOfferSection;

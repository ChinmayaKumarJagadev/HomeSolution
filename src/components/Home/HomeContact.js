import React from "react";
import styles from "../../styles/homeContact.module.css";
import Image from "next/image";
import Phone from "../../assets/Images/messageIcon.png";

function HomeContact() {
  return (
    <div className={styles.homeContactContainer}>
      <div className={styles.contactOverlay}></div>
      <div className={styles.homeContactCardContainer}>
        <div className={styles.messageContainerHome}><Image src={Phone} alt="error" width={20} className={styles.homeContactIcon}/></div>
        <div className={styles.contactHomeText}>Contact Us</div>
        <div className={styles.contactHomeDesc}>Feel free to reach out to us for better understanding of our projects and work!</div>
        <div className={styles.homeContactHereText}> Click here</div>
      </div>
    </div>
  );
}

export default HomeContact;

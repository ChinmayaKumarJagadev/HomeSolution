import React, { useEffect } from "react";
import styles from "../../styles/hero.module.css";
import Image from "next/image";
import RightArrow from '../../assets/Images/right-arrow.png'

function DesignInfo({ activeIndex, textAnimation }) {
  console.log(textAnimation, 'design components')
  const designInfo = [
    {
      title: "Creating Reliable Homes for You and Your Family",
      // desc: "Building best foundations",
      text: "Book A Consultation",
    },
    {
      title: "Designing Interiors That Reflect Your Style and Enhance Your Life",
      // desc: "Transforming spaces into stylish",
      text: "Book A Consultation",
    },
    {
      title: "Expert Maintenance for a Comfortable and Well-Kept Home",
      // desc: "Keep your home in top shape.",
      text: "Book A Consultation",
    },
  ];

  const { title, desc, text } = designInfo[activeIndex] || {};

  return (
    <div className={styles.designInfo}>
      <div className={styles.designInfoContainer}>
        <div className={styles.designTitle}>
          {title}
        </div>
        {/* <div className={styles.designDesc}>{desc}</div> */}
        <div className={styles.designButton}>
          <button>{text}</button>
          <Image src={RightArrow} alt="error" className={styles.rightArrow} />
        </div>
      </div>
    </div>
  );
}

export default DesignInfo;

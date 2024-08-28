import React, { useEffect } from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import RightArrow from '../assets/Images/right-arrow.png'

function DesignInfo({ activeIndex, textAnimation }) {
  console.log(textAnimation, 'design components')
  const designInfo = [
    {
      title: "Construction Work",
      desc: "Building best foundations",
      text: "Book A Consultation",
    },
    {
      title: "Interior Planning",
      desc: "Transforming spaces into stylish",
      text: "Book A Consultation",
    },
    {
      title: "Maintainance Planning",
      desc: "Keep your home in top shape.",
      text: "Book A Consultation",
    },
  ];

  const { title, desc, text } = designInfo[activeIndex] || {};

  return (
    <div className={styles.designInfo}>
      <div className={styles.designInfoContainer}>
        <div className={textAnimation ?  "" : styles.designTitle}>
          {title}
        </div>
        <div className={textAnimation ?  "" : styles.designDesc}>{desc}</div>
        <div className={textAnimation ?  "" : styles.designButton}>
          <button>{text}</button>
          <Image src={RightArrow} alt="error" className={styles.rightArrow} />
        </div>
      </div>
    </div>
  );
}

export default DesignInfo;

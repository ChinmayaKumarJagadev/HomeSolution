import React from "react";
import styles from "../../../styles/about.module.css";
import Image from "next/image";
import AboutImage from "../../../assets/Images/about-img.jpg";

function AboutMiddleContainer() {
  return (
    <div className={styles.aboutMiddleContainer}>
      <Image src={AboutImage} alt="error" width={500} height={500} />
      <div className="flex flex-col">
        <div className={styles.aboutMainText}>
          Our Global Vision is to Transforming Spaces with World-Class
          Construction & Design
        </div>

        <div className={styles.aboutMainDesc}>
          Our mission is to revolutionize the global construction and interior
          design landscape. With over a decade of expertise, we are committed to
          delivering unparalleled craftsmanship and innovative solutions to
          clients worldwide. Our dedicated team blends creativity with
          precision, ensuring that every project reflects the highest standards
          of quality and design excellence.
          scale.
        </div>
      </div>
    </div>
  );
}

export default AboutMiddleContainer;

import React from "react";
import styles from "../../../styles/about.module.css";
import Image from "next/image";
import Award1 from "../../../assets/Images/award1.jpg";
import Award2 from "../../../assets/Images/award2.png";
import Award3 from "../../../assets/Images/award 3.jpg";
import Award4 from "../../../assets/Images/award4.jpg";
import Award5 from "../../../assets/Images/award 1.png";
import Award6 from "../../../assets/Images/award 2.png";

function AboutMiddleContainer() {
  return (
    <div className={styles.aboutVideoContainer}>
      <div className="text-black text-[20px] md:text-[30px] font-bold">Our Acheievements and Awards</div>

      <div className={styles.awardContainer}>
        <Image src={Award1} alt="err" width={150} className="border-2 rounded-xl"/>
        <Image src={Award2} alt="err" width={150} className="border-2 rounded-xl"/>
        <Image src={Award3} alt="err"  width={150} className="border-2 rounded-xl"/>
        <Image src={Award4} alt="err"  width={150} className="border-2 rounded-xl"/>
        <Image src={Award5} alt="err"  width={150} className="rounded-xl"/>
        <Image src={Award6} alt="err"  width={150} className="border-2 rounded-xl"/>
      </div>
    </div>
  );
}

export default AboutMiddleContainer;

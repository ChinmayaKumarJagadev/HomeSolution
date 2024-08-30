import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../../styles/about.module.css";
import Image1 from "../../../assets/Images/alok-1.jpg";
import Image2 from "../../../assets/Images/alok-2.jpg";
import Image3 from "../../../assets/Images/alok-3.jpg";

function AboutTopContainer() {
  return (
    <div className={styles.aboutMeTopContainer}>
      <div
        className={styles.aboutCardsContainer}
        style={{ marginTop: "120px" }}
      >
        <Image
          src={Image1}
          alt={`error`}
          layout="responsive"
          className={styles.cardTopContainerImage}
        />
        <div className="flex">
          <div className="text-black text-[18px] md:text-[30px] font-bold mt-5">
            Home Construction
          </div>
          <motion.div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "orange",
              margin: "5px 0 0 20px",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            animate={{
              opacity: [1, 0, 1], // Sequence of opacity changes
            }}
            transition={{
              repeat: Infinity, // Repeat the animation indefinitely
              duration: 1, // Duration of one blink cycle (in seconds)
            }}
          />
        </div>

        <div className="mt-3 text-[15px] text-left">
          At HomeSolution.com, construction is at the heart of what we do. With
          over a decade of experience, we specialize in delivering top-quality
          construction services that meet the highest standards of safety and
          excellence. From residential builds to large-scale commercial
          projects, our skilled team ensures every project is completed with
          precision and care.
        </div>
      </div>

      <div className={styles.aboutCardsContainer}>
        <Image
          src={Image2}
          alt={`error`}
          layout="responsive"
          className={styles.cardTopContainerImage}
        />

        <div className="flex">
          <div className="text-black text-[18px] md:text-[30px] font-bold mt-5">
            Interior Design
          </div>
          <motion.div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "orange",
              margin: "10px 0 0 20px",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            animate={{
              opacity: [1, 0, 1], // Sequence of opacity changes
            }}
            transition={{
              repeat: Infinity, // Repeat the animation indefinitely
              duration: 1, // Duration of one blink cycle (in seconds)
            }}
          />
        </div>
        <div className="mt-3 text-[15px] text-left">
          We bring spaces to life through exceptional interior design. With over
          a decade of expertise, our team is dedicated to creating environments
          that are both stylish and functional. We blend creativity with
          practicality, ensuring every design reflects your unique taste while
          optimizing the use of space.
        </div>
      </div>

      <div
        className={styles.aboutCardsContainerLast}
      >
        <Image
          src={Image3}
          alt={`error`}
          layout="responsive"
          className={styles.cardTopContainerImage}
        />
        <div className="flex">
          <div className="text-black text-[18px] md:text-[30px] font-bold mt-5">
            Maintainace and Delivery
          </div>
          <motion.div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "orange",
              margin: "10px 0 0 0px",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            animate={{
              opacity: [1, 0, 1], // Sequence of opacity changes
            }}
            transition={{
              repeat: Infinity, // Repeat the animation indefinitely
              duration: 1, // Duration of one blink cycle (in seconds)
            }}
          />
        </div>

        <div className="mt-3 text-[15px] text-left">
          We pride ourselves on providing comprehensive maintenance and delivery
          services for both construction and interior design projects. Our
          dedicated team ensures that every aspect of your project, from initial
          design to final delivery, is handled with the utmost care and
          professionalism.
        </div>
      </div>
    </div>
  );
}

export default AboutTopContainer;

import React, { useState, useEffect } from "react";
import styles from "../../../styles/about.module.css";

function AboutCompany() {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const incrementCounter = (setter, targetValue) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count === targetValue) {
          clearInterval(interval);
        }
      }, 50);
    };

    incrementCounter(setExperience, 12);
    incrementCounter(setProjects, 100);
    incrementCounter(setClients, 150);
    incrementCounter(setAwards, 47);
  }, []);

  return (
    <div className={styles.aboutCompanyMainContainer}>
      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{experience} +</div>
        <div className="md:text-[18px] pt-2 text-[14px]">Years Of Experience</div>
      </div>

      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{projects} +</div>
        <div className="md:text-[18px] pt-2 text-[14px]">Our Projects</div>
      </div>

      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{clients} +</div>
        <div className="md:text-[18px] pt-2 text-[14px]">Happy Clients</div>
      </div>

      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{awards} +</div>
        <div className="md:text-[18px] pt-2 text-[14px]">Awards</div>
      </div>
    </div>
  );
}

export default AboutCompany;

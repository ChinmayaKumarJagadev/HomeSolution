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
      }, 170);
    };

    incrementCounter(setExperience, 12);
    incrementCounter(setProjects, 100);
    incrementCounter(setClients, 150);
    incrementCounter(setAwards, 47);
  }, []);

  return (
    <div className="flex flex-wrap px-10 justify-around">
      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{experience} +</div>
        <div className="text-md">Years Of Experience</div>
      </div>

      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{projects} +</div>
        <div className="text-md">Our Projects</div>
      </div>

      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{clients} +</div>
        <div className="text-md">Happy Clients</div>
      </div>

      <div className={styles.aboutCompanyCircles}>
        <div className="text-4xl font-bold">{awards}</div>
        <div className="text-md">Awards</div>
      </div>
    </div>
  );
}

export default AboutCompany;

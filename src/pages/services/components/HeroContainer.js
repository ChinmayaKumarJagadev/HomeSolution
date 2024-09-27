import React from "react";
import ServicesHeroImage from "../../../assets/Images/construction-1.jpg";
import Image from "next/image";
import styles from "../../../styles/services.module.css";
import Service1 from "../../../assets/Images/service-1.png";
import Service2 from "../../../assets/Images/service-2.png";
import Service3 from "../../../assets/Images/service-3.png";
import Service4 from "../../../assets/Images/service-4.png";

function HeroContainer() {
  return (
    <div className={styles.firstServiceContainer}>
      <div className={styles.leftSeviceContainer}>
        <Image
          src={ServicesHeroImage}
          alt=""
          width={900}
          className={styles.serviceImage}
        />
      </div>

      <div className={styles.serviceHeroContainer}>
        <div className={styles.serviceHeroText}>Our Construction Services</div>
        <div className={styles.servicesHeroBoxes}>
          <div className={styles.serviceHeroCard}>
            <Image src={Service1} alt="err" width={60} />
            <div className={styles.serviceHeroCardTitle}>
              Residential Construction
            </div>
            <div className={styles.serviceHeroCardDesc}>
              We build durable, high-quality homes tailored to your vision. From
              design to completion, we focus on delivering exceptional
              craftsmanship, personalized service, and efficient project
              management for your dream home.
            </div>

            <div className={styles.serviceCardRightCircle}></div>
          </div>

          <div className={styles.serviceHeroCard}>
            <Image src={Service2} alt="err" width={60} />
            <div className={styles.serviceHeroCardTitle}>
              Commercial Construction
            </div>
            <div className={styles.serviceHeroCardDesc}>
              We provide tailored commercial construction services, delivering
              high-quality, functional spaces for businesses. From office
              buildings to retail centers, our expert team ensures efficient,
              timely, and budget-friendly project execution.
            </div>
          </div>

          <div className={styles.serviceHeroCard}>
            <Image src={Service3} alt="err" width={60} />
            <div className={styles.serviceHeroCardTitle}>
              Renovation and Remodeling
            </div>
            <div className={styles.serviceHeroCardDesc}>
              Revitalize your space with our expert renovation and remodeling
              services. We enhance functionality and aesthetics, breathing new
              life into homes and businesses with modern designs and
              high-quality craftsmanship.
            </div>
          </div>

          <div className={styles.serviceHeroCard}>
            <Image src={Service4} alt="err" width={60} />
            <div className={styles.serviceHeroCardTitle}>
              Structural Engineering
            </div>
            <div className={styles.serviceHeroCardDesc}>
              {" "}
              Our structural engineering services ensure your building’s safety,
              durability, and efficiency. We provide expert design and analysis,
              ensuring compliance with safety codes for long-lasting, resilient
              structures.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;

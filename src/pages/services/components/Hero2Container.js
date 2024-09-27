import React from "react";
import ServicesHeroImage from "../../../assets/Images/home-det-2.jpg";
import Image from "next/image";
import styles from "../../../styles/services.module.css";
import Service1 from "../../../assets/Images/service-8.png";
import Service2 from "../../../assets/Images/service-7.png";
import Service3 from "../../../assets/Images/service-6.png";
import Service4 from "../../../assets/Images/service-5.png";

function Hero2Container() {
  return (
    <div className="mt-[50px]">
      <div className={styles.secondServiceContainer}>
        <div className={styles.serviceHeroContainer}>
          <div className={styles.serviceHeroText}>Our Interior Services</div>
          <div className={styles.servicesHeroBoxes}>
            <div className={styles.serviceHeroCard}>
              <Image src={Service1} alt="err" width={60} />
              <div className={styles.serviceHeroCardTitle}>
                Residential Interior
              </div>
              <div className={styles.serviceHeroCardDesc}>
                Elevate your home with personalized interior design solutions
                that blend style and functionality. From modern to classic, we
                create spaces that reflect your personality and enhance everyday
                living.
              </div>

              <div className={styles.serviceCardRightCircle}></div>
            </div>

            <div className={styles.serviceHeroCard}>
              <Image src={Service2} alt="err" width={60} />
              <div className={styles.serviceHeroCardTitle}>
                Commercial Interior
              </div>
              <div className={styles.serviceHeroCardDesc}>
                We create functional and stylish commercial interiors that
                enhance productivity and brand identity. From office spaces to
                retail environments, we deliver tailored designs that inspire
                and elevate your business.
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
                3D Visualizations
              </div>
              <div className={styles.serviceHeroCardDesc}>
                {" "}
                Our 3D visualizations allow you to see your interior design
                project in vivid detail, offering realistic previews and helping
                you make informed design decisions with confidence.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.leftSeviceContainer}>
          <Image
            src={ServicesHeroImage}
            alt=""
            width={900}
            className={styles.serviceImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero2Container;

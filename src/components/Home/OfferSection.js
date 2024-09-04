import React from "react";
import styles from "../../styles/offer.module.css";
import Image from "next/image";
import warenty from '../../assets/Images/warenty.png'
import happy from '../../assets/Images/happy.png'
import architect from '../../assets/Images/architect.png'
import designer from '../../assets/Images/designer.png'
import city from '../../assets/Images/globe.png'
import emi from '../../assets/Images/emi.png'
import project from '../../assets/Images/project.png'
import expr from '../../assets/Images/experience.png'

function OfferSection() {
  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerTitle}>What we offers</div>

      <div className={styles.slidernew}>
        <div className={styles.slide_track}>
          <div className={styles.slides}>
           <div className={styles.offerImageContainer}><Image src={warenty} alt="err" width={60} className={styles.offerImages}/></div> 
            <div>5 Years Warenty</div>
          </div>
          <div className={styles.slides}>
          <div className={styles.offerImageContainer}> <Image src={happy} alt="err" width={60} className={styles.offerImages}/></div>
            <div>Happy Customer</div>
          </div>
          <div className={styles.slides}>
         <div className={styles.offerImageContainer}> <Image src={architect} alt="err" width={60} className={styles.offerImages}/></div>
            <div>1000+ Architect</div>
          </div>
          <div className={styles.slides}>
            <div className={styles.offerImageContainer}> <Image src={designer} alt="err" width={60} className={styles.offerImages}/></div>
            <div>3500+ Designer</div>
          </div>
          <div className={styles.slides}>
            <div className={styles.offerImageContainer}> <Image src={city} alt="err" width={60} className={styles.offerImages}/></div>
            <div>100+ cities</div>
          </div>
          <div className={styles.slides}>
            <div className={styles.offerImageContainer}> <Image src={emi} alt="err" width={60} className={styles.offerImages}/></div>
            <div>EMI Facility</div>
          </div>
          <div className={styles.slides}>
            <div className={styles.offerImageContainer}> <Image src={project} alt="err" width={60} className={styles.offerImages}/></div>
            <div>500+ Projects</div>
          </div>
          <div className={styles.slides}>
            <div className={styles.offerImageContainer}> <Image src={expr} alt="err" width={60} className={styles.offerImages}/></div>
            <div>12+ year of Experience</div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default OfferSection;

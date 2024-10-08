import React from "react";
import styles from "../../styles/homeConstruction.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import cons1 from "../../assets/Images/cons2 (6).jpg";
import cons2 from "../../assets/Images/cons2.jpg";
import cons3 from "../../assets/Images/cons2 (1).jpg";
import cons4 from "../../assets/Images/cons2 (2).jpg";
import cons5 from "../../assets/Images/cons2 (3).jpg";
import cons6 from "../../assets/Images/cons2 (4).jpg";
import cons7 from "../../assets/Images/cons2 (5).jpg";
import Star from "../star";

const HomeConstruction = () => {
  const router = useRouter();
  const data = [
    { title: "Personal Home", image: cons1, star: "★★★★★", offer: "Save 54%" },
    { title: "Flats | 2BHK 3BHK", image: cons7, star: "★★★★" , offer: "Save 34%"},
    { title: "Restaurants", image: cons2, star: "★★★★★", offer: "Save 64%" },
    { title: "Hospitals", image: cons3, star: "★★★★", offer: "Save 54%" },
    { title: "Hotels", image: cons4, star: "★★★★★", offer: "Save 54%" },
    { title: "Shops", image: cons5, star: "★★★★" , offer: "Save 29%"},
    { title: "Office", image: cons6, star: "★★★★★", offer: "Save 52%" },
  ];

  const scrollLeft = () => {
    document.querySelector(`.${styles.scrollContainer}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer}`).scrollLeft += 200;
  };


  const handleCardClick = (card)=>{
    if (card === 0) {
      router.push("/personal-home");
    }
    if (card === 1) {
      router.push("/flats");
    }
    if (card === 2) {
      router.push("/restaurants");
    }
    if (card === 3) {
      router.push("/hospitals");
    }
    if (card === 4) {
      router.push("/hotels");
    }
    if (card === 5) {
      router.push("/shops");
    }
    if (card === 6) {
      router.push("/office");
    }
  }

  return (
    <div className={styles.homeConstructionContainer}>
      <div className={styles.homeConstructionTitle}>
        Explore all types of Construction we Offer!
      </div>
      <div className={styles.homeConstructionDesc}>
        Transform your ideas into a lasting legacy with our expert construction
        services.
      </div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer}>
          {data.map((item, index) => (
            <div className={styles.homeConstructionCard} key={index} onClick={() => handleCardClick(index)}>
              <Image
                src={item.image}
                alt={item.title}
                className={styles.homeConstructionCardImage}
                width={400}
                height={300}
              />
              <div className={styles.homeCardOverlay}></div>
              <div
                // onClick={onClick}
                className={styles.starRating}
              >
                {item.star}
              </div>
              <div className={styles.homeConstructionCardTitle}>
                {item.title}
              </div>
              <div className={styles.checknowText}>Check Now</div>
              <div className={styles.homeOffers}>{item.offer}</div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.scrollButton} ${styles.right}`}
          onClick={scrollRight}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HomeConstruction;

import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/hero.module.css";
import Image1 from "../../assets/Images/11.png";
import Image2 from "../../assets/Images/122.jpg";
import Image3 from "../../assets/Images/maintainance.jpg";
import DesignInfo from "./DesignInfo";

const images = [Image1, Image2, Image3];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimation(false);
    }, 100);
  }, [activeIndex]);


  const handleChange = (index) => {
    setActiveIndex(index);
    setTextAnimation(true);
  };

  const snowflakes = Array.from({ length: 15 }).map((_, i) => (
    <div className={styles.snowflake} style={{ '--i': i }} key={i}>
      ❄
    </div>
  ));

  return (
    <div className={styles.hero_container}>
        {snowflakes}
      <Carousel
        showThumbs={false}
        axis="horizontal"
        showStatus={false}
        onChange={handleChange}
        infiniteLoop={true}
        autoPlay={true}
        interval={7000}
        stopOnHover={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              className={styles.customArrowPrev}
              onClick={onClickHandler}
              aria-label="Previous"
            >
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              className={styles.customArrowNext}
              onClick={onClickHandler}
              aria-label="Next"
            >
              &#10095;
            </button>
          )
        }
        renderIndicator={() => null}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="responsive"
              className={styles.bgImage}
            />
            <DesignInfo
              activeIndex={activeIndex}
              textAnimation={textAnimation}
            />
            <div className={styles.arrow_container}>
              <div className={styles.arrowDown}></div>
              <div className={styles.arrowDown}></div>
            </div>
            <div className={styles.overlay}></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;

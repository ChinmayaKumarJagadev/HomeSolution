import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/u-shape-1.jpg";
import Image2 from "../../../assets/Images/u-shape-2.jpg";
import Image3 from "../../../assets/Images/u-shape-4.jpg";
import Image4 from "../../../assets/Images/u-shape-3.jpg";
import Image5 from "../../../assets/Images/u-shape-5.jpg";
import Image6 from "../../../assets/Images/u-shape-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Elegant U-Shaped Modular Kitchen with Sleek Cabinets",
      image: Image1,
      description:
        "This elegant U-shaped modular kitchen features sleek cabinets that provide ample storage and a clean, modern look. The layout maximizes the use of space, offering an efficient work triangle between the stove, sink, and refrigerator. Soft under-cabinet lighting enhances the contemporary feel, while the smooth finishes and high-quality materials make this kitchen a perfect blend of style and functionality."
    },
    {
      title: "Cozy U-Shaped Modular Kitchen with Warm Wooden Accents",
      image: Image2,
      description:
        "This cozy U-shaped modular kitchen showcases warm wooden accents that bring a natural and inviting feel to the space. The layout is ideal for small to medium-sized kitchens, providing a comfortable and efficient workspace. Open shelving and smart storage solutions add to the functionality, while the wooden tones and soft lighting create a welcoming atmosphere perfect for family meals and gatherings."
    },
    {
      title: "Stylish U-Shaped Modular Kitchen with Marble Countertops",
      image: Image3,
      description:
        "This stylish U-shaped modular kitchen features stunning marble countertops that add a touch of luxury to the space. The U-shaped layout ensures ample workspace and storage, with all key appliances within easy reach. The combination of marble and sleek cabinetry creates a sophisticated look, while natural light highlights the elegance of the design, making it an inviting area for cooking and entertaining."
    },
    {
      title: "Modern U-Shaped Modular Kitchen with Smart Storage Solutions",
      image: Image4,
      description:
        "This modern U-shaped modular kitchen is designed with smart storage solutions to maximize efficiency. The layout offers plenty of counter space for food preparation, while the upper and lower cabinets provide organized storage for all kitchen essentials. The sleek finishes and integrated appliances contribute to the minimalist look, making this kitchen both functional and visually appealing."
    },
    {
      title: "Chic U-Shaped Modular Kitchen with Vibrant Color Accents",
      image: Image5,
      description:
        "This chic U-shaped modular kitchen stands out with vibrant color accents that add energy and personality to the space. The U-shaped layout optimizes the workflow, providing a spacious cooking area with plenty of counter space. Bold cabinetry colors contrast with neutral countertops, creating a dynamic and contemporary look that makes this kitchen a lively and engaging space for cooking and socializing."
    },
    {
      title: "Contemporary U-Shaped Modular Kitchen with High-End Appliances",
      image: Image6,
      description:
        "This contemporary U-shaped modular kitchen is equipped with high-end appliances and luxurious finishes. The U-shaped design offers a spacious and efficient layout, making it easy to move between cooking, cleaning, and storage areas. The sleek cabinetry and premium materials create a sophisticated atmosphere, while the advanced appliances ensure a top-notch culinary experience, perfect for both everyday use and special occasions."
    }
  ];
  
  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scroll is enabled on unmount
    };
  }, [showModal]);

  const handleMoreInfoClick = (design) => {
    setSelectedDesign(design);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDesign(null);
  };

  const scrollLeft = () => {
    document.querySelector(`.${styles.scrollContainer3}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer3}`).scrollLeft += 200;
  };

  return (
    <div className={styles.livingRoomDesignContainer}>
      <div className={styles.modernLivingRoom}>Our U-Shape Modular Kitchen Design</div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer3}>
          {data.map((item, index) => (
            <div
              className={styles.livingRoomCardContainer}
              key={index}
            >
              <Image
                src={item.image}
                alt={item.title}
                className={styles.livingRoomCardImage}
                width={700}
                height={300}
                onClick={() => handleMoreInfoClick(item)}
              />
              <div className={styles.livingRoomOverlay}></div>
              <div className={styles.livingRoomTitle}>{item.title}</div>
              <div className="flex justify-between">
                <button className={styles.getQuoteLivingRoom}>Get Quote</button>
                <button className={styles.moreInfoLivingRoom} onClick={() => handleMoreInfoClick(item)}>Explore Now<Image src={rightArrow} alt="err" width={25}/></button>
              </div>
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

      <Modal 
        show={showModal} 
        onClose={handleCloseModal} 
        title={selectedDesign?.title}
        description={selectedDesign?.description}
        buttonText="Get Quote"
        imageUrl={selectedDesign?.image.src}
      >
        {selectedDesign?.image && (
          <Image 
            src={selectedDesign.image} 
            alt={selectedDesign.title} 
            width={1000} 
            height={1000} 
            className={styles.modalImage} 
          />
        )}
      </Modal>
      </div>

  );
}

export default MinimalistRoomDesign;

import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/metal-1.jpg";
import Image2 from "../../../assets/Images/metal-2.jpg";
import Image3 from "../../../assets/Images/metal-4.jpg";
import Image4 from "../../../assets/Images/metal-3.jpg";
import Image5 from "../../../assets/Images/metal-5.jpg";
import Image6 from "../../../assets/Images/metal-6.jpg";
import rightArrow from "../../../assets/Images/right-arrow (2).png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "Modern Living Room with Sleek Metal False Ceiling and Ambient Lighting",
      image: Image1,
      description:
        "This modern living room features a sleek metal false ceiling that adds an industrial touch to the space. The reflective surface enhances the room's brightness, while the ambient lighting creates a warm and inviting atmosphere. The combination of contemporary furniture and metal accents contributes to a stylish, cohesive look, making this living room perfect for relaxation and entertaining."
    },
    {
      title: "Contemporary Bedroom with Stylish Metal False Ceiling and LED Features",
      image: Image2,
      description:
        "This contemporary bedroom showcases a stylish metal false ceiling with integrated LED features that provide both functionality and flair. The sleek lines of the metal design add a modern edge, while the soft lighting creates a serene environment for rest. The combination of elegant furnishings and metal accents ensures this bedroom is both chic and inviting."
    },
    {
      title: "Chic Dining Room with Decorative Metal False Ceiling and Pendant Lights",
      image: Image3,
      description:
        "This chic dining room features a decorative metal false ceiling adorned with stylish pendant lights. The intricate design of the ceiling adds visual interest, while the warm lighting sets the perfect mood for dining. The blend of modern decor and metal elements creates an elegant and inviting atmosphere, ideal for hosting family and friends."
    },
    {
      title: "Functional Kitchen with Durable Metal False Ceiling and Bright Lighting",
      image: Image4,
      description:
        "This functional kitchen showcases a durable metal false ceiling that enhances the space's practicality and aesthetics. The ceiling design incorporates bright lighting, ensuring the area is well-lit for cooking and meal prep. The modern finishes and easy maintenance of the metal ceiling make this kitchen both stylish and efficient, perfect for culinary creativity."
    },
    {
      title: "Elegant Home Office with Minimalist Metal False Ceiling and Task Lighting",
      image: Image5,
      description:
        "This elegant home office features a minimalist metal false ceiling designed for optimal task lighting. The clean lines and modern material create a sophisticated work environment, while the focused lighting enhances productivity. The stylish furniture and decor complete the look, making this office a comfortable and motivating space for work."
    },
    {
      title: "Stylish Bathroom with Sleek Metal False Ceiling and Soft Lighting",
      image: Image6,
      description:
        "This stylish bathroom showcases a sleek metal false ceiling that adds a modern touch to the space. The soft lighting integrated within the ceiling creates a relaxing ambiance, perfect for unwinding. The waterproof nature of the metal design makes it an ideal choice for bathrooms, while the overall aesthetic enhances the elegance of this serene retreat."
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
    document.querySelector(`.${styles.scrollContainer5}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer5}`).scrollLeft += 200;
  };

  return (
    <div className={styles.livingRoomDesignContainer}>
      <div className={styles.modernLivingRoom}>
        Our Metal False Ceiling Design
      </div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer5}>
          {data.map((item, index) => (
            <div className={styles.livingRoomCardContainer} key={index}>
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
                <button
                  className={styles.moreInfoLivingRoom}
                  onClick={() => handleMoreInfoClick(item)}
                >
                  Explore Now
                  <Image src={rightArrow} alt="err" width={25} />
                </button>
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

export default EclecticRoomDesign;

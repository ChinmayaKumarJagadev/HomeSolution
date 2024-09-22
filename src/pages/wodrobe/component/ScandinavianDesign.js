import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/wodrobe-7.jpg";
import Image2 from "../../../assets/Images/wodrobe-8.jpg";
import Image3 from "../../../assets/Images/wodrobe-9.jpg";
import Image4 from "../../../assets/Images/wodrobe-10.jpg";
import Image5 from "../../../assets/Images/wodrobe-11.jpg";
import Image6 from "../../../assets/Images/wodrobe-12.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Classic Hinged Wardrobe with Rich Wooden Finish",
      image: Image1,
      description:
        "This classic hinged wardrobe features a rich wooden finish that brings warmth and elegance to the bedroom. The spacious design includes multiple hanging sections and adjustable shelves, providing ample storage for clothing and accessories. The intricate woodwork and traditional handles add a timeless charm, making this wardrobe a beautiful focal point in any room."
    },
    {
      title: "Modern Hinged Wardrobe with Glossy White Finish",
      image: Image2,
      description:
        "This modern hinged wardrobe boasts a glossy white finish that creates a sleek and contemporary look. The design includes full-length mirrors on the doors, enhancing the sense of space and light in the room. Inside, the wardrobe features well-organized compartments, including hanging rods and shelves, ensuring easy access to all your essentials."
    },
    {
      title: "Elegant Hinged Wardrobe with Frosted Glass Inserts",
      image: Image3,
      description:
        "This elegant hinged wardrobe showcases frosted glass inserts that add a touch of sophistication to the design. The combination of wood and glass creates a modern aesthetic, while the interior offers a mix of hanging space and shelves for optimal organization. Soft-close doors ensure quiet and smooth operation, making this wardrobe both stylish and functional."
    },
    {
      title: "Spacious Hinged Wardrobe with Customizable Interiors",
      image: Image4,
      description:
        "This spacious hinged wardrobe is designed with customizable interiors to meet all your storage needs. The versatile layout includes adjustable shelves, pull-out drawers, and dedicated sections for shoes and accessories. The classic design is complemented by elegant hardware, making it a perfect addition to any bedroom style."
    },
    {
      title: "Contemporary Hinged Wardrobe with Minimalist Design",
      image: Image5,
      description:
        "This contemporary hinged wardrobe features a minimalist design with clean lines and a neutral color palette. The lack of ornate details allows the wardrobe to blend seamlessly into any modern decor. Inside, the wardrobe provides ample storage space with a combination of hanging rails and shelves, making it both functional and stylish."
    },
    {
      title: "Luxury Hinged Wardrobe with Built-In Lighting",
      image: Image6,
      description:
        "This luxury hinged wardrobe comes with built-in lighting that illuminates the interior, making it easy to find what you need. The design features high-quality materials and finishes, creating an upscale look. The spacious layout includes a mix of hanging space and drawers, ensuring organized storage while adding elegance to the bedroom."
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

  const scrollLeft = () => {
    document.querySelector(`.${styles.scrollContainer2}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer2}`).scrollLeft += 200;
  };

  const handleMoreInfoClick = (design) => {
    setSelectedDesign(design);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDesign(null);
  };

  return (
    <div className={styles.livingRoomDesignContainer}>
      <div className={styles.modernLivingRoom}>Our Hinged Wodrobe Design</div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer2}>
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
                <button className={styles.moreInfoLivingRoom}   onClick={() => handleMoreInfoClick(item)}>Explore Now<Image src={rightArrow} alt="err" width={25}/></button>
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

export default ScandinavianLivingRoom;

import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/wodrobe-13.jpg";
import Image2 from "../../../assets/Images/wodrobe-14.jpg";
import Image3 from "../../../assets/Images/wodrobe-15.jpg";
import Image4 from "../../../assets/Images/wodrobe-16.jpg";
import Image5 from "../../../assets/Images/wodrobe-17.jpg";
import Image6 from "../../../assets/Images/wodrobe-18.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Elegant Freestanding Wardrobe with Classic Design",
      image: Image1,
      description:
        "This elegant freestanding wardrobe features a classic design with ornate detailing and a rich wood finish. The spacious interior includes multiple hanging sections and shelves, providing ample storage for clothing and accessories. Its timeless appeal makes it a beautiful addition to any bedroom decor."
    },
    {
      title: "Modern Freestanding Wardrobe with Minimalist Aesthetic",
      image: Image2,
      description:
        "This modern freestanding wardrobe showcases a minimalist aesthetic with clean lines and a sleek, glossy finish. The simple design is perfect for contemporary spaces, offering a spacious interior with hanging rods and adjustable shelves. Its unobtrusive style complements any room while providing essential storage."
    },
    {
      title: "Rustic Freestanding Wardrobe with Reclaimed Wood",
      image: Image3,
      description:
        "This rustic freestanding wardrobe is crafted from reclaimed wood, adding charm and character to the space. The sturdy design features a combination of hanging space and shelves, making it both functional and stylish. Its natural finish enhances the wardrobe's organic appeal, perfect for a cozy, farmhouse-inspired bedroom."
    },
    {
      title: "Chic Freestanding Wardrobe with Mirrored Doors",
      image: Image4,
      description:
        "This chic freestanding wardrobe is designed with mirrored doors that enhance the sense of space in any room. The stylish design offers a blend of hanging and storage options, making it practical for organizing clothing and accessories. The mirrors not only serve a functional purpose but also add a touch of elegance to the decor."
    },
    {
      title: "Spacious Freestanding Wardrobe with Customizable Interiors",
      image: Image5,
      description:
        "This spacious freestanding wardrobe features customizable interiors, allowing for a tailored storage solution. With a mix of hanging rails, shelves, and drawers, it provides versatile organization for all your clothing needs. The modern design and quality finishes make it a functional yet stylish addition to any bedroom."
    },
    {
      title: "Luxurious Freestanding Wardrobe with Built-In Lighting",
      image: Image6,
      description:
        "This luxurious freestanding wardrobe is equipped with built-in lighting that illuminates the interior, making it easy to find what you need. The elegant design features high-quality materials and finishes, creating an upscale look. The ample storage space ensures organized storage while adding sophistication to the bedroom."
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
      <div className={styles.modernLivingRoom}>Our FreeStanding Wodrobe Design</div>

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

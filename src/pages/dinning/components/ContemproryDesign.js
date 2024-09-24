import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/dinning-1.jpg";
import Image2 from "../../../assets/Images/dinning-2.jpg";
import Image3 from "../../../assets/Images/dinning-3.jpg";
import Image4 from "../../../assets/Images/dinning-4.jpg";
import Image5 from "../../../assets/Images/dinning-5.jpg";
import Image6 from "../../../assets/Images/dinning-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; 

function ContemporaryDesign() {
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

  const data = [
    {
      title: "Elegant Contemporary Dining Room with Marble Table and Pendant Lighting",
      image: Image1,
      description:
        "This elegant contemporary dining room features a stunning marble dining table as its centerpiece, complemented by sleek chairs with a minimalist design. The pendant lighting above the table adds a touch of sophistication and creates a warm ambiance. The room is adorned with modern artwork and subtle decor, making it perfect for stylish dining and entertaining."
    },
    {
      title: "Modern Dining Room with Glass Table and High-Back Chairs",
      image: Image2,
      description:
        "This modern dining room showcases a chic glass table paired with high-back chairs, offering a refined yet comfortable dining experience. The open layout and use of neutral tones enhance the sense of space, while the contemporary chandelier provides a focal point. This dining area is designed for those who appreciate modern aesthetics and functional elegance."
    },
    {
      title: "Sleek Contemporary Dining Room with Wooden Accents and Open Shelving",
      image: Image3,
      description:
        "This sleek contemporary dining room features a blend of natural wood accents and modern design elements. The spacious dining table is complemented by comfortable chairs, while the open shelving provides both storage and display space for decor items. The large windows allow natural light to flood the room, creating a bright and inviting atmosphere."
    },
    {
      title: "Minimalist Dining Room with Clean Lines and Neutral Palette",
      image: Image4,
      description:
        "This minimalist dining room embraces clean lines and a neutral color palette, creating a calm and serene space. The simple yet elegant dining table is paired with stylish chairs that offer comfort without compromising on design. Subtle lighting and minimal decor enhance the room's modern feel, making it ideal for intimate dinners and casual gatherings."
    },
    {
      title: "Chic Contemporary Dining Room with Metallic Accents and Art Deco Elements",
      image: Image5,
      description:
        "This chic contemporary dining room combines metallic accents with Art Deco elements for a luxurious look. The glass dining table features a geometric base, while the upholstered chairs provide comfort and style. Statement lighting and bold artwork complete the look, making this dining space a perfect blend of modern design and classic glamour."
    },
    {
      title: "Luxury Dining Room with Velvet Chairs and Crystal Chandelier",
      image: Image6,
      description:
        "This luxury dining room exudes sophistication with its velvet chairs and a grand crystal chandelier. The sleek dining table is complemented by elegant decor, while the use of rich textures and high-quality materials adds a touch of opulence. This dining room is designed for those who appreciate the finer things in life, offering a perfect setting for formal dining and entertaining."
    }
  ];
  
  const scrollLeft = () => {
    document.querySelector(`.${styles.scrollContainer}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer}`).scrollLeft += 200;
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
      <div className={styles.modernLivingRoom}>Our Contemporary Dinning Room Design</div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer}>
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
              <div className="flex justify-between items-center">
                <button className={styles.getQuoteLivingRoom}>Get Quote</button>
                <button 
                  className={styles.moreInfoLivingRoom} 
                  onClick={() => handleMoreInfoClick(item)}
                >
                  Explore Now
                  <Image src={rightArrow} alt="right arrow" width={25}/>
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

      {/* Modal Component for More Info */}
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

export default ContemporaryDesign;

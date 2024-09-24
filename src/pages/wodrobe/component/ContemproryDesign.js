import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/wodrobe-1.jpg";
import Image2 from "../../../assets/Images/wodrobe-2.jpg";
import Image3 from "../../../assets/Images/wodrobe-3.jpg";
import Image4 from "../../../assets/Images/wodrobe-4.jpg";
import Image5 from "../../../assets/Images/wodrobe-5.jpg";
import Image6 from "../../../assets/Images/wodrobe-6.jpg";
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
      title: "Modern Sliding Wardrobe with Frosted Glass Panels and Sleek Design",
      image: Image1,
      description:
        "This modern sliding wardrobe features frosted glass panels that add a touch of elegance and privacy. The sleek design is complemented by slim aluminum frames, creating a contemporary look. Inside, the wardrobe offers a combination of hanging space, adjustable shelves, and pull-out drawers, providing ample storage for clothing and accessories. The smooth sliding mechanism ensures effortless access, making it a stylish and functional addition to any bedroom."
    },
    {
      title: "Spacious Sliding Wardrobe with Wooden Finish and Soft-Close Doors",
      image: Image2,
      description:
        "This spacious sliding wardrobe is designed with a warm wooden finish that brings a natural feel to the bedroom. The soft-close doors operate quietly and smoothly, adding to the overall luxury of the design. The interior features multiple hanging sections, shelving units, and a built-in shoe rack, offering organized storage solutions. The versatile design makes it suitable for both modern and traditional decor styles."
    },
    {
      title: "Contemporary Sliding Wardrobe with Mirrored Panels and LED Lighting",
      image: Image3,
      description:
        "This contemporary sliding wardrobe features mirrored panels that reflect light and create a sense of spaciousness in the room. The integrated LED lighting enhances visibility inside the wardrobe, making it easy to find items. The interior includes customizable shelving, pull-out drawers, and dedicated sections for accessories. The sleek, handle-less design adds to the wardrobe’s modern aesthetic, making it a functional and stylish storage solution."
    },
    {
      title: "Minimalist Sliding Wardrobe with Matte Finish and Clean Lines",
      image: Image4,
      description:
        "This minimalist sliding wardrobe features a matte finish and clean lines, creating a sophisticated look. The simple design is accentuated by discreet handles, offering a clutter-free appearance. Inside, the wardrobe is equipped with spacious compartments, hanging rails, and adjustable shelves, providing versatile storage options. The smooth sliding doors operate effortlessly, making this wardrobe a practical and elegant choice for any modern bedroom."
    },
    {
      title: "Luxurious Sliding Wardrobe with Glossy Finish and Customizable Interiors",
      image: Image5,
      description:
        "This luxurious sliding wardrobe boasts a high-gloss finish that adds a touch of glamour to the bedroom. The doors glide smoothly, revealing a customizable interior with options for hanging, shelving, and drawer units. The wardrobe also features a built-in jewelry organizer and tie rack, keeping accessories neatly stored and accessible. The combination of premium materials and elegant design makes this wardrobe a standout feature in any contemporary home."
    },
    {
      title: "Elegant Sliding Wardrobe with Wooden Accents and Glass Inlays",
      image: Image6,
      description:
        "This elegant sliding wardrobe combines rich wooden accents with glass inlays for a sophisticated look. The sliding doors are framed in a contrasting finish, adding visual interest to the design. Inside, the wardrobe offers ample storage with multiple hanging sections, adjustable shelves, and a built-in shoe organizer. The smooth sliding mechanism and stylish design make this wardrobe a perfect blend of form and function."
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
      <div className={styles.modernLivingRoom}>Our Sliding Wodrobe Design</div>

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

import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/dinning-13.jpg";
import Image2 from "../../../assets/Images/dinning-14.jpg";
import Image3 from "../../../assets/Images/dinning-15.jpg";
import Image4 from "../../../assets/Images/dinning-16.jpg";
import Image5 from "../../../assets/Images/dinning-17.jpg";
import Image6 from "../../../assets/Images/dinning-18.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Modern Open Dining Room with Minimalist Aesthetic and Glass Accents",
      image: Image1,
      description:
        "This modern open dining room features a minimalist aesthetic with clean lines and glass accents. The open layout seamlessly connects to the living or kitchen area, creating a spacious and airy feel. The dining table, with its sleek glass top, is complemented by contemporary chairs in neutral tones. Large windows allow natural light to flood the space, enhancing the room's bright and inviting atmosphere, perfect for casual dining and social gatherings."
    },
    {
      title: "Contemporary Open Dining Room with Bold Color Accents and Statement Lighting",
      image: Image2,
      description:
        "This contemporary open dining room is characterized by bold color accents and a striking statement light fixture that serves as a focal point. The open-plan layout connects the dining area with the adjacent spaces, creating a harmonious flow. The dining table and chairs feature vibrant colors that contrast with the neutral backdrop, while the unique lighting adds a touch of elegance and drama to the space, making it ideal for stylish dining experiences."
    },
    {
      title: "Cozy Open Dining Room with Warm Wooden Elements and Soft Lighting",
      image: Image3,
      description:
        "This cozy open dining room showcases warm wooden elements that create a welcoming and intimate atmosphere. The open layout integrates the dining space with the living or kitchen area, making it perfect for family meals and gatherings. The wooden dining table is paired with comfortable chairs, while the soft ambient lighting enhances the cozy vibe. Subtle decor and earthy tones make this space a relaxing haven for everyday dining."
    },
    {
      title: "Elegant Open Dining Room with Marble Table and Sophisticated Decor",
      image: Image4,
      description:
        "This elegant open dining room features a stunning marble dining table that serves as the centerpiece of the space. The open layout connects the dining area with the living room, creating a seamless and sophisticated flow. The decor includes luxurious elements such as plush chairs, metallic accents, and a grand chandelier, adding a touch of glamour. The refined design makes this dining room ideal for formal dinners and special occasions."
    },
    {
      title: "Chic Open Dining Room with Industrial-Style Decor and Modern Furniture",
      image: Image5,
      description:
        "This chic open dining room is designed with industrial-style decor elements, such as exposed brick walls and metal accents. The open layout creates a spacious feel, while the modern dining furniture adds a contemporary touch. The combination of wood, metal, and neutral colors creates a balanced and stylish atmosphere. Large pendant lights above the dining table provide ample lighting, making this space perfect for both casual meals and entertaining guests."
    },
    {
      title: "Luxurious Open Dining Room with High Ceilings and Panoramic Views",
      image: Image6,
      description:
        "This luxurious open dining room boasts high ceilings and panoramic views, creating a grand and expansive feel. The open-plan design allows for seamless interaction between the dining, living, and kitchen areas. The elegant dining table is paired with plush chairs and a dramatic chandelier, adding to the room's opulence. Large windows frame the stunning views, making this dining room an exceptional space for enjoying meals in a breathtaking setting."
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
      <div className={styles.modernLivingRoom}>Our Open Concept Dining Room Design</div>

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

import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/scandianBed-1.jpg";
import Image2 from "../../../assets/Images/scandianBed-2.jpg";
import Image3 from "../../../assets/Images/scandianBed-4.jpg";
import Image4 from "../../../assets/Images/scandianBed-3.jpg";
import Image5 from "../../../assets/Images/scandianBed-5.jpg";
import Image6 from "../../../assets/Images/scandianBed-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Scandinavian Bedroom with Light Wood Accents",
      image: Image1,
      description:
        "This Scandinavian bedroom features light wood accents that add warmth and elegance to the space. The clean, minimalist design is complemented by natural wood tones in the furniture and decor, creating a cozy and serene atmosphere. The use of simple lines and soft hues brings a sense of calm and tranquility, making this bedroom an ideal sanctuary for rest and relaxation."
    },
    {
      title: "Cozy Scandinavian Bedroom with Soft Textures and Neutral Colors",
      image: Image2,
      description:
        "This cozy Scandinavian bedroom is designed with soft textures and neutral colors to create a warm and inviting ambiance. Plush bedding, layered throws, and soft cushions add comfort and style, while a palette of whites, grays, and beiges enhances the room's peaceful feel. The minimalist furnishings and decor keep the space uncluttered, making it perfect for relaxation and unwinding."
    },
    {
      title: "Modern Scandinavian Bedroom with Floating Shelves and Functional Design",
      image: Image3,
      description:
        "This modern Scandinavian bedroom features floating shelves that provide a sleek and functional design element. The minimalist shelves blend seamlessly with the wall, offering storage without overwhelming the space. The room is decorated with light wood finishes and a soft color palette, creating a bright and airy atmosphere. This bedroom is designed for both comfort and practicality, making it a stylish and efficient retreat."
    },
    {
      title: "Bright Scandinavian Bedroom with Natural Light and White Walls",
      image: Image4,
      description:
        "This bright Scandinavian bedroom features white walls that reflect natural light, creating a fresh and open atmosphere. Large windows fill the room with sunlight, enhancing its airy feel. The minimalist furniture and light wood accents complement the bright space, while simple decor adds subtle visual interest. This bedroom is the perfect blend of simplicity and elegance, offering a peaceful setting for restful nights."
    },
    {
      title: "Scandinavian Bedroom with Floor-to-Ceiling Windows and Serene Views",
      image: Image5,
      description:
        "This Scandinavian bedroom boasts floor-to-ceiling windows that provide stunning views and an abundance of natural light. The design focuses on connecting the indoors with the serene outdoor environment, creating a tranquil and harmonious space. The minimalist decor, soft tones, and light wood furnishings enhance the room's calming atmosphere, making it a perfect retreat for relaxation and rejuvenation."
    },
    {
      title: "Scandinavian Bedroom with an Classic TV Unit Area",
      image: Image6,
      description:
        "This Scandinavian bedroom features an open closet area that adds a modern and practical touch to the design. The open-concept closet maximizes space and keeps the room organized while maintaining a minimalist look. Light wood finishes and a neutral color palette create a cohesive and inviting environment. This bedroom is designed for both style and functionality, providing a clean and comfortable space."
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
      <div className={styles.modernLivingRoom}>Our Scandinavian Bed Room Design</div>

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

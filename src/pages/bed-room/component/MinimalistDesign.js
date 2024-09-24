import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/minimalistBed-1.jpg";
import Image2 from "../../../assets/Images/minimalistBed-2.jpg";
import Image3 from "../../../assets/Images/minimalistBed-4.jpg";
import Image4 from "../../../assets/Images/minimalistBed-3.jpg";
import Image5 from "../../../assets/Images/minimalistBed-5.jpg";
import Image6 from "../../../assets/Images/minimalistBed-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Minimalist Bedroom with Floating Nightstands and Clean Lines",
      image: Image1,
      description:
        "This minimalist bedroom features floating nightstands that enhance the room’s clean and streamlined appearance. The design focuses on simplicity, with clean lines and a clutter-free layout that emphasizes functionality and elegance. The floating nightstands not only provide a modern touch but also maximize floor space, contributing to the room’s airy feel. Neutral colors and minimal decor elements create a serene environment, making this bedroom a perfect retreat for restful sleep."
    },
    {
      title: "Minimalist Bedroom with Low-Profile Bed and Subtle Art",
      image: Image2,
      description:
        "This minimalist bedroom is centered around a low-profile bed that offers a sleek and modern sleeping solution. The room’s design is enhanced by subtle art pieces that add sophistication without overwhelming the space. The minimalist approach is evident in the choice of simple, elegant furniture and a restrained color palette. Clean lines and open spaces contribute to a sense of calm and order, making this bedroom an ideal sanctuary for relaxation and tranquility."
    },
    {
      title: "Bright Minimalist Bedroom with Large Windows and Natural Light",
      image: Image3,
      description:
        "This bright minimalist bedroom is designed to maximize natural light with large windows that flood the space with sunlight. The design features a minimalist approach with open spaces and unobstructed views, creating an airy and inviting atmosphere. Light-colored bedding and simple decor enhance the room’s brightness and openness, while maintaining a clean and uncluttered look. This bedroom offers a serene and modern space for peaceful rest."
    },
    {
      title: "Minimalist Bedroom with Simple Furniture and Crisp White Walls",
      image: Image4,
      description:
        "This minimalist bedroom showcases a design characterized by simple furniture and crisp white walls. The use of white walls creates a bright and open feel, while the minimalist furniture keeps the space uncluttered and elegant. The design focuses on functionality and purity, with clean lines and a neutral color palette that promote a sense of calm. The simplicity of the furniture and decor highlights the beauty of minimalist design, making this bedroom a perfect example of understated elegance."
    },
    {
      title: "Minimalist Bedroom with Built-In Wardrobe and Soft Lighting",
      image: Image5,
      description:
        "This minimalist bedroom features a built-in wardrobe that complements the room’s clean and modern aesthetic. The design emphasizes simplicity with sleek lines and a clutter-free environment. Soft lighting is strategically used to enhance the room’s ambiance, creating a warm and inviting atmosphere. The minimalist approach is reflected in the choice of furniture and decor, which are both functional and stylish. This bedroom combines modern design with practical elements for a comfortable and visually appealing space."
    },
    {
      title: "Minimalist Bedroom with an Open Dressing Area",
      image: Image6,
      description:
        "This minimalist bedroom seamlessly integrates an open dressing area, creating a cohesive and functional space. The open layout promotes a sense of continuity and flow, while maintaining a minimalist aesthetic. The design features simple furniture, neutral colors, and clean lines, enhancing the room’s spacious and uncluttered feel. The open dressing area adds functionality without compromising the minimalist principles. This bedroom exemplifies the elegance of open-concept design, blending modern style with practical living solutions."
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
      <div className={styles.modernLivingRoom}>Our Minimalist Bed Room Design</div>

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

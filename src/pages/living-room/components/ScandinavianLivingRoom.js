import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/scandian-1.jpg";
import Image2 from "../../../assets/Images/scandian-2.jpg";
import Image3 from "../../../assets/Images/scandian-4.jpg";
import Image4 from "../../../assets/Images/scandian-3.jpg";
import Image5 from "../../../assets/Images/scandian-5.jpg";
import Image6 from "../../../assets/Images/scandian-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
    const data = [
        {
          title: "Scandinavian Living Room with Light Wood Accents",
          image: Image1,
          description:
            "This Scandinavian living room features light wood accents that enhance its airy and bright atmosphere. The use of pale, natural wood in furniture and decor elements brings warmth and texture to the space, while maintaining a clean and minimalist aesthetic. The room is characterized by its uncluttered design, with simple lines and functional pieces that create a sense of tranquility. Light hues and a few carefully chosen accessories contribute to the overall harmony and comfort, making this living room a perfect blend of style and functionality for modern living."
        },
        {
          title: "Cozy Scandinavian Living Room with Soft Textures and Neutral Tones",
          image: Image2,
          description:
            "This cozy Scandinavian living room is designed with soft textures and neutral tones to create a warm and inviting space. Plush textiles such as fluffy rugs, knit throws, and comfortable cushions add layers of comfort, while a neutral color palette of whites, grays, and beiges enhances the room's serenity. The furniture is minimalist yet functional, offering both style and practicality. Large windows allow natural light to fill the space, accentuating the soft textures and neutral tones. This living room is an ideal retreat for relaxation and quiet moments at home."
        },
        {
          title: "Modern Scandinavian Living Room with a Floating TV Console and Functional Design",
          image: Image3,
          description:
            "This modern Scandinavian living room showcases a floating TV console that emphasizes the room's sleek and functional design. The minimalist TV unit blends seamlessly with the wall, creating an uncluttered look while providing ample storage space. The furniture is arranged to maximize functionality and comfort, with clean lines and a thoughtful layout. Light wood finishes and a muted color palette contribute to the room's modern appeal, while large windows ensure a bright and open feel. This living room combines contemporary design with practical elements for a stylish and efficient space."
        },
        {
          title: "Bright Scandinavian Living Room with Natural Light and White Walls",
          image: Image4,
          description:
            "This bright Scandinavian living room features white walls that amplify natural light, creating a fresh and airy atmosphere. The room is designed with an emphasis on simplicity and elegance, with light-colored furniture and decor that complement the bright walls. Large windows allow sunlight to flood the space, enhancing the clean and open feel. The minimalistic design is accented with a few stylish elements, such as geometric patterns and subtle textures, adding visual interest without overwhelming the space. This living room is a perfect example of Scandinavian design's focus on light, space, and functionality."
        },
        {
          title: "Scandinavian Living Room with Floor-to-Ceiling Windows and Natural Views",
          image: Image5,
          description:
            "This Scandinavian living room features stunning floor-to-ceiling windows that offer expansive natural views and flood the space with daylight. The design emphasizes a connection to the outdoors, with the windows serving as a focal point that enhances the room's openness and brightness. The minimalist decor and light wood furnishings complement the expansive windows, creating a seamless flow between the indoor and outdoor environments. The neutral color palette and simple lines of the furniture contribute to the serene and inviting atmosphere, making this living room a perfect retreat for enjoying the natural beauty surrounding it."
        },
        {
          title: "Scandinavian Living Room with Open Kitchen Area",
          image: Image6,
          description:
            "This Scandinavian living room seamlessly integrates with an open kitchen area, creating a cohesive and functional space ideal for modern living. The open-concept design promotes interaction between the living and kitchen areas, while maintaining a clean and organized appearance. The use of light wood finishes and neutral colors throughout the space enhances its brightness and warmth. The kitchen features minimalist cabinetry and modern appliances, complementing the living area's simple yet stylish decor. This design not only maximizes space but also fosters a sense of unity and flow, perfect for both everyday living and entertaining guests."
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
      <div className={styles.modernLivingRoom}>Our Scandinavian Living Room Design</div>

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

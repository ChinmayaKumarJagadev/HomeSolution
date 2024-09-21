import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/minimalist-1.jpg";
import Image2 from "../../../assets/Images/minimalist-2.jpg";
import Image3 from "../../../assets/Images/minimalist-4.jpg";
import Image4 from "../../../assets/Images/minimalist-3.jpg";
import Image5 from "../../../assets/Images/minimalist-5.jpg";
import Image6 from "../../../assets/Images/minimalist-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
    const data = [
        {
          title: "A Minimalist Living Room with a Floating TV Unit and Clean Lines",
          image: Image1,
          description:
            "This minimalist living room features a floating TV unit that enhances the room’s clean and streamlined appearance. The design focuses on simplicity, with clean lines and a clutter-free layout that emphasizes functionality and elegance. The floating unit not only provides a modern touch but also maximizes floor space, contributing to the room’s airy feel. Neutral colors and minimal decor elements create a serene environment, while the modern furniture pieces maintain the room's sleek aesthetic. This living room epitomizes the essence of minimalist design, blending form and function effortlessly."
        },
        {
          title: "A Minimalist Living Room with a Low-Profile Sofa and Modern Art",
          image: Image2,
          description:
            "This minimalist living room is centered around a low-profile sofa that provides a stylish and contemporary seating option. The room’s design is enhanced by the inclusion of modern art, which adds a touch of sophistication and visual interest without overwhelming the space. The minimalist approach is reflected in the choice of simple, elegant furniture and a restrained color palette. Clean lines and open spaces contribute to a sense of calm and order. This living room combines comfort and aesthetics in a way that highlights the beauty of minimalist design principles."
        },
        {
          title: "A Bright Minimalist Living Room with Large Windows and Natural Light",
          image: Image3,
          description:
            "This bright minimalist living room is designed to maximize natural light with its large windows that flood the space with sunlight. The design features a minimalist approach with a focus on open spaces and unobstructed views, creating an airy and inviting atmosphere. Light-colored furnishings and simple decor enhance the room’s brightness and openness, while maintaining a clean and uncluttered look. The integration of natural light and minimalist design principles results in a serene and modern living space that is both functional and aesthetically pleasing."
        },
        {
          title: "A Minimalist Living Room with Simple Furniture and Crisp White Walls",
          image: Image4,
          description:
            "This minimalist living room showcases a design characterized by simple furniture and crisp white walls. The use of white walls creates a bright and open feel, while the minimalist furniture contributes to an uncluttered and elegant space. The room’s design focuses on functionality and purity, with clean lines and a neutral color palette that promote a sense of calm. The simplicity of the furniture and decor highlights the beauty of minimalist design, making this living room a perfect example of understated elegance and modern living."
        },
        {
          title: "A Minimalist Living Room with a Streamlined TV Unit and Soft Lighting",
          image: Image5,
          description:
            "This minimalist living room features a streamlined TV unit that complements the room’s clean and modern aesthetic. The design emphasizes simplicity with a focus on sleek lines and a clutter-free environment. Soft lighting is strategically used to enhance the room’s ambiance, creating a warm and inviting atmosphere. The minimalist approach is reflected in the choice of furniture and decor, which are both functional and stylish. This living room combines modern design principles with practical elements to create a space that is both comfortable and visually appealing."
        },
        {
          title: "A Minimalist Living Room with an Open Dining Area",
          image: Image6,
          description:
            "This minimalist living room seamlessly integrates an open dining area, creating a cohesive and versatile space. The open layout promotes a sense of continuity and flow between the living and dining areas, while maintaining a minimalist aesthetic. The design features simple furniture, neutral colors, and clean lines, enhancing the room’s spacious and uncluttered feel. The integration of the dining area adds functionality without compromising the minimalist principles. This living room exemplifies the elegance of open-concept design, blending modern style with practical living solutions."
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
      <div className={styles.modernLivingRoom}>Our Minimalist Living Room Design</div>

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

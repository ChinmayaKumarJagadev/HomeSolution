import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/dinning-7.jpg";
import Image2 from "../../../assets/Images/dinning-8.jpg";
import Image3 from "../../../assets/Images/dinning-9.jpg";
import Image4 from "../../../assets/Images/dinning-10.jpg";
import Image5 from "../../../assets/Images/dinning-11.jpg";
import Image6 from "../../../assets/Images/dinning-12.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Elegant Formal Dining Room with Crystal Chandelier and Velvet Seating",
      image: Image1,
      description:
        "This elegant formal dining room features a grand crystal chandelier that serves as a stunning centerpiece. The velvet-upholstered seating provides luxurious comfort, while the large dining table, with its polished wood finish, exudes timeless elegance. The room is adorned with classic decor elements such as intricate moldings and a neutral color palette, creating a sophisticated atmosphere for hosting elegant dinners and gatherings."
    },
    {
      title: "Traditional Formal Dining Room with Mahogany Furniture and Classic Decor",
      image: Image2,
      description:
        "This traditional formal dining room showcases rich mahogany furniture, including a large dining table and high-back chairs with ornate carvings. The classic decor, featuring antique pieces and framed artwork, enhances the room's timeless appeal. The ambient lighting from a chandelier and wall sconces adds warmth, making this space ideal for formal dinners and special occasions."
    },
    {
      title: "Modern Formal Dining Room with Minimalist Design and Statement Lighting",
      image: Image3,
      description:
        "This modern formal dining room is characterized by its minimalist design and statement lighting. The sleek dining table is paired with stylish chairs in neutral tones, while the bold pendant light fixture above the table adds a contemporary touch. The clean lines and open layout make the space feel airy and sophisticated, perfect for both formal gatherings and intimate dinners."
    },
    {
      title: "Luxury Formal Dining Room with Marble Table and Gold Accents",
      image: Image4,
      description:
        "This luxury formal dining room features a stunning marble dining table complemented by gold-accented chairs and decor. The rich textures and high-end materials create an opulent atmosphere, while the large windows allow natural light to illuminate the space. A grand chandelier and elegant table settings make this dining room the perfect setting for lavish dinners and celebrations."
    },
    {
      title: "Contemporary Formal Dining Room with Glass Table and Artistic Decor",
      image: Image5,
      description:
        "This contemporary formal dining room boasts a sleek glass dining table that adds a modern touch to the space. The artistic decor, including unique wall art and sculptural pieces, creates a dynamic and visually engaging environment. The dining chairs feature bold designs, while the subtle lighting enhances the room's sophisticated yet inviting ambiance, making it perfect for formal dining with a creative flair."
    },
    {
      title: "Classic Formal Dining Room with Rich Wood Finishes and Elegant Drapery",
      image: Image6,
      description:
        "This classic formal dining room is defined by its rich wood finishes and elegant drapery, creating a warm and inviting atmosphere. The large dining table is surrounded by upholstered chairs, offering both comfort and style. The room is adorned with traditional elements such as a grand chandelier, patterned area rug, and detailed woodwork, making it an ideal space for formal gatherings and family dinners."
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
      <div className={styles.modernLivingRoom}>Our Formal Dining Room Design</div>

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

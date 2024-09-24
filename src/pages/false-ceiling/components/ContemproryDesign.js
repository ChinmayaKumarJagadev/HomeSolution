import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/false-ceiling-1.jpg";
import Image2 from "../../../assets/Images/false-ceiling-2.jpg";
import Image3 from "../../../assets/Images/false-ceiling-3.jpg";
import Image4 from "../../../assets/Images/false-ceiling-4.jpg";
import Image5 from "../../../assets/Images/false-ceiling-5.jpg";
import Image6 from "../../../assets/Images/false-ceiling-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; // Import Modal component

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
      title: "A Modern Living Room with Gypsum False Ceiling and LED Lighting",
      image: Image1,
      description:
        "This modern living room features a stunning gypsum false ceiling with integrated LED lighting that enhances the overall ambiance. The ceiling's sleek design, featuring clean lines and subtle recessed lighting, creates a sophisticated and welcoming atmosphere. The use of gypsum allows for creative shapes and patterns, adding a unique touch to the living area. This space is perfect for entertaining guests or enjoying a relaxing evening with family."
    },
    {
      title: "A Spacious Kitchen with a Gypsum Ceiling and Functional Lighting",
      image: Image2,
      description:
        "This spacious kitchen is elevated by a gypsum false ceiling design that blends style and functionality. The ceiling features built-in lighting, providing ample illumination for cooking and dining. The smooth, sleek finish of the gypsum ceiling complements the modern kitchen layout, making the space feel open and inviting. The addition of subtle patterns in the ceiling design adds a touch of elegance without overwhelming the room’s aesthetic."
    },
    {
      title: "A Cozy Dining Room with a Gypsum Ceiling and Chandeliers",
      image: Image3,
      description:
        "This cozy dining room boasts a beautiful gypsum false ceiling adorned with chandeliers, adding a touch of luxury and warmth to the space. The ceiling design features layered elements and recessed lighting, creating a dynamic look that enhances the dining experience. The gypsum ceiling’s elegant curves and intricate patterns complement the dining area’s decor, making it an inviting space for family meals and gatherings."
    },
    {
      title: "A Contemporary Drawing Room with a Gypsum Ceiling and Accent Lighting",
      image: Image4,
      description:
        "This contemporary drawing room showcases a stylish gypsum false ceiling with accent lighting, creating a striking visual appeal. The ceiling's geometric patterns and clean lines provide a modern look, while the integrated lighting highlights the room’s key features. The gypsum design adds depth and texture to the space, making it a perfect area for hosting guests or enjoying a quiet evening. The combination of style and function makes this drawing room stand out."
    },
    {
      title: "A Modern Bedroom with a Gypsum Ceiling and Warm Wooden Elements",
      image: Image5,
      description:
        "This modern bedroom design highlights the seamless integration of a gypsum false ceiling with warm wooden elements, creating a cozy and inviting atmosphere. The ceiling features recessed lighting and smooth textures, enhancing the room's contemporary feel. The rich textures and earthy tones of the wooden accents provide a perfect contrast to the sleek ceiling, offering a harmonious blend of natural charm and modern style. Large windows allow natural light to fill the room, further accentuating the elegant gypsum ceiling design."
    },
    {
      title: "A Stylish Bathroom with a Gypsum Ceiling and Cove Lighting",
      image: Image6,
      description:
        "This stylish bathroom features a gypsum false ceiling with cove lighting that creates a spa-like atmosphere. The ceiling’s smooth finish and subtle curves add a touch of elegance to the space, while the soft lighting enhances its calming ambiance. The gypsum material is moisture-resistant, making it an ideal choice for bathrooms. This design combines aesthetics and practicality, transforming the bathroom into a luxurious retreat."
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
      <div className={styles.modernLivingRoom}>Our Gypsum False Ceiling Design</div>

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

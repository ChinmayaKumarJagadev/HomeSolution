import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/living-1.jpg";
import Image2 from "../../../assets/Images/living-2.jpg";
import Image3 from "../../../assets/Images/living-4.jpg";
import Image4 from "../../../assets/Images/living-3.jpg";
import Image5 from "../../../assets/Images/living-5.jpg";
import Image6 from "../../../assets/Images/living-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; // Import Modal component

function LivingRoomDesign() {
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
      title: "A Contemporary Living Room With a Floating TV Unit and LED Backlighting",
      image: Image1,
      description:
        "This contemporary living room showcases a stunning floating TV unit with sleek lines and minimalistic design, complemented by ambient LED backlighting that enhances the overall atmosphere. The spacious layout and modern furnishings make it perfect for a comfortable and stylish living space. Soft hues and carefully chosen decor create a harmonious blend of sophistication and warmth. The use of natural elements such as wooden accents and greenery adds a refreshing touch, making this living room an ideal space for relaxation and entertainment. Experience a blend of modern technology and timeless elegance in this exquisite living room."
    },
    {
      title: "A Luxe Living Room With a Marble TV Wall and Sleek Minimal Furniture",
      image: Image2,
      description:
        "This luxurious living room design features a stunning marble TV wall that serves as the focal point, exuding elegance and sophistication. The sleek minimal furniture enhances the sense of space, while the neutral color palette creates a calm and serene ambiance. Plush seating arrangements invite comfort, making it an ideal setting for both relaxation and social gatherings. The combination of high-end materials and understated decor ensures a timeless appeal. Whether entertaining guests or enjoying a quiet evening, this living room offers a refined yet inviting atmosphere for any occasion."
    },
    {
      title: "A Modern Living Room with Wooden Finishing",
      image: Image3,
      description:
        "This modern living room features exquisite wooden finishing that brings warmth and character to the space. The rich textures and earthy tones create a cozy yet sophisticated environment, perfect for family gatherings or quiet evenings. Stylish furniture pieces complement the wooden elements, while large windows allow natural light to flood the room, enhancing its inviting feel. The design strikes a balance between modern aesthetics and natural beauty, offering a space that is both functional and visually appealing. Experience the perfect blend of contemporary style and natural charm in this beautifully crafted living room."
    },
    {
      title: "A Modern Living Room with Open Dinning Area",
      image: Image4,
      description:
        "This modern living room seamlessly integrates an open dining area, creating a cohesive and versatile space that is perfect for entertaining and daily living. The open layout promotes a sense of continuity and flow, while the carefully selected furnishings and decor maintain a distinct identity for each area. With a focus on functionality and style, the design features clean lines, comfortable seating, and a dining setup that is both elegant and practical. The use of neutral tones and strategic lighting enhances the spacious feel, making this living room an ideal setting for family meals and social gatherings."
    },
    {
      title: "A Modern Living Room with Study Table Setup",
      image: Image5,
      description:
        "This modern living room design includes a dedicated study table setup, providing a perfect balance between relaxation and productivity. The carefully curated workspace is integrated into the living area, making it ideal for those who work from home or need a quiet spot for study. The overall design is characterized by clean lines, modern furniture, and a soothing color palette that promotes focus and creativity. Large windows offer ample natural light, creating a bright and inspiring environment. Whether working or unwinding, this living room offers a harmonious blend of comfort and functionality."
    },
    {
      title: "A Modern Living Room with Open Kitchen Area",
      image: Image6,
      description:
        "This modern living room features an open kitchen area, creating a fluid and inviting space that is perfect for contemporary living. The open layout fosters a sense of connectivity, allowing for easy interaction between the living and kitchen areas. Sleek cabinetry and modern appliances complement the stylish living room furnishings, while a neutral color scheme ensures a cohesive and polished look. The design emphasizes both aesthetics and functionality, making it an ideal setting for cooking, dining, and socializing. Enjoy the convenience and elegance of an open-concept living space that caters to all your lifestyle needs."
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
      <div className={styles.modernLivingRoom}>Our Contemporary Living Room Design</div>

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

export default LivingRoomDesign;

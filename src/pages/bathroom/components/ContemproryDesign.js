import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/halfbath-1.jpg";
import Image2 from "../../../assets/Images/halfbath-2.jpg";
import Image3 from "../../../assets/Images/halfbath-3.jpg";
import Image4 from "../../../assets/Images/halfbath-4.jpg";
import Image5 from "../../../assets/Images/halfbath-5.jpg";
import Image6 from "../../../assets/Images/halfbath-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; 

function ContemporaryDesign() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const data = [
    {
      title: "Modern Half Bathroom with Floating Vanity and Geometric Tiles",
      image: Image1,
      description:
        "This modern half bathroom features a sleek floating vanity paired with geometric tiles that add visual interest to the space. The minimalist design is complemented by a round mirror and subtle lighting, creating a stylish and functional environment. The compact layout maximizes space while maintaining a clean and contemporary aesthetic, perfect for guest use."
    },
    {
      title: "Elegant Half Bathroom with Marble Accents and Gold Fixtures",
      image: Image2,
      description:
        "This elegant half bathroom is adorned with marble accents and luxurious gold fixtures, creating a sophisticated and timeless look. The compact sink and mirror are framed with stylish decor, while the soft lighting enhances the room's ambiance. This bathroom design is ideal for adding a touch of luxury to small spaces, making it both practical and visually appealing."
    },
    {
      title: "Cozy Half Bathroom with Wooden Vanity and Warm Lighting",
      image: Image3,
      description:
        "This cozy half bathroom features a charming wooden vanity that brings warmth and character to the space. The soft, warm lighting creates an inviting atmosphere, while the carefully chosen accessories add a personal touch. The compact layout and natural materials make this bathroom a perfect blend of comfort and style, ideal for creating a welcoming environment for guests."
    },
    {
      title: "Contemporary Half Bathroom with Black and White Contrast",
      image: Image4,
      description:
        "This contemporary half bathroom makes a bold statement with its striking black and white color scheme. The sleek fixtures and modern decor create a polished look, while the compact sink and mirror maintain a minimalist vibe. The contrasting colors and sharp lines give this small bathroom a sophisticated and edgy appeal, perfect for modern homes."
    },
    {
      title: "Minimalist Half Bathroom with Vessel Sink and Wall-Mounted Faucet",
      image: Image5,
      description:
        "This minimalist half bathroom features a stylish vessel sink paired with a wall-mounted faucet, creating a clean and uncluttered look. The neutral color palette and simple lines enhance the room's modern aesthetic, while the functional layout makes the most of the small space. This design is ideal for those who appreciate sleek and understated elegance."
    },
    {
      title: "Luxury Half Bathroom with Mosaic Tiles and Elegant Fixtures",
      image: Image6,
      description:
        "This luxury half bathroom exudes elegance with its mosaic tile accents and sophisticated fixtures. The compact sink is complemented by a beautifully framed mirror and decorative lighting, adding a touch of glamour to the space. The use of high-end materials and intricate details makes this small bathroom a luxurious retreat, perfect for impressing guests."
    }
  ];
  


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
      <div className={styles.modernLivingRoom}>Our Half BathRoom Design</div>

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

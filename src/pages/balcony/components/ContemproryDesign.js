import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/balcony-1.jpg";
import Image2 from "../../../assets/Images/balcony-2.jpg";
import Image3 from "../../../assets/Images/balcony-3.jpg";
import Image4 from "../../../assets/Images/balcony-4.jpg";
import Image5 from "../../../assets/Images/balcony-5.jpg";
import Image6 from "../../../assets/Images/balcony-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; 

function ContemporaryDesign() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const data = [
    {
      title: "Modern Balcony with Cozy Seating and Glass Railing",
      image: Image1,
      description:
        "This modern balcony features cozy seating arrangements, perfect for relaxing and enjoying the view. The glass railing adds a sleek, contemporary touch, allowing for unobstructed views. With minimal decor and neutral tones, this balcony design is ideal for those who prefer a clean and sophisticated outdoor space."
    },
    {
      title: "Urban Balcony with Vertical Garden and Chic Furniture",
      image: Image2,
      description:
        "This urban balcony is designed with a stylish vertical garden that adds a lush green element to the space. Chic furniture pieces, including a comfortable lounge chair and a small coffee table, make it a perfect spot for enjoying morning coffee or evening drinks. The combination of greenery and modern design creates a refreshing and vibrant atmosphere."
    },
    {
      title: "Rustic Balcony with Wooden Accents and Hanging Lights",
      image: Image3,
      description:
        "This rustic balcony design features warm wooden accents, giving the space a cozy, inviting feel. The addition of hanging lights adds a magical glow, making it a perfect spot for evening relaxation. With comfortable seating and natural decor elements, this balcony is a charming retreat in the heart of the home."
    },
    {
      title: "Mediterranean Balcony with Terracotta Tiles and Iron Railings",
      image: Image4,
      description:
        "Inspired by Mediterranean style, this balcony showcases terracotta tiles and intricate iron railings. The vibrant color scheme and lush potted plants create a warm and welcoming space. A small bistro set provides the perfect spot for enjoying a leisurely breakfast or evening wine while soaking in the surroundings."
    },
    {
      title: "Minimalist Balcony with Sleek Furniture and Green Accents",
      image: Image5,
      description:
        "This minimalist balcony features sleek, modern furniture and a few well-placed green accents for a fresh, contemporary look. The simple design and neutral color palette create a serene atmosphere, making it an ideal space for quiet contemplation or enjoying a good book."
    },
    {
      title: "Bohemian Balcony with Colorful Textiles and Hanging Plants",
      image: Image6,
      description:
        "This bohemian balcony is vibrant and eclectic, with colorful textiles and an abundance of hanging plants. The cozy seating area is adorned with patterned cushions and throws, creating a comfortable and laid-back vibe. This balcony is perfect for those who love a touch of artistic flair and a relaxing atmosphere."
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
      <div className={styles.modernLivingRoom}>Our True Balcony Design</div>

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

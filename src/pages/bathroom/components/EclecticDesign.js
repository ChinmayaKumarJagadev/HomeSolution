import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/guestbath-1.jpg";
import Image2 from "../../../assets/Images/guestbath-2.jpg";
import Image3 from "../../../assets/Images/guestbath-3.jpg";
import Image4 from "../../../assets/Images/guestbath-4.jpg";
import Image5 from "../../../assets/Images/guestbath-5.jpg";
import Image6 from "../../../assets/Images/guestbath-6.jpg";
import rightArrow from "../../../assets/Images/right-arrow (2).png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "Elegant Guest Bathroom with Marble Accents and Modern Fixtures",
      image: Image1,
      description:
        "This elegant guest bathroom features marble accents and sleek modern fixtures. The vanity is topped with a marble countertop, complemented by a chic mirror and stylish lighting. The neutral color palette and high-quality finishes create a sophisticated and welcoming space, perfect for guests to freshen up in comfort and style."
    },
    {
      title: "Contemporary Guest Bathroom with Glass Shower and Minimalist Decor",
      image: Image2,
      description:
        "This contemporary guest bathroom is designed with a minimalist approach, featuring a glass shower and simple, clean lines. The spacious walk-in shower is fitted with modern fixtures, and the vanity has a streamlined design. The use of light colors and minimalist decor creates a bright and airy atmosphere, making this bathroom feel open and inviting."
    },
    {
      title: "Chic Guest Bathroom with Bold Tile Patterns and Elegant Vanity",
      image: Image3,
      description:
        "This chic guest bathroom showcases bold tile patterns that add a stylish and dynamic touch to the space. The elegant vanity is topped with a quartz countertop and paired with a decorative mirror and lighting. The contrast of patterns and textures creates visual interest, making this bathroom a standout feature in any home."
    },
    {
      title: "Cozy Guest Bathroom with Warm Tones and Rustic Details",
      image: Image4,
      description:
        "This cozy guest bathroom features warm tones and rustic details that create a welcoming and comfortable environment. The vanity is made from reclaimed wood, and the room is accented with vintage-inspired fixtures and a soft color palette. The combination of warm hues and rustic elements makes this bathroom a perfect retreat for guests."
    },
    {
      title: "Luxurious Guest Bathroom with Freestanding Tub and Gold Accents",
      image: Image5,
      description:
        "This luxurious guest bathroom is highlighted by a freestanding tub and elegant gold accents. The spacious layout includes a beautiful vanity and large mirror, while the gold fixtures and hardware add a touch of glamour. The blend of luxury and comfort makes this bathroom a relaxing space for guests to enjoy."
    },
    {
      title: "Modern Guest Bathroom with Floating Vanity and Sleek Finishes",
      image: Image6,
      description:
        "This modern guest bathroom features a floating vanity with sleek finishes and contemporary fixtures. The minimalist design includes a frameless mirror and simple lighting, while the neutral tones create a calm and serene atmosphere. The streamlined look and high-end finishes make this bathroom a stylish and functional space for guests."
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
    document.querySelector(`.${styles.scrollContainer5}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer5}`).scrollLeft += 200;
  };

  return (
    <div className={styles.livingRoomDesignContainer}>
      <div className={styles.modernLivingRoom}>
      Our Guest BathRoom Design
      </div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer5}>
          {data.map((item, index) => (
            <div className={styles.livingRoomCardContainer} key={index}>
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
                <button
                  className={styles.moreInfoLivingRoom}
                  onClick={() => handleMoreInfoClick(item)}
                >
                  Explore Now
                  <Image src={rightArrow} alt="err" width={25} />
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

export default EclecticRoomDesign;

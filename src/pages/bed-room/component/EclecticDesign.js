import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/eclecticBed-1.jpg";
import Image2 from "../../../assets/Images/eclecticBed-2.jpg";
import Image3 from "../../../assets/Images/eclecticBed-4.jpg";
import Image4 from "../../../assets/Images/eclecticBed-3.jpg";
import Image5 from "../../../assets/Images/eclecticBed-5.jpg";
import Image6 from "../../../assets/Images/eclecticBed-6.jpg";
import rightArrow from "../../../assets/Images/arrow-right.png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "An Eclectic Bedroom with Vibrant Patterns and Artistic Decor",
      image: Image1,
      description:
        "This eclectic bedroom showcases a mix of vibrant patterns and artistic decor, creating a visually captivating and unique space. Bold patterns on the bedding and curtains add depth and character, while artful decor pieces, such as abstract wall art and creative accessories, enhance the room’s distinct style. The combination of diverse elements results in a dynamic and inviting atmosphere that reflects a love for creativity and individual expression."
    },
    {
      title: "An Eclectic Bedroom with Bold Colors and Unique Furnishings",
      image: Image2,
      description:
        "This eclectic bedroom embraces bold colors and unique furnishings to create a lively and personal space. The use of vibrant hues, like deep blues and bright yellows, adds energy and character. Unique furnishings, including vintage finds and handcrafted pieces, contribute to the room’s eclectic charm. The blend of colorful textiles and distinctive furniture ensures a visually engaging and comfortable bedroom that stands out."
    },
    {
      title: "Eclectic Bedroom with a Wooden Bed Frame and Colorful Decor",
      image: Image3,
      description:
        "This eclectic bedroom features a wooden bed frame that brings a touch of rustic warmth to the space. The natural texture of the wood contrasts beautifully with colorful decor elements, such as patterned pillows and vibrant rugs. The mix of traditional wooden furniture and eclectic decorations creates a harmonious and inviting bedroom that blends comfort with artistic flair."
    },
    {
      title: "An Eclectic Bedroom with Open Closet and Mixed Patterns",
      image: Image4,
      description:
        "This eclectic bedroom includes an open closet area, adding functionality and style. The room features a mix of patterns, from geometric prints to florals, layered across bedding, rugs, and wall decor. The open closet design enhances the spacious feel of the room, while the eclectic mix of patterns and colors creates a lively and personalized space."
    },
    {
      title: "An Eclectic Bedroom with Playful Textiles and Quirky Decor",
      image: Image5,
      description:
        "This eclectic bedroom is characterized by playful textiles and quirky decor, resulting in a vibrant and whimsical space. The room features a variety of patterns, from stripes to florals, on cushions, bedding, and curtains. Quirky decor pieces, such as unique wall art and creative accents, add to the room’s fun and lively atmosphere. The eclectic mix of patterns and playful details ensures a space full of personality and charm."
    },
    {
      title: "An Eclectic Bedroom with a Cozy Seating Area and Artistic Touches",
      image: Image6,
      description:
        "This eclectic bedroom includes a cozy seating area that adds comfort and style to the space. Artistic touches, such as colorful paintings and eclectic furnishings, infuse the room with character. The seating area provides a perfect spot for relaxation, while the overall design blends eclectic elements and cozy comfort, making it a unique and inviting retreat."
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
        Our Eclectic Bed Room Design
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

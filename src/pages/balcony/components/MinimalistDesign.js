import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/balcony-13.jpg";
import Image2 from "../../../assets/Images/balcony-14.jpg";
import Image3 from "../../../assets/Images/balcony-15.jpg";
import Image4 from "../../../assets/Images/balcony-16.jpg";
import Image5 from "../../../assets/Images/balcony-17.jpg";
import Image6 from "../../../assets/Images/balcony-18.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Elegant Mezzanine Balcony with Glass Railings and Scenic Views",
      image: Image1,
      description:
        "This elegant mezzanine balcony features sleek glass railings that provide an unobstructed view of the surroundings. The open design allows natural light to flood the space, creating a bright and airy atmosphere. Comfortable seating arrangements make it a perfect spot for relaxation or enjoying morning coffee while taking in the scenic views."
    },
    {
      title: "Contemporary Mezzanine Balcony with Wooden Decking and Cozy Furniture",
      image: Image2,
      description:
        "This contemporary mezzanine balcony showcases beautiful wooden decking that adds warmth to the design. The cozy furniture invites relaxation, making it an ideal space for reading or enjoying quiet evenings. With its modern aesthetic and inviting ambiance, this balcony serves as a perfect retreat above the bustling living area."
    },
    {
      title: "Stylish Mezzanine Balcony with Urban Decor and Potted Plants",
      image: Image3,
      description:
        "This stylish mezzanine balcony features urban decor elements such as metal accents and vibrant potted plants. The design incorporates seating and a small table, creating an inviting atmosphere for social gatherings. The greenery adds a refreshing touch, making this balcony a lively and enjoyable outdoor space."
    },
    {
      title: "Chic Mezzanine Balcony with Rustic Charm and Hanging Lights",
      image: Image4,
      description:
        "This chic mezzanine balcony embraces rustic charm with wooden beams and hanging string lights. The intimate setting is perfect for evening relaxation or entertaining guests. The combination of rustic elements and comfortable seating creates a warm and inviting space that complements the overall home design."
    },
    {
      title: "Luxurious Mezzanine Balcony with Designer Furniture and Panoramic Views",
      image: Image5,
      description:
        "This luxurious mezzanine balcony features designer furniture that combines style and comfort. The panoramic views are framed by elegant railings, making it a stunning focal point of the home. Ideal for entertaining or unwinding, this balcony offers an upscale experience in an elevated outdoor setting."
    },
    {
      title: "Minimalist Mezzanine Balcony with Clean Lines and Subtle Decor",
      image: Image6,
      description:
        "This minimalist mezzanine balcony emphasizes clean lines and a simple aesthetic. The understated decor enhances the open feel of the space, while the small seating area provides a cozy nook for relaxation. Perfect for those who appreciate simplicity, this balcony serves as a tranquil escape above the main living area."
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
      <div className={styles.modernLivingRoom}>Our Mezzanine Balcony Design</div>

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

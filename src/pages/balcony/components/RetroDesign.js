import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/balcony-19.jpg";
import Image2 from "../../../assets/Images/balcony-20.jpg";
import Image3 from "../../../assets/Images/balcony-21.jpg";
import Image4 from "../../../assets/Images/balcony-22.jpg";
import Image5 from "../../../assets/Images/balcony-23.jpg";
import Image6 from "../../../assets/Images/balcony-24.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "Sleek Suspended Balcony with Glass Railings and City Views",
      image: Image1,
      description:
        "This sleek suspended balcony features transparent glass railings that provide breathtaking city views. The minimalist design incorporates modern outdoor furniture, creating an open and inviting space. Perfect for morning coffee or evening relaxation, this balcony is a stylish extension of the living area, offering a unique perspective on urban living."
    },
    {
      title: "Chic Suspended Balcony with Rustic Wood Accents and Cozy Seating",
      image: Image2,
      description:
        "This chic suspended balcony combines rustic wood accents with comfortable seating for a warm, inviting atmosphere. The wooden decking adds charm, while the surrounding greenery creates a tranquil escape. Ideal for entertaining or enjoying quiet moments, this balcony seamlessly blends nature with modern design."
    },
    {
      title: "Contemporary Suspended Balcony with Steel Framework and Urban Vibe",
      image: Image3,
      description:
        "This contemporary suspended balcony showcases a strong steel framework that enhances its urban aesthetic. The open layout features sleek furniture and decorative planters, creating a stylish outdoor living space. This balcony is perfect for hosting gatherings, providing a unique experience above the bustling city below."
    },
    {
      title: "Elegant Suspended Balcony with Retractable Canopy and Lounge Area",
      image: Image4,
      description:
        "This elegant suspended balcony features a retractable canopy that offers shade and comfort. The lounge area, furnished with plush seating, is perfect for unwinding after a long day. The balcony’s design harmonizes with the surrounding architecture, making it a serene retreat high above the ground."
    },
    {
      title: "Modern Suspended Balcony with Bold Colors and Artistic Decor",
      image: Image5,
      description:
        "This modern suspended balcony embraces bold colors and artistic decor, creating a vibrant outdoor space. The unique furniture and striking art pieces make it a dynamic area for relaxation or entertaining. Large sliding doors connect the balcony to the interior, blurring the lines between indoor and outdoor living."
    },
    {
      title: "Minimalist Suspended Balcony with Clean Lines and Natural Elements",
      image: Image6,
      description:
        "This minimalist suspended balcony emphasizes clean lines and natural elements. The understated design features simple furniture and organic materials, creating a calming atmosphere. Ideal for meditation or quiet contemplation, this balcony serves as a peaceful retreat high above the hustle and bustle."
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
    document.querySelector(`.${styles.scrollContainer4}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer4}`).scrollLeft += 200;
  };

  return (
    <div className={styles.livingRoomDesignContainer}>
      <div className={styles.modernLivingRoom}>Our Suspended Balcony Design</div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer4}>
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

export default RetroRoomDesign;

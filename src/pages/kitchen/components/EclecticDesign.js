import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/open-1.jpg";
import Image2 from "../../../assets/Images/open-2.jpg";
import Image3 from "../../../assets/Images/open-4.jpg";
import Image4 from "../../../assets/Images/open-3.jpg";
import Image5 from "../../../assets/Images/open-5.jpg";
import Image6 from "../../../assets/Images/open-6.jpg";
import rightArrow from "../../../assets/Images/arrow-right.png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "Contemporary Open Modular Kitchen with Central Island and Pendant Lights",
      image: Image1,
      description:
        "This contemporary open modular kitchen features a central island that serves as both a prep space and a casual dining area. The sleek cabinetry and integrated appliances create a seamless look, while the pendant lights add a stylish touch. The open layout connects effortlessly to the living area, making it perfect for entertaining and family gatherings."
    },
    {
      title: "Modern Open Modular Kitchen with Minimalist Design and Spacious Layout",
      image: Image2,
      description:
        "This modern open modular kitchen boasts a minimalist design with clean lines and a spacious layout. The open plan enhances the sense of space and allows for easy interaction between the kitchen and living areas. High-quality finishes and state-of-the-art appliances contribute to the kitchen's sophisticated appeal, making it a functional and elegant centerpiece of the home."
    },
    {
      title: "Elegant Open Modular Kitchen with Wooden Accents and Ample Storage",
      image: Image3,
      description:
        "This elegant open modular kitchen features warm wooden accents that add a touch of natural beauty to the space. The open layout provides ample storage and counter space, while the cabinetry seamlessly blends with the overall design. The combination of natural materials and modern elements makes this kitchen both inviting and practical, perfect for family meals and entertaining."
    },
    {
      title: "Sleek Open Modular Kitchen with Breakfast Bar and Integrated Appliances",
      image: Image4,
      description:
        "This sleek open modular kitchen includes a convenient breakfast bar that offers additional seating and workspace. The integrated appliances maintain a streamlined look, while the open layout enhances connectivity with the living area. The modern finishes and functional design make this kitchen ideal for both cooking and casual dining, creating a versatile space for everyday use."
    },
    {
      title: "Chic Open Modular Kitchen with Glossy Finish and Smart Storage Solutions",
      image: Image5,
      description:
        "This chic open modular kitchen features a glossy finish that reflects light beautifully, creating a bright and airy atmosphere. The smart storage solutions ensure everything is within easy reach, while the open layout allows for seamless flow between cooking and dining areas. The sophisticated design and practical features make this kitchen a stylish and functional addition to any home."
    },
    {
      title: "Luxury Open Modular Kitchen with Marble Countertops and High-End Appliances",
      image: Image6,
      description:
        "This luxury open modular kitchen boasts marble countertops and high-end appliances, creating an opulent cooking environment. The open layout allows for easy interaction with guests, while the high-quality finishes and elegant design make a statement. This kitchen combines functionality with luxury, making it the perfect space for gourmet cooking and entertaining."
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
      Our Open Modular Kitchen Design
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

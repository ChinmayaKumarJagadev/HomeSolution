import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/parallel-1.jpg";
import Image2 from "../../../assets/Images/parallel-2.jpg";
import Image3 from "../../../assets/Images/parallel-3.jpg";
import Image4 from "../../../assets/Images/parallel-4.jpg";
import Image5 from "../../../assets/Images/parallel-5.jpg";
import Image6 from "../../../assets/Images/parallel-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; 

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
      title: "A Modern Parallel Kitchen with Sleek Cabinets and Efficient Storage",
      image: Image1, // Replace with appropriate image reference
      description:
        "This modern parallel kitchen design features sleek cabinets with a high-gloss finish, providing a streamlined look. The dual-counter layout maximizes space and efficiency, making it ideal for multitasking. Ample storage solutions, such as pull-out shelves and overhead cabinets, keep the kitchen organized and clutter-free. The countertops are made of durable quartz, and the integrated lighting under the cabinets enhances visibility, making it a perfect space for culinary creativity."
    },
    {
      title: "A Spacious Parallel Kitchen with Integrated Appliances and Functional Design",
      image: Image2, // Replace with appropriate image reference
      description:
        "This spacious parallel kitchen layout is designed for convenience and functionality. It features integrated appliances that blend seamlessly with the cabinetry, creating a cohesive look. The dual countertops provide separate areas for cooking and prepping, making meal preparation efficient. The gypsum ceiling with built-in LED lighting adds a modern touch, while the sleek finish and minimalistic design make the kitchen appear larger and more open."
    },
    {
      title: "A Contemporary Parallel Kitchen with High-Gloss Finish and Modern Features",
      image: Image3, // Replace with appropriate image reference
      description:
        "This contemporary parallel kitchen boasts a high-gloss finish, reflecting light and creating a bright, airy atmosphere. The parallel layout includes ample counter space for cooking and storage, with modern features such as soft-close drawers and hidden handles. The backsplash and countertop are made of matching materials, adding to the kitchen’s cohesive and stylish design. The gypsum ceiling with subtle patterns adds a touch of sophistication without overwhelming the space."
    },
    {
      title: "A Sleek Parallel Kitchen with Minimalist Design and Ample Storage",
      image: Image4, // Replace with appropriate image reference
      description:
        "This sleek parallel kitchen design features a minimalist aesthetic with clean lines and an uncluttered look. The dual counters offer plenty of workspace, while the upper and lower cabinets provide ample storage. The use of neutral colors and modern materials, such as matte-finish cabinetry and quartz countertops, creates a contemporary vibe. Recessed lighting in the gypsum ceiling ensures the kitchen is well-lit, enhancing its functionality and style."
    },
    {
      title: "A Functional Parallel Kitchen with Smart Storage Solutions",
      image: Image5, // Replace with appropriate image reference
      description:
        "This functional parallel kitchen is designed with smart storage solutions, including pull-out shelves, built-in organizers, and overhead cabinets to maximize space. The parallel layout allows for efficient movement, making it easy to switch between cooking and prepping. The gypsum ceiling with integrated lighting adds a modern touch, while the use of contrasting colors between the cabinets and countertops adds visual interest."
    },
    {
      title: "A Luxurious Parallel Kitchen with Marble Accents and Elegant Lighting",
      image: Image6, // Replace with appropriate image reference
      description:
        "This luxurious parallel kitchen features elegant marble accents and premium finishes. The dual countertops provide separate areas for food preparation and dining, while the built-in cabinets offer ample storage. The gypsum ceiling, adorned with chandeliers and cove lighting, enhances the kitchen’s luxurious feel. The use of high-quality materials and sophisticated lighting creates a stunning space that combines style and functionality."
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
      <div className={styles.modernLivingRoom}>Our Parallel Modular Kitchen Design</div>

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

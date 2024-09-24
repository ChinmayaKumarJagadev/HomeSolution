import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/false-ceiling-7.jpg";
import Image2 from "../../../assets/Images/false-ceiling-8.jpg";
import Image3 from "../../../assets/Images/false-ceiling-9.jpg";
import Image4 from "../../../assets/Images/false-ceiling-10.jpg";
import Image5 from "../../../assets/Images/false-ceiling-11.jpg";
import Image6 from "../../../assets/Images/false-ceiling-12.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Elegant Living Room with Plaster of Paris Ceiling Design",
      image: Image1,
      description:
        "This elegant living room features a beautifully crafted Plaster of Paris ceiling design that adds a touch of sophistication to the space. The intricate patterns and moldings enhance the room's aesthetics while providing a seamless finish. Soft lighting integrated into the ceiling creates a warm and inviting ambiance, making this living room perfect for both relaxation and entertaining guests."
    },
    {
      title: "Cozy Bedroom with Plaster of Paris Feature Wall",
      image: Image2,
      description:
        "This cozy bedroom showcases a stunning Plaster of Paris feature wall that serves as a focal point in the room. The textured finish adds depth and character, while the neutral color palette creates a calming environment. Complemented by soft textiles and warm lighting, this bedroom design promotes a serene atmosphere, making it an ideal retreat for restful nights."
    },
    {
      title: "Stylish Kitchen with Plaster of Paris Accents",
      image: Image3,
      description:
        "This stylish kitchen incorporates Plaster of Paris accents throughout the design, adding a modern flair to the space. The sleek finish on the walls and ceiling enhances the contemporary feel, while the open layout allows for easy movement and functionality. Natural light floods the kitchen, highlighting the beautiful details of the Plaster of Paris work, making it an inviting space for cooking and gatherings."
    },
    {
      title: "Chic Dining Room with Plaster of Paris Lighting Fixtures",
      image: Image4,
      description:
        "This chic dining room features exquisite Plaster of Paris lighting fixtures that elevate the dining experience. The decorative ceiling design complements the elegant furnishings, creating a harmonious atmosphere. Soft, diffused light enhances the room’s warmth and sophistication, making it an ideal setting for family meals and entertaining guests in style."
    },
    {
      title: "Modern Bathroom with Plaster of Paris Shelving and Finishes",
      image: Image5,
      description:
        "This modern bathroom showcases Plaster of Paris shelving and finishes, combining elegance with functionality. The smooth surfaces and stylish design create a sleek look, while the practical shelving provides ample storage for toiletries and decor. Soft, ambient lighting highlights the Plaster of Paris elements, transforming the bathroom into a luxurious retreat for relaxation."
    },
    {
      title: "Contemporary Office with Plaster of Paris Ceiling and Wall Panels",
      image: Image6,
      description:
        "This contemporary office features a Plaster of Paris ceiling and wall panels that enhance the professional environment. The clean lines and smooth finish create a polished look, while the strategic lighting adds brightness and focus. This design promotes productivity and creativity, making it an ideal workspace for modern professionals."
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

  const scrollLeft = () => {
    document.querySelector(`.${styles.scrollContainer2}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer2}`).scrollLeft += 200;
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
      <div className={styles.modernLivingRoom}>Our POP (Plaster of Paris) False Ceiling Design</div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer2}>
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
                <button className={styles.moreInfoLivingRoom}   onClick={() => handleMoreInfoClick(item)}>Explore Now<Image src={rightArrow} alt="err" width={25}/></button>
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

export default ScandinavianLivingRoom;

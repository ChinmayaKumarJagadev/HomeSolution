import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/false-ceiling-13.jpg";
import Image2 from "../../../assets/Images/false-ceiling-14.jpg";
import Image3 from "../../../assets/Images/false-ceiling-15.jpg";
import Image4 from "../../../assets/Images/false-ceiling-16.jpg";
import Image5 from "../../../assets/Images/false-ceiling-17.jpg";
import Image6 from "../../../assets/Images/false-ceiling-18.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "Modern Living Room with Sleek PVC False Ceiling and Recessed Lighting",
      image: Image1,
      description:
        "This modern living room features a sleek PVC false ceiling that adds a contemporary touch to the space. The recessed lighting embedded within the ceiling creates a warm and inviting ambiance, enhancing the room's overall aesthetic. The clean lines and smooth finish of the PVC design complement the stylish furniture, making this living room a perfect blend of sophistication and comfort."
    },
    {
      title: "Contemporary Bedroom with PVC False Ceiling and Soft LED Glow",
      image: Image2,
      description:
        "This contemporary bedroom showcases a PVC false ceiling with a soft LED glow, creating a tranquil and relaxing environment. The smooth surface of the ceiling enhances the room's modern vibe, while the integrated lighting adds warmth and elegance. The minimalist design, combined with cozy furnishings, makes this bedroom an ideal sanctuary for restful sleep."
    },
    {
      title: "Stylish Dining Room with PVC False Ceiling and Elegant Chandeliers",
      image: Image3,
      description:
        "This stylish dining room features a PVC false ceiling adorned with elegant chandeliers, elevating the dining experience. The glossy finish of the PVC reflects light beautifully, creating a bright and airy atmosphere. The combination of modern ceiling design and classic decor elements makes this dining room perfect for hosting family gatherings and special occasions."
    },
    {
      title: "Functional Kitchen with PVC False Ceiling and Ample Lighting",
      image: Image4,
      description:
        "This functional kitchen showcases a PVC false ceiling that enhances the space's practicality and aesthetics. The ceiling design incorporates ample lighting options, ensuring a well-lit environment for cooking and dining. The clean lines and durable finish of the PVC material provide both style and ease of maintenance, making this kitchen a modern culinary haven."
    },
    {
      title: "Elegant Home Office with PVC False Ceiling and Focused Lighting",
      image: Image5,
      description:
        "This elegant home office features a PVC false ceiling designed for focused lighting, creating an inspiring workspace. The smooth, modern surface of the ceiling enhances the overall aesthetic, while the integrated lighting provides optimal illumination for productivity. Stylish furniture and decor complete the look, making this office a comfortable and motivating environment."
    },
    {
      title: "Chic Bathroom with PVC False Ceiling and Ambient Lighting",
      image: Image6,
      description:
        "This chic bathroom showcases a PVC false ceiling that adds a sleek and modern touch to the space. The ambient lighting integrated within the ceiling creates a soothing atmosphere, perfect for relaxation. The waterproof nature of PVC makes it an ideal choice for bathrooms, while the stylish design enhances the overall elegance of this serene retreat."
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
      <div className={styles.modernLivingRoom}>Our PVC False Ceiling Design</div>

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

import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/wooden-1.jpg";
import Image2 from "../../../assets/Images/wooden-2.jpg";
import Image3 from "../../../assets/Images/wooden-4.jpg";
import Image4 from "../../../assets/Images/wooden-3.jpg";
import Image5 from "../../../assets/Images/wooden-5.jpg";
import Image6 from "../../../assets/Images/wooden-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Elegant Living Room with Wooden False Ceiling and Warm Lighting",
      image: Image1,
      description:
        "This elegant living room features a beautifully crafted wooden false ceiling that adds warmth and sophistication to the space. The rich textures of the wood complement the soft lighting, creating an inviting atmosphere for relaxation and entertaining. The intricate woodwork enhances the room's character while maintaining a modern aesthetic, making this living room a perfect blend of style and comfort."
    },
    {
      title: "Cozy Bedroom with Wooden Beams and Natural Accents",
      image: Image2,
      description:
        "This cozy bedroom showcases a wooden false ceiling with exposed beams that create a rustic yet modern vibe. The natural wood tones add warmth and depth to the space, while the subtle decor enhances the room's inviting feel. Soft textiles and a calming color palette complement the wooden elements, making this bedroom a serene retreat for restful sleep."
    },
    {
      title: "Stylish Dining Room with Wooden False Ceiling and Elegant Chandeliers",
      image: Image3,
      description:
        "This stylish dining room features a wooden false ceiling adorned with elegant chandeliers, elevating the dining experience. The warm wood tones and intricate ceiling design create a sophisticated backdrop for family meals and gatherings. The combination of natural materials and soft lighting enhances the ambiance, making this dining room perfect for entertaining guests in style."
    },
    {
      title: "Modern Kitchen with Sleek Wooden False Ceiling and Open Layout",
      image: Image4,
      description:
        "This modern kitchen showcases a sleek wooden false ceiling that adds a touch of elegance to the open layout. The clean lines and polished finish create a contemporary feel, while the natural wood brings warmth to the space. The integration of functional lighting within the ceiling enhances visibility for cooking and dining, making this kitchen both stylish and practical."
    },
    {
      title: "Chic Home Office with Wooden False Ceiling and Natural Light",
      image: Image5,
      description:
        "This chic home office features a wooden false ceiling that adds character and warmth to the workspace. The clean, modern lines of the ceiling complement the minimalist furniture, creating an inspiring environment for productivity. Large windows allow natural light to fill the room, highlighting the beautiful woodwork and enhancing the overall inviting atmosphere."
    },
    {
      title: "Contemporary Bathroom with Wooden False Ceiling and Spa-Like Feel",
      image: Image6,
      description:
        "This contemporary bathroom features a wooden false ceiling that adds a luxurious touch to the space. The warm wood tones combined with soft lighting create a spa-like ambiance, perfect for relaxation. The ceiling design enhances the modern aesthetic while maintaining a sense of tranquility, making this bathroom a serene retreat for unwinding after a long day."
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
      <div className={styles.modernLivingRoom}>Our Wooden False Ceiling Design</div>

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

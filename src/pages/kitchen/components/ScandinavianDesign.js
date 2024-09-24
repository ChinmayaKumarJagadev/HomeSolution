import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/straight-1.jpg";
import Image2 from "../../../assets/Images/straight-2.jpg";
import Image3 from "../../../assets/Images/straight-3.jpg";
import Image4 from "../../../assets/Images/straight-4.jpg";
import Image5 from "../../../assets/Images/straight-5.jpg";
import Image6 from "../../../assets/Images/straight-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Elegant Straight Modular Kitchen with Sleek Cabinetry",
      image: Image1,
      description:
        "This elegant straight modular kitchen design features sleek cabinetry with a high-gloss finish, adding a touch of sophistication to the space. The linear layout maximizes space and ensures easy access to all areas, making cooking efficient and enjoyable. Integrated storage solutions and modern appliances blend seamlessly into the design, while under-cabinet lighting enhances the overall ambiance. This kitchen is perfect for those who appreciate a minimalist yet functional aesthetic."
    },
    {
      title: "Cozy Straight Modular Kitchen with Warm Wooden Finishes",
      image: Image2,
      description:
        "This cozy straight modular kitchen showcases warm wooden finishes that bring a natural and inviting feel to the space. The simple, linear design optimizes the layout, making it ideal for compact homes. The cabinetry offers ample storage, while the open shelving adds a personal touch. Soft, ambient lighting and earthy tones create a welcoming atmosphere, perfect for casual meals and family gatherings."
    },
    {
      title: "Stylish Straight Modular Kitchen with Marble Backsplash",
      image: Image3,
      description:
        "This stylish straight modular kitchen features a stunning marble backsplash that adds a luxurious touch to the space. The linear layout is designed for maximum efficiency, with all essential appliances and storage within easy reach. The sleek cabinetry and marble accents create a cohesive and contemporary look, while natural light enhances the beauty of the materials. This kitchen is a chic and functional space for everyday cooking and entertaining."
    },
    {
      title: "Chic Straight Modular Kitchen with Integrated Lighting",
      image: Image4,
      description:
        "This chic straight modular kitchen design is elevated by integrated lighting that highlights the clean lines and modern features. The sleek cabinetry and high-end finishes provide a sophisticated look, while the linear layout ensures efficient use of space. The built-in lighting under the cabinets adds a warm glow, making this kitchen not only functional but also visually appealing for hosting and meal preparation."
    },
    {
      title: "Modern Straight Modular Kitchen with Open Shelving",
      image: Image5,
      description:
        "This modern straight modular kitchen design combines open shelving with streamlined cabinetry, creating a balanced and airy feel. The straight layout maximizes workspace, with all cooking essentials within arm’s reach. The smooth finishes and minimalist design make the kitchen easy to maintain, while the open shelves provide a perfect display area for dishes and decor. This design is ideal for those who appreciate a clutter-free and contemporary kitchen."
    },
    {
      title: "Contemporary Straight Modular Kitchen with Bold Accents",
      image: Image6,
      description:
        "This contemporary straight modular kitchen features bold accents that add a dynamic touch to the sleek design. The linear layout is optimized for functionality, with ample storage and high-end appliances. Vibrant colors or metallic finishes on the cabinets create a striking contrast with the neutral countertops, making the kitchen a focal point of the home. Efficient lighting and smart storage solutions make this kitchen both stylish and practical for modern living."
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
      <div className={styles.modernLivingRoom}>Our Straight Modular Kitchen Design</div>

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

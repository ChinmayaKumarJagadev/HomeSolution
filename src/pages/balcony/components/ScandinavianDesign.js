import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/balcony-7.jpg";
import Image2 from "../../../assets/Images/balcony-8.jpg";
import Image3 from "../../../assets/Images/balcony-9.jpg";
import Image4 from "../../../assets/Images/balcony-10.jpg";
import Image5 from "../../../assets/Images/balcony-11.jpg";
import Image6 from "../../../assets/Images/balcony-12.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Elegant Juliet Balcony with Wrought Iron Railing and French Doors",
      image: Image1,
      description:
        "This elegant Juliet balcony features a beautifully crafted wrought iron railing paired with classic French doors. The intricate design of the railing adds a touch of sophistication, while the large glass doors allow for plenty of natural light. This balcony is perfect for enjoying a breath of fresh air while adding a charming architectural detail to the home's facade."
    },
    {
      title: "Modern Juliet Balcony with Glass Railing and Minimalist Aesthetic",
      image: Image2,
      description:
        "This modern Juliet balcony showcases a sleek glass railing that complements the minimalist design of the space. The clean lines and transparent railing create an open and airy feel, allowing for unobstructed views. This design is ideal for contemporary homes looking to incorporate a stylish and functional balcony feature."
    },
    {
      title: "Romantic Juliet Balcony with Floral Accents and Vintage Charm",
      image: Image3,
      description:
        "This romantic Juliet balcony is adorned with floral accents and vintage charm. The decorative iron railing is complemented by trailing plants and vibrant flowers, creating a picturesque setting. The arched doors and classic detailing enhance the balcony's quaint and inviting appearance, making it a perfect spot for enjoying a quiet moment."
    },
    {
      title: "Industrial Juliet Balcony with Steel Railing and Urban Style",
      image: Image4,
      description:
        "This industrial Juliet balcony features a sturdy steel railing that adds an urban edge to the design. The simple yet robust structure complements the industrial aesthetic, making it an ideal addition to modern city apartments. The balcony's streamlined look is perfect for those who appreciate minimalist and functional designs."
    },
    {
      title: "Traditional Juliet Balcony with Ornate Railing and Arched Windows",
      image: Image5,
      description:
        "This traditional Juliet balcony is highlighted by its ornate railing and arched windows, creating a timeless and elegant look. The intricate metalwork of the railing adds visual interest, while the arched windows provide a classic touch. This balcony is perfect for adding a touch of Old World charm to any home."
    },
    {
      title: "Contemporary Juliet Balcony with Sleek Metal Railing and Large Sliding Doors",
      image: Image6,
      description:
        "This contemporary Juliet balcony features a sleek metal railing and large sliding doors, blending modern style with practicality. The slim railing design and expansive glass doors maximize the sense of space and light, making it an excellent choice for enhancing the aesthetic appeal of modern homes and apartments."
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
      <div className={styles.modernLivingRoom}>Our Juliet Balcony Design</div>

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

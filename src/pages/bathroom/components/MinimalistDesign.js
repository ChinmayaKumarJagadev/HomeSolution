import React, {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/bathroom-1.jpg";
import Image2 from "../../../assets/Images/bathroom-2.jpg";
import Image3 from "../../../assets/Images/bathroom-3.jpg";
import Image4 from "../../../assets/Images/bathroom-4.jpg";
import Image5 from "../../../assets/Images/bathroom-5.jpg";
import Image6 from "../../../assets/Images/bathroom-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function MinimalistRoomDesign() {
  const data = [
    {
      title: "Modern Quarter Bathroom with Compact Sink and Wall-Mounted Faucet",
      image: Image1,
      description:
        "This modern quarter bathroom is designed for small spaces, featuring a compact sink and a sleek wall-mounted faucet. The minimalist aesthetic is enhanced by clean lines and neutral tones, making the room feel more spacious. A small mirror with built-in lighting adds both functionality and style, while subtle decor elements complete the look, making this bathroom a perfect choice for maximizing space without compromising on design."
    },
    {
      title: "Contemporary Quarter Bathroom with Bold Tile Patterns and Floating Vanity",
      image: Image2,
      description:
        "This contemporary quarter bathroom stands out with its bold tile patterns and floating vanity. The striking tiles create a dynamic visual effect, while the floating vanity provides storage without taking up floor space. A round mirror and sleek fixtures add to the modern look. This compact yet stylish bathroom design is ideal for making a statement in small spaces."
    },
    {
      title: "Chic Quarter Bathroom with Subway Tiles and Brass Fixtures",
      image: Image3,
      description:
        "This chic quarter bathroom features classic subway tiles paired with elegant brass fixtures. The simple yet sophisticated design includes a petite pedestal sink and a stylish mirror, creating a timeless aesthetic. The use of brass accents adds warmth and character, making this small bathroom feel both welcoming and refined, perfect for powder rooms or guest bathrooms."
    },
    {
      title: "Minimalist Quarter Bathroom with Geometric Sink and Frameless Mirror",
      image: Image4,
      description:
        "This minimalist quarter bathroom is defined by its geometric sink and frameless mirror, creating a clean and streamlined look. The compact design is perfect for small spaces, with subtle lighting and minimal decor enhancing the room's modern feel. The neutral color palette and sleek fixtures make this bathroom an ideal choice for those who appreciate understated elegance and functionality."
    },
    {
      title: "Industrial-Style Quarter Bathroom with Concrete Sink and Exposed Pipes",
      image: Image5,
      description:
        "This industrial-style quarter bathroom features a concrete sink and exposed pipes, creating a raw and edgy look. The small space is maximized with a wall-mounted sink and open shelving for storage. The use of metal and concrete elements adds to the industrial vibe, while the simple lighting and minimal decor keep the design cohesive and functional, ideal for contemporary lofts or urban spaces."
    },
    {
      title: "Elegant Quarter Bathroom with Marble Accents and Crystal Wall Sconces",
      image: Image6,
      description:
        "This elegant quarter bathroom is adorned with marble accents and crystal wall sconces, exuding luxury in a small space. The compact vanity with marble countertop adds sophistication, while the crystal sconces provide soft, ambient lighting. This bathroom is designed to impress, making it a perfect choice for high-end homes or guest powder rooms."
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
      <div className={styles.modernLivingRoom}>Our Quarter BathRoom Design</div>

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

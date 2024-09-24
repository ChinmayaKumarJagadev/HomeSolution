import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/fullbath-1.jpg";
import Image2 from "../../../assets/Images/fullbath-2.jpg";
import Image3 from "../../../assets/Images/fullbath-3.jpg";
import Image4 from "../../../assets/Images/fullbath-4.jpg";
import Image5 from "../../../assets/Images/fullbath-5.jpg";
import Image6 from "../../../assets/Images/fullbath-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function ScandinavianLivingRoom() {
  const data = [
    {
      title: "Modern Full Bathroom with Freestanding Tub and Glass Shower Enclosure",
      image: Image1,
      description:
        "This modern full bathroom features a luxurious freestanding tub as its focal point, paired with a sleek glass shower enclosure. The contemporary design includes a floating vanity with ample storage and a large mirror, enhancing the sense of space. The neutral color palette and clean lines create a serene and spa-like atmosphere, perfect for relaxation and rejuvenation."
    },
    {
      title: "Elegant Full Bathroom with Marble Accents and Double Vanity",
      image: Image2,
      description:
        "This elegant full bathroom boasts marble accents throughout, including the countertops and flooring, adding a touch of sophistication. The double vanity provides ample space for two, while the frameless glass shower and freestanding tub complete the luxurious setup. The soft lighting and classic decor elements create a refined and comfortable environment for everyday use."
    },
    {
      title: "Luxury Full Bathroom with Walk-In Shower and Built-In Storage",
      image: Image3,
      description:
        "This luxury full bathroom features a spacious walk-in shower with a rainfall showerhead and built-in seating, offering a relaxing experience. The custom cabinetry and built-in storage solutions keep the space organized, while the high-end finishes and elegant lighting fixtures enhance the room's opulent feel. This bathroom is designed for those who appreciate both style and functionality."
    },
    {
      title: "Contemporary Full Bathroom with Floating Vanity and Large Format Tiles",
      image: Image4,
      description:
        "This contemporary full bathroom showcases a floating vanity with sleek, integrated sinks and a wall-mounted faucet, creating a clean and modern look. The large format tiles on the walls and floor add a sense of spaciousness, while the frameless glass shower maintains the room's open feel. The minimalist design and subtle decor make this bathroom both stylish and easy to maintain."
    },
    {
      title: "Classic Full Bathroom with Clawfoot Tub and Vintage Fixtures",
      image: Image5,
      description:
        "This classic full bathroom features a charming clawfoot tub, vintage fixtures, and a pedestal sink, creating a timeless and elegant look. The room is adorned with subway tiles and a mosaic floor pattern, adding character and charm. The combination of antique elements and modern amenities makes this bathroom a perfect blend of old-world charm and contemporary comfort."
    },
    {
      title: "Spa-Inspired Full Bathroom with Natural Stone and Organic Decor",
      image: Image6,
      description:
        "This spa-inspired full bathroom is designed with natural stone surfaces and organic decor elements, creating a tranquil and relaxing atmosphere. The large soaking tub and open shower area with a pebble floor add to the spa-like experience. The use of earthy tones and textures, along with soft lighting, enhances the room's calming and rejuvenating ambiance."
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
      <div className={styles.modernLivingRoom}>Our Full BathRoom Design</div>

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

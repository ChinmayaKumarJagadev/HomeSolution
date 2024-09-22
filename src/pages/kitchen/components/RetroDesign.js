import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/t-shape-1.jpg";
import Image2 from "../../../assets/Images/t-shape-2.jpg";
import Image3 from "../../../assets/Images/t-shape-3.jpg";
import Image4 from "../../../assets/Images/t-shape-4.jpg";
import Image5 from "../../../assets/Images/t-shape-5.jpg";
import Image6 from "../../../assets/Images/t-shape-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "Elegant T-Shaped Modular Kitchen with Marble Countertops",
      image: Image1,
      description:
        "This elegant T-shaped modular kitchen features stunning marble countertops that add a touch of luxury to the space. The T-shaped layout provides a central workstation, ideal for meal preparation and serving. Sleek cabinetry and modern appliances enhance the contemporary look, making this kitchen both stylish and highly functional for cooking and entertaining."
    },
    {
      title: "Modern T-Shaped Modular Kitchen with High-Gloss Finish",
      image: Image2,
      description:
        "This modern T-shaped modular kitchen showcases a high-gloss finish that reflects light beautifully, creating a bright and airy atmosphere. The T-shaped island offers additional counter space and storage, perfect for cooking and casual dining. The integrated appliances and minimalist design contribute to the sleek, modern vibe, making this kitchen a stunning centerpiece for any home."
    },
    {
      title: "Cozy T-Shaped Modular Kitchen with Wooden Accents",
      image: Image3,
      description:
        "This cozy T-shaped modular kitchen features warm wooden accents that bring a natural, inviting feel to the space. The T-shaped layout is ideal for small to medium-sized kitchens, offering an efficient workflow and additional storage. The combination of wood tones and modern finishes creates a balanced design, perfect for family cooking and casual dining."
    },
    {
      title: "Stylish T-Shaped Modular Kitchen with Open Shelving",
      image: Image4,
      description:
        "This stylish T-shaped modular kitchen incorporates open shelving, providing easy access to kitchen essentials while adding a decorative element. The T-shaped design optimizes space and functionality, with the central island serving as a focal point for food preparation and social gatherings. The use of natural materials and bright colors makes this kitchen both practical and visually appealing."
    },
    {
      title: "Chic T-Shaped Modular Kitchen with Contrasting Color Scheme",
      image: Image5,
      description:
        "This chic T-shaped modular kitchen features a striking contrasting color scheme, with dark cabinetry paired with light countertops. The T-shaped layout maximizes counter space and provides a comfortable work area for cooking and serving. The modern design, combined with high-quality finishes, creates a sophisticated look that is perfect for contemporary homes."
    },
    {
      title: "Contemporary T-Shaped Modular Kitchen with Smart Storage Solutions",
      image: Image6,
      description:
        "This contemporary T-shaped modular kitchen is designed with smart storage solutions to keep the space organized and clutter-free. The T-shaped layout offers ample counter space for meal prep and an efficient work triangle between the sink, stove, and refrigerator. The clean lines and sleek finishes create a polished look, while the clever use of storage enhances the kitchen’s functionality."
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
      <div className={styles.modernLivingRoom}>Our T-Shape Modular Kitchen Design</div>

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

import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/wodrobe-19.jpg";
import Image2 from "../../../assets/Images/wodrobe-20.jpg";
import Image3 from "../../../assets/Images/wodrobe-21.jpg";
import Image4 from "../../../assets/Images/wodrobe-22.jpg";
import Image5 from "../../../assets/Images/wodrobe-23.jpg";
import Image6 from "../../../assets/Images/wodrobe-24.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "Elegant Mirror Wardrobe with Sliding Doors",
      image: Image1,
      description:
        "This elegant mirror wardrobe features sliding doors that reflect light, making the space feel larger and brighter. The interior is thoughtfully designed with ample hanging space and shelves for organized storage. Its sleek design and modern finish make it a stunning addition to any bedroom decor."
    },
    {
      title: "Contemporary Mirror Wardrobe with Full-Length Mirrors",
      image: Image2,
      description:
        "This contemporary mirror wardrobe showcases full-length mirrors on the doors, providing a functional and stylish feature. The spacious interior includes adjustable shelves and hanging rails, ensuring versatility for all your clothing needs. Its minimalist design complements modern interiors beautifully."
    },
    {
      title: "Chic Mirror Wardrobe with Integrated Lighting",
      image: Image3,
      description:
        "This chic mirror wardrobe comes equipped with integrated lighting that illuminates the interior, making it easy to find your outfits. The sleek mirrors add a touch of elegance, while the ample storage solutions enhance organization. This wardrobe is perfect for adding a luxurious feel to your bedroom."
    },
    {
      title: "Rustic Mirror Wardrobe with Wooden Accents",
      image: Image4,
      description:
        "This rustic mirror wardrobe combines wooden accents with mirrored doors, creating a warm and inviting atmosphere. The design features a mix of hanging space and shelves, providing practical storage while maintaining a charming aesthetic. It's an ideal choice for a cozy, farmhouse-style bedroom."
    },
    {
      title: "Modern Mirror Wardrobe with Geometric Patterns",
      image: Image5,
      description:
        "This modern mirror wardrobe features doors with geometric patterns, adding a contemporary twist to traditional designs. The spacious interior offers plenty of storage options, while the reflective surfaces enhance the overall brightness of the room. Its unique look makes it a standout piece in any modern bedroom."
    },
    {
      title: "Luxurious Mirror Wardrobe with High-Quality Finishes",
      image: Image6,
      description:
        "This luxurious mirror wardrobe is crafted with high-quality finishes and elegant design. The sliding mirrored doors not only provide functionality but also add a touch of sophistication. The thoughtfully designed interior includes multiple compartments for organized storage, making this wardrobe a perfect blend of style and practicality."
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
      <div className={styles.modernLivingRoom}>Our Mirror Wodrobe Design</div>

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

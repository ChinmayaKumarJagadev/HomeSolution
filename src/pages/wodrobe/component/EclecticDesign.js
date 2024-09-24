import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/wodrobe-25.jpg";
import Image2 from "../../../assets/Images/wodrobe-26.jpg";
import Image3 from "../../../assets/Images/wodrobe-27.jpg";
import Image4 from "../../../assets/Images/wodrobe-28.jpg";
import Image5 from "../../../assets/Images/wodrobe-29.jpg";
import Image6 from "../../../assets/Images/wodrobe-30.jpg";
import rightArrow from "../../../assets/Images/right-arrow (2).png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "Elegant Glass Wardrobe with Frameless Doors",
      image: Image1,
      description:
        "This elegant glass wardrobe features frameless doors that create a sleek and modern look. The transparent design allows for a clear view of the interior, showcasing neatly organized clothing and accessories. With ample storage space and adjustable shelves, this wardrobe combines style with practicality, making it a stunning addition to any bedroom."
    },
    {
      title: "Contemporary Glass Wardrobe with Mirrored Finish",
      image: Image2,
      description:
        "This contemporary glass wardrobe showcases a mirrored finish that enhances light and gives the illusion of a larger space. The interior is designed for optimal organization, featuring hanging rods and shelves. Its modern aesthetic makes it a perfect choice for minimalist and stylish interiors."
    },
    {
      title: "Chic Glass Wardrobe with LED Lighting",
      image: Image3,
      description:
        "This chic glass wardrobe is equipped with LED lighting that illuminates the interior beautifully. The glass doors provide a modern touch, while the thoughtful layout maximizes storage efficiency. This wardrobe not only serves a functional purpose but also adds a luxurious feel to your bedroom."
    },
    {
      title: "Stylish Glass Wardrobe with Frosted Panels",
      image: Image4,
      description:
        "This stylish glass wardrobe features frosted panels that offer privacy while maintaining a contemporary look. The interior layout includes versatile storage options for all your clothing needs. Its elegant design makes it a sophisticated choice for any modern bedroom."
    },
    {
      title: "Luxury Glass Wardrobe with Customizable Shelving",
      image: Image5,
      description:
        "This luxury glass wardrobe boasts customizable shelving and hanging options, allowing for personalized organization. The glass doors create a striking visual impact while the spacious interior ensures that everything is within reach. This wardrobe is perfect for those seeking a blend of elegance and functionality."
    },
    {
      title: "Modern Glass Wardrobe with Minimalist Design",
      image: Image6,
      description:
        "This modern glass wardrobe features a minimalist design that emphasizes simplicity and functionality. The glass doors provide easy access to your wardrobe while maintaining an open feel. With smart storage solutions and a sleek appearance, this wardrobe is ideal for contemporary living spaces."
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
    document.querySelector(`.${styles.scrollContainer5}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer5}`).scrollLeft += 200;
  };

  return (
    <div className={styles.livingRoomDesignContainer}>
      <div className={styles.modernLivingRoom}>
      Our Glass Wodrobe Design
      </div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer5}>
          {data.map((item, index) => (
            <div className={styles.livingRoomCardContainer} key={index}>
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
                <button
                  className={styles.moreInfoLivingRoom}
                  onClick={() => handleMoreInfoClick(item)}
                >
                  Explore Now
                  <Image src={rightArrow} alt="err" width={25} />
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

export default EclecticRoomDesign;

import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/dinning-25.jpg";
import Image2 from "../../../assets/Images/dinning-26.jpg";
import Image3 from "../../../assets/Images/dinning-27.jpg";
import Image4 from "../../../assets/Images/dinning-28.jpg";
import Image5 from "../../../assets/Images/dinning-29.jpg";
import Image6 from "../../../assets/Images/dinning-30.jpg";
import rightArrow from "../../../assets/Images/arrow-right.png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "Elegant Luxury Dining Room with Crystal Chandelier and Velvet Seating",
      image: Image1,
      description:
        "This elegant luxury dining room features a stunning crystal chandelier that illuminates the space with a warm, inviting glow. The dining table is surrounded by plush velvet seating, adding a touch of opulence. The use of rich textures and high-quality materials creates a sophisticated atmosphere, making it the perfect setting for formal dinners and special occasions."
    },
    {
      title: "Modern Luxury Dining Room with Marble Table and Sleek Decor",
      image: Image2,
      description:
        "This modern luxury dining room showcases a striking marble dining table that serves as the focal point of the space. The sleek decor, including minimalist artwork and contemporary lighting, enhances the sophisticated ambiance. The room’s open layout and high-end finishes create an airy and elegant environment, ideal for hosting stylish dinner parties."
    },
    {
      title: "Classic Luxury Dining Room with Grand Table and Ornate Detailing",
      image: Image3,
      description:
        "This classic luxury dining room features a grand dining table with ornate detailing, exuding timeless elegance. The room is adorned with exquisite decor, including intricate moldings and a statement chandelier. The rich color palette and luxurious materials create a refined and stately atmosphere, perfect for formal dining and grand celebrations."
    },
    {
      title: "Opulent Luxury Dining Room with Gold Accents and Art Deco Style",
      image: Image4,
      description:
        "This opulent luxury dining room is characterized by gold accents and art deco styling, creating a glamorous and sophisticated look. The dining table is complemented by luxurious chairs with gilded detailing, while the bold geometric patterns and rich textures add depth and visual interest. The combination of luxurious materials and bold design makes this dining room a true statement piece."
    },
    {
      title: "Chic Luxury Dining Room with Glass Table and Designer Lighting",
      image: Image5,
      description:
        "This chic luxury dining room features a sleek glass dining table that adds a modern touch to the space. Designer lighting fixtures create a stunning visual effect, while the minimalist decor keeps the focus on the room’s elegant features. The combination of glass, metal, and soft fabrics creates a sophisticated yet welcoming atmosphere, perfect for contemporary dining experiences."
    },
    {
      title: "Sophisticated Luxury Dining Room with Walnut Table and Leather Seating",
      image: Image6,
      description:
        "This sophisticated luxury dining room showcases a beautiful walnut dining table paired with plush leather seating. The room is accented with modern art and statement lighting, creating a refined and contemporary look. The use of rich wood tones and high-quality materials makes this dining room a luxurious and comfortable space for entertaining guests."
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
      Our Luxury Dining Room Design
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

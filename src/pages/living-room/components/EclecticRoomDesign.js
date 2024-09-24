import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/eclectic-1.jpg";
import Image2 from "../../../assets/Images/eclectic-2.jpg";
import Image3 from "../../../assets/Images/eclectic-4.jpg";
import Image4 from "../../../assets/Images/eclectic-3.jpg";
import Image5 from "../../../assets/Images/eclectic-5.jpg";
import Image6 from "../../../assets/Images/eclectic-6.jpg";
import rightArrow from "../../../assets/Images/right-arrow (2).png";
import Modal from "./InteriorDetailsPage";

import Image from "next/image";

function EclecticRoomDesign() {
  const data = [
    {
      title: "An Eclectic Living Room with Vibrant Patterns and Artful Decor",
      image: Image1,
      description:
        "This eclectic living room is a celebration of vibrant patterns and artful decor, creating a visually stimulating and unique space. The room features an array of bold, colorful patterns that adorn textiles and artwork, adding depth and character to the environment. Artful decor pieces, from abstract sculptures to eclectic wall hangings, contribute to the room's distinctive style. The blend of diverse patterns and eclectic decor elements ensures a dynamic and inviting atmosphere, where every corner reveals a new layer of artistic expression and creativity.",
    },
    {
      title: "An Eclectic Living Room with Bold Colors and Unique Furnishings",
      image: Image2,
      description:
        "This eclectic living room embraces bold colors and unique furnishings to create a lively and distinctive space. The use of vibrant hues, such as deep blues, fiery reds, and bright yellows, infuses the room with energy and personality. Unique furnishings, including vintage finds and custom pieces, add to the room's eclectic charm. The mix of colorful textiles, unusual shapes, and artistic details ensures that the living room is both visually engaging and comfortably inviting. This design exemplifies how bold color choices and eclectic furnishings can come together to form a cohesive and stylish interior.",
    },
    {
      title: "Eclectic Living Room with Wooden Sofa Set",
      image: Image3,
      description:
        "This eclectic living room features a wooden sofa set that adds a touch of rustic charm and warmth to the space. The wooden furniture, with its rich textures and natural finish, contrasts beautifully with the room’s eclectic decor elements. Complemented by a mix of colorful cushions, patterned rugs, and diverse art pieces, the wooden sofa set serves as a centerpiece that anchors the room's unique style. The combination of traditional wooden furniture and eclectic decor creates a harmonious and inviting space that blends comfort with artistic flair.",
    },
    {
      title: "An Eclectic Living Room with Open Dining Area",
      image: Image4,
      description:
        "This eclectic living room features an open dining area that seamlessly integrates with the living space, promoting a sense of fluidity and connection. The open layout allows for a harmonious flow between the two areas, enhancing the room's versatility. Eclectic decor elements, such as vibrant artwork, mixed-pattern textiles, and unique furniture pieces, are used to define the space and add visual interest. The open dining area complements the eclectic living room, creating a dynamic and engaging environment where functionality meets artistic expression.",
    },
    {
      title: "An Eclectic Living Room with Mixed Patterns and Playful Details",
      image: Image5,
      description:
        "This eclectic living room is characterized by its use of mixed patterns and playful details, resulting in a vibrant and whimsical space. The room features an assortment of patterns, from geometric prints to floral designs, layered across cushions, rugs, and curtains. Playful details, such as quirky artwork and decorative accents, contribute to the room's fun and lively atmosphere. The eclectic mix of patterns and details ensures that the space is visually stimulating and full of personality, reflecting a unique and creative approach to interior design.",
    },
    {
      title: "An Eclectic Living Room with Open Kitchen Area",
      image: Image6,
      description:
        "This eclectic living room incorporates an open kitchen area, blending functionality with style in a seamless manner. The open layout allows for easy interaction between the living and kitchen spaces, creating a cohesive and versatile environment. Eclectic design elements, including colorful artwork, eclectic furnishings, and unique decor items, infuse the room with character and charm. The integration of the kitchen area adds practicality while maintaining the room's distinctive style. This design exemplifies how an open kitchen can enhance an eclectic living room, offering both convenience and visual appeal.",
    },
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
        Our Eclectic Living Room Design
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

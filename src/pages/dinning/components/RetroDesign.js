import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/dinning-19.jpg";
import Image2 from "../../../assets/Images/dinning-20.jpg";
import Image3 from "../../../assets/Images/dinning-21.jpg";
import Image4 from "../../../assets/Images/dinning-22.jpg";
import Image5 from "../../../assets/Images/dinning-23.jpg";
import Image6 from "../../../assets/Images/dinning-24.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "Elegant Traditional Dining Room with Ornate Wooden Furniture",
      image: Image1,
      description:
        "This elegant traditional dining room features ornate wooden furniture, including a classic dining table and upholstered chairs. The rich wood tones and intricate detailing on the furniture add a sense of timeless sophistication. The room is accented with a grand chandelier and luxurious drapery, creating a formal atmosphere perfect for hosting family gatherings and special occasions."
    },
    {
      title: "Classic Traditional Dining Room with Vintage Decor and Soft Lighting",
      image: Image2,
      description:
        "This classic traditional dining room showcases vintage decor elements and soft ambient lighting that evoke a sense of nostalgia. The dining table, crafted from dark wood, is paired with cushioned chairs and an antique sideboard. A beautiful area rug anchors the space, while the soft lighting from wall sconces and a central chandelier enhances the warm and inviting ambiance, ideal for intimate dinners."
    },
    {
      title: "Cozy Traditional Dining Room with Warm Earthy Tones and Textured Fabrics",
      image: Image3,
      description:
        "This cozy traditional dining room features warm earthy tones and textured fabrics that create a welcoming and comfortable atmosphere. The wooden dining table is complemented by upholstered chairs in neutral shades, while the addition of a patterned rug and curtains adds depth and character to the space. The traditional decor and soft lighting make this dining room perfect for relaxed family meals and gatherings."
    },
    {
      title: "Grand Traditional Dining Room with Mahogany Table and Chandeliers",
      image: Image4,
      description:
        "This grand traditional dining room is defined by its magnificent mahogany dining table and matching chairs, exuding elegance and refinement. The room is highlighted by crystal chandeliers that provide a warm, ambient glow. Classic art pieces and decorative molding on the walls add to the opulent feel, making this dining room an exquisite setting for formal dinners and celebrations."
    },
    {
      title: "Charming Traditional Dining Room with Floral Patterns and Vintage Accents",
      image: Image5,
      description:
        "This charming traditional dining room features floral patterns and vintage accents that create a delightful and inviting atmosphere. The dining table is set with floral china and complemented by chairs with patterned upholstery. The room is adorned with vintage decor items, such as a classic sideboard and framed prints, while soft lighting and fresh flowers complete the look, making this space perfect for casual and elegant dining."
    },
    {
      title: "Refined Traditional Dining Room with Dark Wood and Classic Art",
      image: Image6,
      description:
        "This refined traditional dining room combines dark wood furniture with classic art to create a sophisticated and polished look. The large dining table is surrounded by upholstered chairs, and the walls are adorned with framed paintings and elegant sconces. The rich color palette and luxurious materials make this dining room an ideal space for entertaining guests in a classic and elegant setting."
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
      <div className={styles.modernLivingRoom}>Our Traditional Dining Room Design</div>

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

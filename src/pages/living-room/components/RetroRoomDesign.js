import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/retro-1.jpg";
import Image2 from "../../../assets/Images/retro-2.jpg";
import Image3 from "../../../assets/Images/retro-4.jpg";
import Image4 from "../../../assets/Images/retro-3.jpg";
import Image5 from "../../../assets/Images/retro-5.jpg";
import Image6 from "../../../assets/Images/retro-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
    const data = [
        {
          title: "A Retro Living Room with Bold Patterns and Vibrant Colors",
          image: Image1,
          description:
            "This retro living room features an explosion of bold patterns and vibrant colors that capture the essence of mid-20th century design. The room is adorned with eye-catching geometric prints, bright hues, and eclectic decor elements that create a lively and energetic atmosphere. Vintage-inspired furniture and accessories complement the vivid color palette, adding a nostalgic touch. The dynamic interplay of patterns and colors makes this living room a striking example of retro style, celebrating the playful and innovative design trends of the past."
        },
        {
          title: "A Retro Living Room with Mid-Century Furniture and Vintage Decor",
          image: Image2,
          description:
            "This retro living room showcases mid-century furniture and vintage decor that evoke the charm and sophistication of the 1950s and 60s. The space features classic mid-century pieces such as tapered leg sofas, teak coffee tables, and retro armchairs, all paired with nostalgic decor items. The use of rich wood tones, patterned rugs, and retro artwork adds depth and character to the room. The combination of timeless furniture and vintage accents creates a warm and inviting atmosphere that reflects the elegance of mid-century design."
        },
        {
          title: "A Retro Living Room with Geometric Wall Art and Statement Pieces",
          image: Image3,
          description:
            "This retro living room is defined by its geometric wall art and statement pieces that celebrate the bold aesthetics of the past. The room features striking geometric patterns on the walls, complemented by eye-catching statement furniture and decor items. The use of vibrant colors and angular designs creates a dynamic and visually engaging space. The blend of retro-inspired art and modern statement pieces highlights the room’s unique character, making it a standout example of retro design with a contemporary twist."
        },
        {
          title: "A Retro Living Room with a Bold Sofa and 70s-Inspired Decor",
          image: Image4,
          description:
            "This retro living room is centered around a bold sofa and 70s-inspired decor that captures the essence of the decade’s distinctive style. The sofa, with its striking color and geometric pattern, serves as the focal point of the room. Complementary decor elements such as shaggy rugs, vintage lamps, and retro wall hangings enhance the nostalgic feel. The use of rich textures, warm tones, and iconic 70s design features creates a cozy and vibrant space that celebrates the eclectic spirit of the era."
        },
        {
          title: "A Retro Living Room with a Classic TV Console and Vibrant Upholstery",
          image: Image5,
          description:
            "This retro living room features a classic TV console paired with vibrant upholstery that brings a touch of nostalgia and color to the space. The TV console, with its vintage design, adds a sense of timeless elegance, while the bold and colorful upholstery on the furniture injects a lively and playful element. The combination of retro furnishings and vibrant fabrics creates a harmonious and inviting atmosphere, making this living room a perfect blend of classic charm and contemporary flair."
        },
        {
          title: "A Retro Living Room with Checkerboard Flooring and Retro Posters",
          image: Image6,
          description:
            "This retro living room is characterized by its checkerboard flooring and retro posters that evoke the lively spirit of the past. The bold black-and-white flooring creates a dramatic visual impact, while the collection of vintage posters adds a touch of nostalgia and personality to the space. Complementary retro furnishings and decor elements complete the look, creating a dynamic and engaging environment. The combination of checkerboard patterns and vintage art makes this living room a vibrant and memorable example of retro design."
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
      <div className={styles.modernLivingRoom}>Our Retro Living Room Design</div>

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

import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/retroBed-1.jpg";
import Image2 from "../../../assets/Images/retroBed-12.jpg";
import Image3 from "../../../assets/Images/retroBed-4.jpg";
import Image4 from "../../../assets/Images/retroBed-3.jpg";
import Image5 from "../../../assets/Images/retroBed-5.jpg";
import Image6 from "../../../assets/Images/retroBed-6.jpg";
import rightArrow from '../../../assets/Images/arrow-right.png'

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "A Retro Bedroom with Bold Patterns and Vibrant Bedding",
      image: Image1,
      description:
        "This retro bedroom showcases an array of bold patterns and vibrant bedding that evoke a playful and energetic atmosphere. The room features eye-catching geometric prints and a colorful palette, reminiscent of mid-20th century design. Vintage-inspired furniture and accessories add a nostalgic touch, while the dynamic combination of patterns and colors creates a lively and cozy retreat, perfect for those who love retro style."
    },
    {
      title: "A Retro Bedroom with Mid-Century Bed Frame and Vintage Decor",
      image: Image2,
      description:
        "This retro bedroom features a mid-century bed frame paired with vintage decor elements, capturing the charm of the 1950s and 60s. The design includes classic wooden furniture, patterned bedding, and nostalgic accessories that add character to the space. Rich wood tones and retro accents create a warm and inviting ambiance, making this bedroom a stylish nod to mid-century modern aesthetics."
    },
    {
      title: "A Retro Bedroom with Geometric Wall Art and Statement Bedding",
      image: Image3,
      description:
        "This retro bedroom is defined by its bold geometric wall art and statement bedding, celebrating the vibrant aesthetics of the past. The room features striking geometric designs on the walls and bedding, complemented by retro-inspired furniture and decor. The use of vivid colors and eye-catching patterns creates a dynamic and visually appealing space, perfect for a unique and energetic bedroom vibe."
    },
    {
      title: "A Retro Bedroom with a Bold Bed Frame and 70s-Inspired Decor",
      image: Image4,
      description:
        "This retro bedroom centers around a bold bed frame and 70s-inspired decor that brings a touch of the iconic decade’s style. The striking bed frame, along with shaggy rugs, vintage lighting, and retro wall hangings, creates a cozy and vibrant atmosphere. The use of rich textures, warm tones, and classic 70s elements makes this bedroom a comfortable and nostalgic retreat."
    },
    {
      title: "A Retro Bedroom with a Vintage Dresser and Colorful Accents",
      image: Image5,
      description:
        "This retro bedroom features a vintage dresser paired with colorful accents that bring a lively and nostalgic vibe to the space. The dresser, with its classic design, adds timeless charm, while the vibrant decor elements, such as bold throw pillows and patterned rugs, infuse the room with energy and style. The combination of retro furnishings and bright colors creates a playful yet sophisticated bedroom."
    },
    {
      title: "A Retro Bedroom with Checkerboard Flooring and Vintage Posters",
      image: Image6,
      description:
        "This retro bedroom is highlighted by its checkerboard flooring and vintage posters that evoke the lively spirit of the past. The bold black-and-white flooring makes a striking visual statement, while the collection of retro posters adds personality and nostalgia to the space. Complemented by vintage furniture and decor, this bedroom is a unique and vibrant expression of retro style."
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
      <div className={styles.modernLivingRoom}>Our Retro Bed Room Design</div>

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

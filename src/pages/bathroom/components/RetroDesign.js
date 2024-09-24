import React  , {useEffect, useState} from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/masterbath.jpg";
import Image2 from "../../../assets/Images/masterbath-2.jpg";
import Image3 from "../../../assets/Images/masterbath-3.jpg";
import Image4 from "../../../assets/Images/masterbath-4.jpg";
import Image5 from "../../../assets/Images/masterbath-5.jpg";
import Image6 from "../../../assets/Images/masterbath-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage";

function RetroRoomDesign() {
  const data = [
    {
      title: "Elegant Master Bathroom with Marble Accents and Freestanding Tub",
      image: Image1,
      description:
        "This elegant master bathroom features luxurious marble accents and a stunning freestanding tub as the focal point. The space is designed with a double vanity, sleek fixtures, and a large walk-in shower with glass doors. The combination of marble finishes and soft lighting creates a sophisticated and spa-like atmosphere, perfect for unwinding after a long day."
    },
    {
      title: "Modern Master Bathroom with Minimalist Design and Glass Shower",
      image: Image2,
      description:
        "This modern master bathroom is characterized by its minimalist design and spacious glass-enclosed shower. The clean lines and neutral color palette create a sleek and contemporary look. The floating vanity and frameless mirror add to the open and airy feel of the space, making it a perfect choice for those who appreciate a clutter-free and streamlined aesthetic."
    },
    {
      title: "Luxurious Master Bathroom with Soaking Tub and Chandeliers",
      image: Image3,
      description:
        "This luxurious master bathroom features a deep soaking tub under a sparkling chandelier, creating a truly opulent feel. The double vanity is topped with quartz countertops, and the walk-in shower is adorned with elegant tile work. The rich textures and high-end finishes make this bathroom a lavish retreat, ideal for enjoying a spa-like experience at home."
    },
    {
      title: "Cozy Master Bathroom with Warm Tones and Rustic Accents",
      image: Image4,
      description:
        "This cozy master bathroom is designed with warm tones and rustic accents that create a welcoming and intimate environment. The wooden vanity, stone sink, and earthy color palette add a natural, organic feel to the space. The room is completed with soft lighting and a comfortable layout, making it a perfect place to relax and rejuvenate."
    },
    {
      title: "Classic Master Bathroom with Traditional Design and Elegant Fixtures",
      image: Image5,
      description:
        "This classic master bathroom exudes timeless elegance with traditional design elements and refined fixtures. The clawfoot tub and pedestal sink are complemented by a large mirror framed in wood. The room features a neutral color palette, accented by beautiful tile work and vintage-inspired lighting, creating a serene and sophisticated setting for daily routines."
    },
    {
      title: "Chic Master Bathroom with Bold Tile Patterns and Sleek Vanity",
      image: Image6,
      description:
        "This chic master bathroom features bold tile patterns and a sleek vanity that make a strong design statement. The contrasting black and white tiles add visual interest, while the contemporary vanity with its integrated sink offers a modern touch. The room’s stylish decor and functional layout make it a unique and vibrant space, perfect for those who love to make a statement with their interiors."
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
      <div className={styles.modernLivingRoom}>Our Master BathRoom Design</div>

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

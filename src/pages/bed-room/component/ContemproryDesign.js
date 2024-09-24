import React, { useEffect, useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Image1 from "../../../assets/Images/bed-1.jpg";
import Image2 from "../../../assets/Images/bed-2.jpg";
import Image3 from "../../../assets/Images/bed-3.1.jpg";
import Image4 from "../../../assets/Images/bed-4.1.jpg";
import Image5 from "../../../assets/Images/bed-5.jpg";
import Image6 from "../../../assets/Images/bed-6.jpg";
import rightArrow from '../../../assets/Images/right-arrow (2).png';

import Image from "next/image";
import Modal from "./InteriorDetailsPage"; // Import Modal component

function ContemporaryDesign() {
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


  const data = [
    {
      title: "A Serene Bedroom with a Floating Bed Frame and Soft Lighting",
      image: Image1,
      description:
        "This serene bedroom showcases a sleek floating bed frame with soft ambient lighting, creating a tranquil atmosphere ideal for rest and relaxation. The minimalist design is enhanced by a neutral color palette, while the carefully chosen decor adds a touch of elegance and warmth. Natural materials and gentle hues make this bedroom an inviting sanctuary, perfect for unwinding after a long day. The combination of modern aesthetics and calming elements offers a peaceful retreat within your home."
    },
    {
      title: "A Luxurious Bedroom with a Marble Accent Wall and Elegant Furnishings",
      image: Image2,
      description:
        "This luxurious bedroom features a stunning marble accent wall that adds a touch of sophistication and grandeur to the space. Elegant furnishings in a minimalist style create a refined and comfortable environment. The soft color scheme and plush bedding invite relaxation, making it an ideal space for a restful night's sleep. The use of high-quality materials and understated decor ensures a timeless appeal, offering a serene and stylish retreat."
    },
    {
      title: "A Modern Bedroom with Warm Wooden Elements",
      image: Image3,
      description:
        "This modern bedroom design highlights the natural beauty of wooden elements, creating a warm and inviting atmosphere. The rich textures and earthy tones provide a cozy environment perfect for relaxation. Contemporary furniture pieces complement the wooden accents, while large windows allow natural light to fill the room, enhancing its comforting feel. This bedroom combines modern design with natural charm, offering a space that is both stylish and serene."
    },
    {
      title: "A Contemporary Bedroom with an Integrated Workspace",
      image: Image4,
      description:
        "This contemporary bedroom design features an integrated workspace, offering the perfect blend of comfort and functionality. The thoughtfully designed study area is seamlessly incorporated into the bedroom, providing a practical solution for those who work from home. Clean lines and modern furniture define the space, while soft tones and strategic lighting create a calm and inspiring environment. This bedroom is ideal for both relaxation and productivity."
    },
    {
      title: "A Spacious Bedroom with a Classic TV Area",
      image: Image5,
      description:
        "This spacious bedroom features a cozy reading nook, creating an ideal spot for relaxation and solitude. The comfortable seating area is complemented by soft lighting and a soothing color palette, making it perfect for unwinding with a good book. The overall design emphasizes comfort and tranquility, with plush bedding and modern furnishings enhancing the inviting atmosphere. This bedroom is a peaceful retreat tailored for comfort and leisure."
    },
    {
      title: "A Modern Bedroom with an Open Closet and Dressing Area",
      image: Image6,
      description:
        "This modern bedroom design includes an open closet and dressing area, combining style and practicality in a single cohesive space. The open layout provides easy access to clothing and accessories, while the sleek design and neutral tones create a sophisticated look. The bedroom features comfortable furnishings and ample natural light, making it an ideal setting for both rest and preparation. Experience the convenience and elegance of a well-organized and stylish bedroom."
    }
  ];
  
  

  const scrollLeft = () => {
    document.querySelector(`.${styles.scrollContainer}`).scrollLeft -= 200;
  };

  const scrollRight = () => {
    document.querySelector(`.${styles.scrollContainer}`).scrollLeft += 200;
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
      <div className={styles.modernLivingRoom}>Our Contemporary Bed Room Design</div>

      <div className={styles.scrollWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onClick={scrollLeft}
        >
          &#10094;
        </button>
        <div className={styles.scrollContainer}>
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
              <div className="flex justify-between items-center">
                <button className={styles.getQuoteLivingRoom}>Get Quote</button>
                <button 
                  className={styles.moreInfoLivingRoom} 
                  onClick={() => handleMoreInfoClick(item)}
                >
                  Explore Now
                  <Image src={rightArrow} alt="right arrow" width={25}/>
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

      {/* Modal Component for More Info */}
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

export default ContemporaryDesign;

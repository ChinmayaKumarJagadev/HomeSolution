import React from "react";
import styles from "../../styles/interios.module.css";
import image1 from "../../assets/Images/living-room.jpg";
import image2 from "../../assets/Images/bed-room.jpg";
import image3 from "../../assets/Images/false-ceiling.jpg";
import image4 from "../../assets/Images/kitchen.jpg";
import image5 from "../../assets/Images/wodrobe.jpg";
import image6 from "../../assets/Images/dinning.jpg";
import image7 from "../../assets/Images/bathroom.jpg";
import image8 from "../../assets/Images/balcony.png";
import Image from "next/image";
import { useRouter } from "next/router";

function InteriorSection() {
  const router = useRouter();
  
  return (
    <div className={styles.interiorContainer}>
      <div className={styles.interiorTitle}>
        Your Guide to Our Interior Offerings
      </div>
      <div className={styles.interiorDesc}>
        Custom interior designs that perfectly fit your style and space
      </div>

      <div className={styles.scrollContainerInterior}>
        <div className={styles.interiorImageContainer}>
          <Image
            src={image1}
            alt="error"
            className={styles.interiorImage1}
            width={400}
            onClick={() => router.push('/living-room')}
          />
          <div className={styles.livingRoomText}>Living Room</div>
          <Image
            src={image2}
            alt="error"
            className={styles.interiorImage2}
            width={400}
            onClick={() => router.push('/bed-room')}
          />
          <div className={styles.bedRoomText}>Bed Room</div>
          <Image
            src={image3}
            alt="error"
            className={styles.interiorImage3}
            width={400}
            onClick={() => router.push('/false-ceiling')}
          />
          <div className={styles.ceilingRoomText}>False Ceiling</div>
          <Image
            src={image4}
            alt="error"
            className={styles.interiorImage4}
            width={400}
            onClick={() => router.push('/kitchen')}
          />
          <div className={styles.kitchenRoomText}>Kitchen Room</div>
          <Image
            src={image5}
            alt="error"
            className={styles.interiorImage5}
            width={400}
            onClick={() => router.push('/wodrobe')}
          />
          <div className={styles.wodrobeText}>Wodrobe</div>
          <Image
            src={image6}
            alt="error"
            className={styles.interiorImage6}
            width={400}
          />
          <div className={styles.dinningRoomText}>Dinning Room</div>
          <Image
            src={image7}
            alt="error"
            className={styles.interiorImage7}
            width={400}
          />
          <div className={styles.bathRoomText}>Bathroom</div>
          <Image
            src={image8}
            alt="error"
            className={styles.interiorImage8}
            width={400}
          />
          <div className={styles.balconyText}>Balcony</div>
        </div>
      </div>
    </div>
  );
}

export default InteriorSection;

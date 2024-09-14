import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/res1.jpg";
import Personal2 from "../../../assets/Images/res2.jpg";
import Personal3 from "../../../assets/Images/res3.jpg";
import Personal4 from "../../../assets/Images/res4.jpg";
import Personal5 from "../../../assets/Images/res5.jpg";
import Personal6 from "../../../assets/Images/res6.jpg";
import Personal7 from "../../../assets/Images/res7.jpg";
import Personal8 from "../../../assets/Images/res8.jpg";
import Personal9 from "../../../assets/Images/res9.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";

const homes = [
  {
    img: Personal1,
    title: "Smart Modular Layouts for Efficient Restaurant Design",
  },
  {
    img: Personal2,
    title: "Warm Wooden Interiors for a Welcoming Atmosphere",
  },
  {
    img: Personal3,
    title: "Contemporary Bar Designs for Exciting Nightlife",
  },
  {
    img: Personal4,
    title: "Inviting Open Spaces for Modern Restaurants",
  },
  {
    img: Personal5,
    title: "Interactive Themed Spaces for Memorable Dining",
  },
  {
    img: Personal6,
    title: "Innovative Eco Designs for Environmentally-Conscious Restaurants",
  },
  {
    img: Personal7,
    title: "Trendy Gastro Pub with Relaxed Modern Vibes",
  },
  {
    img: Personal8,
    title: "Relaxing Beachside Restaurant with Breezy Coastal Vibes",
  },
  {
    img: Personal9,
    title: "Charming Café Interiors with Cozy Inviting Feel",
  },
];

function Restaurants() {
  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">
          Restaurants Design
        </h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          Our restaurant designs blend aesthetic elegance with practical
          functionality. We create inviting atmospheres with stylish décor,
          efficient layouts, and comfortable seating. From chic urban bistros to
          cozy family dining spaces, our designs enhance guest experiences,
          optimize space usage, and reflect the unique character of each dining
          establishment.
        </p>
      </div>

      <div className="flex flex-col md:flex-wrap md:flex-row justify-between mt-[20px]">
        {homes.map((home, index) => (
          <div key={index} className={styles.PersonalHomeCardContainer}>
            <Image
              src={Love}
              alt="Like"
              width={20}
              className={styles.personalHomeImagesLike}
            />
            <Image
              src={home.img}
              alt="Home Design"
              width={500}
              className={styles.personalHomeImages}
            />
            <div className={styles.personalHomeCardTitle}>{home.title}</div>
            <div className={styles.cardButtonContainer}>
              <button className={styles.getFullViewHome}>Get Full View</button>
              <button className={styles.bookConsultation}>
                Book A Consultation
              </button>
            </div>
            <button className={styles.priceButtonHomeConst}>
              <span className="line-through mr-[20px]">₹ 10, 20000</span> ₹ 9, 10000
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;

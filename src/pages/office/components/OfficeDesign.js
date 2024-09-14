import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/off1.jpg";
import Personal2 from "../../../assets/Images/off2.jpg";
import Personal3 from "../../../assets/Images/off3.jpg";
import Personal4 from "../../../assets/Images/off4.jpg";
import Personal5 from "../../../assets/Images/off5.jpg";
import Personal6 from "../../../assets/Images/off6.jpg";
import Personal7 from "../../../assets/Images/off7.jpg";
import Personal8 from "../../../assets/Images/off8.jpg";
import Personal9 from "../../../assets/Images/off9.jpg";
import Personal10 from "../../../assets/Images/off10.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";

const homes = [
  {
    img: Personal1,
    title: "Professional Office Designs with a Modern Edge",
  },
  {
    img: Personal2,
    title: "Minimalist Offices with Elegant Design Solutions",
  },
  {
    img: Personal3,
    title: "Luxurious Office Spaces with Clean, Modern Lines",
  },
  {
    img: Personal4,
    title: "Exclusive Office Interiors with a Modern Twist",
  },
  {
    img: Personal5,
    title: "Eco-Friendly Offices with Sustainable Design",
  },
  {
    img: Personal6,
    title: "Corporate Offices with Sleek, Professional Interiors",
  },
  {
    img: Personal7,
    title: "Creative Studio Offices with Inspiring Designs",
  },
  {
    img: Personal8,
    title: "Tech-Driven Offices with Smart Features and Layout",
  },
  {
    img: Personal9,
    title: "Open-Plan Offices with Collaborative Workspaces",
  },
  {
    img: Personal10,
    title: "Home Office Designs with Comfort and Functionality"
  }
];

function OfficeDesign() {
  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">
          Office Design
        </h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          Our office design combines functionality with modern aesthetics,
          creating a space that fosters productivity and collaboration. With
          ergonomic furniture, natural lighting, and open layouts, the
          environment is designed to inspire creativity and provide comfort for
          a seamless work experience.
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

export default OfficeDesign;

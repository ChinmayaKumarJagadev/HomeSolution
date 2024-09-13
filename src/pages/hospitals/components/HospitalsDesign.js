import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/hos1-1.jpg";
import Personal2 from "../../../assets/Images/hos2.jpg";
import Personal3 from "../../../assets/Images/hos3.jpg";
import Personal4 from "../../../assets/Images/hos4.jpg";
import Personal5 from "../../../assets/Images/hos5.jpg";
import Personal6 from "../../../assets/Images/hos6.jpg";
import Personal7 from "../../../assets/Images/hos7.jpg";
import Personal8 from "../../../assets/Images/hos8.jpg";
import Personal9 from "../../../assets/Images/hos9.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";

const homes = [
  {
    img: Personal1,
    title: "Contemporary Hospital Spaces with Advanced Comfort",
  },
  {
    img: Personal2,
    title: "Eco-Friendly Healthcare Facilities with Natural Elements",
  },
  {
    img: Personal3,
    title: "Luxurious Hospital Designs for Premium Patient Care",
  },
  {
    img: Personal4,
    title: "High-Tech Emergency Rooms with Optimal Design",
  },
  {
    img: Personal5,
    title: "Comfortable Outpatient Spaces with Practical Design",
  },
  {
    img: Personal6,
    title: "Innovative Laboratory Spaces with Precision Design",
  },
  {
    img: Personal7,
    title: "Efficient Pharmacy Spaces with Organized Layouts",
  },
  {
    img: Personal8,
    title: "Dynamic Rehabilitation Gyms with Modern Equipment",
  },
  {
    img: Personal9,
    title: "Innovative Outdoor Hospital Designs for Integrated Healing Environments"
  }
];

function HospitalDesign() {
  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">
          Hospitals Design
        </h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          Our designs focus on creating healing environments with thoughtful
          layouts, natural light, and sustainable materials. Each space is
          crafted to enhance patient care and staff efficiency, ensuring a
          modern, welcoming atmosphere for both patients and healthcare
          professionals.
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalDesign;

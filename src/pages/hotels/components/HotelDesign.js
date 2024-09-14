import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/hotel1.jpg";
import Personal2 from "../../../assets/Images/hotel2.jpg";
import Personal3 from "../../../assets/Images/hotel3.jpg";
import Personal4 from "../../../assets/Images/hotel4.jpg";
import Personal5 from "../../../assets/Images/hotel5.jpg";
import Personal6 from "../../../assets/Images/hotel6.jpg";
import Personal7 from "../../../assets/Images/hotel7.jpg";
import Personal8 from "../../../assets/Images/hotel8.jpg";
import Personal9 from "../../../assets/Images/hotel9.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";

const homes = [
  {
    img: Personal1,
    title: "Smart Modular Layouts for Efficient Hotels Design",
  },
  {
    img: Personal2,
    title: "Stylish Hotel Rooms with Relaxing Resort Features",
  },
  {
    img: Personal3,
    title: "Luxury Hotels Offering Exclusive Rooftop Pool Experiences",
  },
  {
    img: Personal4,
    title: "Relaxing Beachfront Hotels with Stunning Ocean Views",
  },
  {
    img: Personal5,
    title: "Comfortable Rooms with Scenic Mountain Views",
  },
  {
    img: Personal6,
    title: "Trendy Urban Hotels with Modern City Vibes",
  },
  {
    img: Personal7,
    title: "Luxurious Spa Resorts with Relaxing Wellness Features",
  },
  {
    img: Personal8,
    title: "Modern Spaces Featuring Stunning Rooftop Experiences",
  },
  {
    img: Personal9,
    title:"Comfortable Rooms with River-Inspired Decor"
  }
];

function HotelDesign() {
  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">
          Hotels Design
        </h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          Explore our contemporary hotel design featuring elegant rooms with
          modern amenities, a stylish lobby, and exceptional guest services.
          Each space is thoughtfully designed for comfort and sophistication,
          ensuring a memorable stay with personalized touches and seamless
          convenience.
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

export default HotelDesign;

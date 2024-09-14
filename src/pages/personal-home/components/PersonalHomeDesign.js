import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/personal1.jpg";
import Personal2 from "../../../assets/Images/personal2.jpg";
import Personal3 from "../../../assets/Images/personal3.jpg";
import Personal4 from "../../../assets/Images/personal4.jpg";
import Personal5 from "../../../assets/Images/personal5.png";
import Personal6 from "../../../assets/Images/personal6.jpg";
import Personal7 from "../../../assets/Images/personal7.jpg";
import Personal8 from "../../../assets/Images/personal8.jpg";
import Personal9 from "../../../assets/Images/personal9.jpg";
import Personal91 from "../../../assets/Images/personal9-1.jpg";
import Personal10 from "../../../assets/Images/personal10.jpg";
import Personal11 from "../../../assets/Images/personal11.jpg";
import Personal12 from "../../../assets/Images/personal12.jpg";
import Personal13 from "../../../assets/Images/personal13.jpg";
import Personal14 from "../../../assets/Images/personal14-1.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const homes = [
  {
    id: 1,
    img: Personal1,
    title: "Modern Personal Home with Open Floor Plan and Natural Light",
  },
  {
    id: 2,
    img: Personal2,
    title: "Cozy Rustic Home with Fireplace and Wooden Accents",
  },
  {
    id: 3,
    img: Personal3,
    title: "Luxurious Contemporary Home with Infinity Pool and Modern Design",
  },
  {
    id: 4,
    img: Personal4,
    title: "Charming Cottage Home with Garden and Outdoor Living Space",
  },
  {
    id: 5,
    img: Personal5,
    title: "Modern Urban Home with Rooftop Terrace and City Views",
  },
  {
    id: 6,
    img: Personal6,
    title: "Classic Colonial Home with Formal Dining and Study Room",
  },
  {
    id: 7,
    img: Personal7,
    title: "Stylish Contemporary Home with Open Kitchen and Living Area",
  },
  {
    id: 8,
    img: Personal8,
    title: "Modern Eco-Friendly Home with Solar Panels and Green Roof",
  },
  {
    id: 9,
    img: Personal9,
    title: "Elegant Modern Home with Large Windows and Scenic Views",
  },
  {  id: 10, img: Personal91, title: "Modern White Brick Wallpaper Design For Home" },
  {
    id: 11,
    img: Personal10,
    title: "L-Shape Contemporary House with Courtyard Garden",
  },
  {
    id: 12,
    img: Personal11,
    title: "Unique T-Shape Home with Integrated Outdoor Space",
  },
  {
    id: 13,
    img: Personal12,
    title: "Sophisticated Monochrome Walls with Sleek Marble Detailing",
  },
  {
    id: 14,
    img: Personal13,
    title: "Eclectic Fusion: Abstract Wall Art with Textured Paint Finishes",
  },
  {
    id: 15,
    img: Personal14,
    title: "3D Geometric Walls with Light and Shadow Play View",
  },
];

function PersonalHomeDesign() {
  const router = useRouter();
  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">
          Personal Home Design
        </h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          For your personal home design, we specialize in creating unique,
          functional, and aesthetically stunning spaces that reflect your
          individual lifestyle. Our tailored designs blend innovation with
          comfort, ensuring every detail is crafted to perfection.
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
              onClick={() => router.push(`/personal-home/details/${home?.id}`)}
            />
            <div className={styles.personalHomeCardTitle}>{home.title}</div>
            <div className={styles.cardButtonContainer}>
              <button className={styles.getFullViewHome} ><Link href={`/personal-home/details/${home?.id}`}>Get Full View</Link></button>
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

export default PersonalHomeDesign;

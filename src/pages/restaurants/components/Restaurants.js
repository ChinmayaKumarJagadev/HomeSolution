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
import Link from "next/link";
import { useRouter } from "next/router";

const homes = [
  {
    id: 1,
    img: Personal1,
    title: "Smart Modular Layouts for Efficient Restaurant Design",
  },
  {
    id: 2,
    img: Personal2,
    title: "Warm Wooden Interiors for a Welcoming Atmosphere",
  },
  {
    id: 3,
    img: Personal3,
    title: "Contemporary Bar Designs for Exciting Nightlife",
  },
  {
    id: 4,
    img: Personal4,
    title: "Welcoming Open Spaces for Contemporary Dining Experiences in Modern Restaurants",
  },
  {
    id: 5,
    img: Personal5,
    title: "Interactive Themed Spaces for Memorable Dining",
  },
  {
    id: 6,
    img: Personal6,
    title: "Innovative Eco Designs for Environmentally-Conscious Restaurants",
  },
  {
    id: 7,
    img: Personal7,
    title: "Trendy Gastro Pub with Relaxed Modern Vibes",
  },
  {
    id: 8,
    img: Personal8,
    title: "Relaxing Beachside Restaurant with Breezy Coastal Vibes",
  },
  {
    id:9,
    img: Personal9,
    title: "Charming Café Interiors with Cozy Inviting Feel",
  },
];

function Restaurants() {
  const router = useRouter();

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
              onClick={() => router.push(`/restaurants/details/${home?.id}`)}
            />
            <div className={styles.personalHomeCardTitle}>{home.title}</div>
            <div className={styles.cardButtonContainer}>
              <button className={styles.getFullViewHome} ><Link href={`/restaurants/details/${home?.id}`}>Get Full View</Link></button>
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

export default Restaurants;

import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/flat-1.jpeg";
import Personal2 from "../../../assets/Images/flat-21.jpg";
import Personal3 from "../../../assets/Images/flat-3.jpg";
import Personal4 from "../../../assets/Images/flat-4.jpg";
import Personal5 from "../../../assets/Images/flat-5.jpg";
import Personal6 from "../../../assets/Images/flat6.jpg";
import Personal7 from "../../../assets/Images/flat-7.jpg";
import Personal8 from "../../../assets/Images/flat-84.jpg";
import Personal9 from "../../../assets/Images/flat-9.jpg";
import Personal91 from "../../../assets/Images/flat-10.jpg";
import Personal10 from "../../../assets/Images/flat-11.jpg";
import Personal11 from "../../../assets/Images/flat-12.jpg";
import Personal12 from "../../../assets/Images/flat-13.jpg";
import Personal13 from "../../../assets/Images/flat-14.jpg";
import Personal14 from "../../../assets/Images/flat-15.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const homes = [
  {
    id: 1,
    img: Personal1,
    title: "Modern 2 BHK Flats with Open Layout Concepts",
  },
  {
    id: 2,
    img: Personal2,
    title: "Luxury 3 BHK Flats with Spacious Balconies",
  },
  {
    id: 3,
    img: Personal3,
    title: "Compact Studio Flats Ideal for Single Living",
  },
  {
    id: 4,
    img: Personal4,
    title: "Elegant 4 BHK Flats for Large Families",
  },
  {
    id: 5,
    img: Personal5,
    title: "Affordable 1 BHK Flats for Young Professionals",
  },
  {
    id: 6,
    img: Personal6,
    title: "Contemporary Duplex Flats with Private Terraces",
  },
  {
    id: 7,
    img: Personal7,
    title: "Budget-Friendly Flats for Small Families and Couples",
  },
  {
    id: 8,
    img: Personal8,
    title: "Premium Penthouse Flats with Scenic City Views",
  },
  {
    id: 9,
    img: Personal9,
    title: "Smart Home Flats with Advanced Technology Integration",
  },
  {
    id: 10,
    img: Personal91,
    title: "Luxurious 5 BHK Flats with Exclusive Living Zones",
  },
  {
    id: 11,
    img: Personal10,
    title: "Eco-Friendly Flats with Sustainable Design Features",
  },
  {
    id: 12,
    img: Personal11,
    title: "Family-Friendly Flats with Kid’s Play Area Access",
  },
  {
    id: 13,
    img: Personal12,
    title: "Spacious 3 BHK Flats with Modular Kitchens",
  },
  {
    id: 14,
    img: Personal13,
    title: "Terrace Flats with Private Rooftop Lounge Areas",
  },
  {
    id: 15,
    img: Personal14,
    title: "Cozy Flats with a best Contemporary Balcony",
  },
];

function FlatDesign() {
  const router = useRouter();
  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">Flat Design</h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          Discover the perfect blend of comfort and style with our modern flat
          designs. Each layout is thoughtfully crafted to maximize space and
          natural light, featuring open floor plans, sleek finishes, and
          versatile living areas. Enjoy contemporary amenities, including smart
          home technology and energy-efficient features, all within a
          beautifully designed environment
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
              onClick={() => router.push(`/flats/details/${home?.id}`)}
            />
            <div className={styles.personalHomeCardTitle}>{home.title}</div>
            <div className={styles.cardButtonContainer}>
              <button className={styles.getFullViewHome} ><Link href={`/flats/details/${home?.id}`}>Get Full View</Link></button>
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

export default FlatDesign;

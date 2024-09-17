import Image from "next/image";
import React from "react";
import Personal1 from "../../../assets/Images/shop1.jpg";
import Personal2 from "../../../assets/Images/shop2.jpg";
import Personal5 from "../../../assets/Images/shop-2.1.1.jpg";
import Personal6 from "../../../assets/Images/shop6.jpg";
import Personal7 from "../../../assets/Images/shop7.jpg";
import Personal8 from "../../../assets/Images/shop8.jpg";
import Personal9 from "../../../assets/Images/shop9.jpg";
import Love from "../../../assets/Images/love.png";
import styles from "../../../styles/personalhome.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const homes = [
  {
    id : 1,
    img: Personal1,
    title: "Effortlessly Stylish Shops with Modern Layouts",
  },
  {
    id : 2,
    img: Personal2,
    title: "Elegant Shop Designs for Optimal Shopping Experience",
  },
  {
    id : 3,
    img: Personal5,
    title: "Unique Shop Interiors for Enhanced Customer Experience",
  },
  {
    id : 4,
    img: Personal6,
    title: "Unique Retail Spaces with Seamless Outdoor Integration",
  },
  {
    id : 5,
    img: Personal7,
    title: "Trendy Shops with Engaging Customer Interactions",
  },
  {
    id : 6,
    img: Personal8,
    title: "Boutique Shops with Creative Interiors and Design",
  },
  {
    id : 7,
    img: Personal9,
    title: "Environmentally Friendly Stores with Smart Designs",
  },
];

function ShopDesign() {
  const router = useRouter();

  return (
    <div className="mt-[25px]">
      <div className="">
        <h1 className="text-[24px] font-semibold md:text[34px]">Shop Design</h1>
        <p className="w-[92%] text-textColor md:text[24px] text-[14px] md:w-[70%]">
          Create a stylish and functional shop with custom designs tailored to
          your business. Our expert team focuses on optimizing space, enhancing
          customer experience, and delivering unique, eye-catching layouts that
          elevate your brand's identity.
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
              onClick={() => router.push(`/shops/details/${home?.id}`)}
            />
            <div className={styles.personalHomeCardTitle}>{home.title}</div>
            <div className={styles.cardButtonContainer}>
            <button className={styles.getFullViewHome}>
                <Link href={`/shops/details/${home?.id}`}>Get Full View</Link>
              </button>
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

export default ShopDesign;

import Header from "@/components/Home/Header";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer/index";
import styles from "../../../styles/personalhome.module.css";
import Image1 from "../../../assets/Images/personal1.jpg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cardsData  from "../function";

const PersonalHomeCardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const card = cardsData?.find((card) => card.id === parseInt(id));
  const isActive = (path) => router.pathname === path;
  const [selectedImage, setSelectedImage] = useState(card?.image || Image1); 

  console.log(cardsData)

  if (!card) return <div>Card not found</div>;


  const handleThumbnailClick = (image) => {
    setSelectedImage(image); // Update the main image when a thumbnail is clicked
  };

  return (
    <div>
      <Header />
      <div className="mt-[142px] px-[20px] md:px-[50px]">
        <div className="pt-[20px] md:pt-[50px] mr-auto">
          <ul className="flex gap-[10px]">
            <li>
              <Link href="/">
                <span
                  className={
                    isActive("/")
                      ? "text-blue-500 md:text-[16px] text-[12px]"
                      : "text-customRed md:text-[16px] text-[12px]"
                  }
                >
                  Home /
                </span>
              </Link>
            </li>
            <li>
              <Link href="/personal-home">
                <span
                  className={
                    isActive("/personal-home")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-customRed md:text-[16px] text-[12px]"
                  }
                >
                  Personal Home /
                </span>
              </Link>
            </li>
            <li>
              <Link href={`${id}`}>
                <span
                  className={
                    isActive(`${id}`)
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  {id}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.homeDetailContainer}>
          <div className={styles.homeCardDetailsLeftContainer}>
            <h1 className={styles.homeCardDetailsTitle}>{card.title}</h1>
            <p className={styles.homeCardDetailsDesc}>{card.description}</p>
            <p className={styles.homeCardDetailsText}>
              <span className={styles.homeCardAllDetailsTitle}>Layout :</span>{" "}
              {card.layout}
            </p>

            <p className={styles.homeCardDetailsText}>
              <span className={styles.homeCardAllDetailsTitle}>Style :</span>{" "}
              {card.style}
            </p>

            <p className={styles.homeCardDetailsText}>
              <span className={styles.homeCardAllDetailsTitle}>
                Ideal For :
              </span>{" "}
              {card.idealFor}
            </p>

            <p className={styles.homeCardDetailsText}>
              <span className={styles.homeCardAllDetailsTitle}>
                Special Features :
              </span>{" "}
              {card.SpecialFeature}
            </p>

            <button className={styles.homeCardPriceButton}>{card.price}</button>
          </div>

          <div>
            <Image
              src={selectedImage}
              alt="err"
              width={800}
              className={styles.homeCardDetailsImage}
            />
            <div className="flex gap-[15px] md:gap-[25px] ml-0 md:ml-[50px]">
              {card?.bottomImage?.map((item, index) => {
                return (
                  <Image
                    src={item}
                    alt="err"
                    width={150}
                    className={styles.homeCardDetailsBottomImage}
                    onClick={() => handleThumbnailClick(item)} 
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default PersonalHomeCardDetail
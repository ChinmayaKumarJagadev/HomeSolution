import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../styles/services.module.css";
import Link from "next/link";
import HeroContainer from "./HeroContainer";
import Hero2Container from "./Hero2Container";
import ServiceMiddle from "./ServiceMiddle";
import Review from "./review";

function ServicesPageDesign() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [clipText, setClipText] = useState(false);

  const handleButtonClicked = () => {
    setClipText(!clipText);
  };

  return (
    <div className={styles.servicesPageContainer}>
      <div className="md:ml-[50px] ml-[20px]">
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
            <Link href="/services">
              <span
                className={
                  isActive("/services")
                    ? "text-black md:text-[16px] text-[12px]"
                    : "text-black md:text-[16px] text-[12px]"
                }
              >
                Services
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={styles.servicesMainTitle}>Services</div>

        <div className={styles.servicesMainDesc}>
          At HomeSolutionsstudio.com, we specialize in transforming your dream
          spaces into reality. Our comprehensive construction and interior
          design services cater to every stage of your project, from initial
          concept to final execution. Whether you’re building a new home or
          renovating an existing space, our team of skilled architects,
          designers, and craftsmen ensures seamless integration of
          functionality, aesthetics, and innovation.
          <span
            className={styles.servicesMainReadMoreButton}
            onClick={handleButtonClicked}
          >
            {!clipText ? "Read more" : ""}
          </span>
          {clipText && (
            <>
              <span>
                We offer personalized solutions tailored to your needs, focusing
                on quality, sustainability, and meticulous attention to detail.
                From modern homes to luxurious interiors, we craft environments
                that reflect your style and elevate your living experience.
                Trust us to build spaces that inspire and delight, bringing your
                vision to life with unparalleled expertise and creativity.
              </span>
              <span
                className={styles.servicesMainReadMoreButton}
                onClick={handleButtonClicked}
              >
                Read less
              </span>
            </>
          )}
        </div>
      </div>

      <HeroContainer />
      <Hero2Container />
      <ServiceMiddle />
      <Review />
    </div>
  );
}

export default ServicesPageDesign;
